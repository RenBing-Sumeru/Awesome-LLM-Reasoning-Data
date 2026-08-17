输入来自公开 GitHub Archive issue/PR 活动、克隆后的仓库历史、issue 描述、PR 讨论、commit SHA、diff、测试改动、许可证标签、活跃度统计和主要编程语言元数据。候选仓库必须采用宽松许可证；候选任务必须对应已解决 issue、已合并 PR，并且该 PR 修改测试。高资源生态的阈值为 25 stars 与 15 个已关闭 issue，长尾生态为 10 stars 与 1 个已关闭 issue。系统用大小写不敏感的 `(?i)(test(?:ing|s)?|e2e)` 启发式区分测试文件与非测试 solution patch，并在后续标注 inline-test 病理。（论文 §3.1；附录 A.1）

环境构造首先让 Qwen3-Coder-480B-A35B-Instruct 生成语言 base Dockerfile。随后 mini-SWE-agent v1.14.4 以同一模型为后端，检查仓库、安装依赖、运行测试，并输出仓库级安装与测试脚本。主采集对每个仓库只进行一次生产 setup 尝试。Qwen3-Coder-480B-A35B-Instruct 还合成仓库特定的 Python 日志 parser，把原始测试输出映射成 test-name → PASSED/FAILED/SKIPPED；parser 最多重新生成五轮。同一仓库的多个任务复用一次成功 setup。（论文 §§3.2、4.1；附录 A.2–A.3）

可执行验证从 `base_commit` 开始应用 `test_patch` 并运行全测试集，再应用历史 solution `patch` 并重新运行全测试集。只有 setup 与解析成功、且至少一个测试由失败转为通过的候选才进入下一步。之后系统把 issue 文本分别交给 gpt-oss-120b、GLM-4.7 和 DeepSeek-V3.2，三者一致认为说明充分时才保留。gpt-oss-120b 补充难度、PR 类别、A/B 病理代码、置信度、外部 URL 和测试对齐说明；另一条 prompt 抽取测试覆盖的 interface。论文 prompt 定义 B1–B7，而当前主 Hugging Face schema 只暴露 B1–B6。

更大的 PR-derived 分支面向没有关联 issue、但所在仓库已有成功 setup 的 PR。它根据 PR 描述与 gold patch 生成 problem statement，再用改进 prompt 与 post-processing 尝试减少 solution leakage。PR 问题生成器、interface 生成器、解码参数、可疑泄漏 detector、阈值、拒绝数量和实测泄漏率均为 unknown。当前发布包含 126,300 条 `train` 记录和安装/F2P/P2P 元数据，但没有顶层预构建 image 字段。

用于下游评测或 RLVR 时，官方 evaluator 启动任务镜像，应用提交 patch 与 `test_patch`，执行全测试集 `test_cmd`，再把最终解析状态归约为 `passed_match` 以及 F2P/P2P 诊断。监督附着于完整修复 episode；没有逐步标签、shaped reward 或公开 action trace。作者把数据定位于 agent training、test-reward RL/RL warm-up、SFT 子集选择与评测，但论文没有训练智能体，也没有数据训练消融。

复现必须固定 arXiv v2、代码 commit `c71902a8cf8d2b725f63d51f199f4d3e56f68d2d`、主数据 revision `475dd5e8703bb5fb22dd3c60b5d038b019eba1e0` 和 PR 数据 revision `40faf2c1bb160de625f3c3270ac9d62ea45f3f9c`。还应固定 OCI digest、依赖 snapshot、parser/runner 版本、网络与 timeout 策略及任务划分。官方仓库没有 tag 或 GitHub Release，也没有公开完整的 GitHub Archive harvesting 与分布式采集实现。
