构造流程从 SWE-rebench-V2 开始。作者选择 20,000 个唯一 PR 任务，语言包括 Python、Go、TypeScript、JavaScript、Rust、Java、PHP、C 和 C++，并只保留许可证标签为 MIT、Apache-2.0、BSD-2-Clause 或 BSD-3-Clause 的代码库。随后，MiniMax-M2.5 与 Qwen3.5-122B-A10B 通过 OpenHands 和 SWE-agent 接口在容器化代码库任务中运行，探索文件、调用工具并迭代生成 patch。

不同 framework 的原始日志先被聚合成统一表示。运行时校验移除环境损坏的轨迹；行为剪枝移除达到最大迭代数或提前终止、空 patch、修改 `test_patch`、格式错误或非法并发工具交互以及重复工具错误。基于 AST 的 `TrajectoryScanner` 检查 Bash 命令，并按上下文规则拒绝禁止的 git 历史访问，包括高风险的 reflog、blame、log 或 diff 用法。剩余记录被标准化为 Parquet，包含 role/content/tool-call 字段，并在可用时保留 `reasoning_content`。

代码库测试提供终局 outcome，但发布物没有逐行测试命令、日志、checksum，也没有解释 `resolved=-1` 的原因码。当前 HF 发布物包含 `openhands` 与 `sweagent` 两个 configuration，每个再分为 `minimax_m25` 与 `qwen35_122b` split；四种来源模式分别有 49,948、55,488、57,268 和 44,785 行。Viewer 显示十个顶层字段。`reference_patch` 与 `model_patch` 连同 patch 大小统计嵌套在 `metadata` 中，并非顶层列。

作为验证，论文对 Qwen3-30B-A3B Thinking、Instruct 和 Coder 变体执行 SFT。报告的 SFT 设置为学习率 1e-5、batch size 32、最大上下文 131,072、warmup ratio 0.1、weight decay 0.01、cosine schedule 和三个 epoch。评测最多使用 250 turns 与 256K context，并为 `/think` 和 `/no_think` 分别设置解码参数。教师生成温度、随机种子、重试策略、原始淘汰数量、精确 harness/container commit、optimizer 名称，以及公开行到各 ablation 的清单均为 unknown。

可公开核验的产物包括 arXiv 论文及附录、NVIDIA collection、18.3 GB Parquet 数据集和两个工具定义 JSON 文件。在本卡核验日期，官方 collection 只公开论文与数据集，未提供构造代码仓库或 `OPEN-SWE-AGENT` checkpoint。
