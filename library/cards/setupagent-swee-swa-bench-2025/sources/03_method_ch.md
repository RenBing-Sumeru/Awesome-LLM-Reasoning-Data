输入来自真实 Python 仓库，以及同时解决 issue 并修改测试文件的 merged pull request。SWA 汇合 468 个热门 Python 应用与 50 个 DyPyBench 项目，去重后得到 475 个候选仓库；SWEE 从论文下载量/星标条件下最常下载的 8,000 个 PyPI 项目开始。仓库被限制为 permissive license。任务形式化为 `(R,T,I,E,S*,X*)`：仓库、原始测试、issue、执行环境、参考测试补丁和参考代码补丁（论文 §§3.1、4.1，pp. 3、5–6）。

SetUpAgent 先从仓库文本、CI/CD 配置与引用网页提取候选安装和测试命令。它使用 `uv` 排除晚于 issue 日期发布的依赖版本，并把成功命令存入 reference database，以供相邻仓库版本复用。默认 agent 模型为 GPT-4o-mini，论文给出的准确 ID 是 `gpt-4o-mini-2024-07-18`，使用 greedy decoding。随后，命令在独立的 Ubuntu 22.04-based Docker container 中执行；系统分类失败并最多修订四轮。image digest、完整 package manifest、准确 `uv` 版本、index snapshot、seed、retry policy 以及总 token/成本预算均未披露（论文 §3.3，pp. 3–4；§5.1，p. 7；Appendix A Table 9，p. 12）。

验证把 LLM 的 setup-success 判断与逐测试解析结合起来，在至少 95% 的测试通过时接受环境。构造基准时，作者处理合格 PR，拆分代码与测试补丁，在修复前仓库和 `R ∘ X*` 上运行 `T ∪ S*` 中的全部测试，并把每个测试标记为 P2P、F2P、F2F 或 P2F。修复前后任一执行失败或没有 F2P 测试的 case 都被拒绝。SWA 每仓库最多保留 50 个有效 PR；SWEE 在最多抓取 500 个 PR 后每仓库最多保留 10 个（论文 §§3.1、4.1；Tables 1、10）。

两个 Hub 数据集当前都只发布一个 `test` split。每行保存仓库/commit provenance、issue 与 hint 文本、参考代码/测试补丁、时间戳、四类测试行为列表、安装命令、测试 framework/commands 和 Docker image root。当前版本虽然声明了 `version` 与 `environment_setup_commit` 字段，但值为 null。完整构造日志、失败尝试、逐行 canonical issue/PR URL 与不可变 image digest 均未发布。

评测把候选仓库补丁提交给 SWE-bench-compatible fork。检查过的支持分支会应用补丁、运行逐行命令、标准化并解析日志；只有全部 F2P 与 P2P 测试通过，任务才判为 resolved。timeout、缺失 marker、parser failure 或 patch-application failure 都表示失败。论文评估了 OpenHands、AutoCodeRover v2、SWE-Agent v1 和 ZeroShot variants；没有报告在 SWA-Bench 或 SWEE-Bench 上训练，因此支持的用途仅为 evaluation（论文 §§5.1–5.3，pp. 7–8；harness commit `c11e96679247719201db83c06012adb3221b33be`）。

复现时必须固定 PMLR 论文版本、Hub revisions、非默认 harness 支持分支、parser 行为、Docker images、依赖 index 状态和评测子集。公开 harness fork 不是 SetUpAgent 的生成实现；在已检查的官方 artifacts 中没有找到 SetUpAgent 源码或 reference-command database。
