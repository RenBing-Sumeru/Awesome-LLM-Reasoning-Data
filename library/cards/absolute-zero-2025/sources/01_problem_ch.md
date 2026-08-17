权威来源是 NeurIPS 2025 Main Conference 收录的十作者论文及其 64 页最终 proceedings PDF。官方项目页、用于复现论文结果的 `paper` 分支（commit `41ed983cdf541cfcd2f963f33c055d50074f3c90`）、公开 seed 文件、checkpoints 和关联日志构成 artifact 记录。

Absolute Zero 处理的具体 curriculum 构造问题是：强化学习能否持续生成自己的可执行推理任务和 reward，而不消费固定的人工整理或 teacher-distilled 任务答案语料？同一个当前 policy 在 proposer 与 solver 两种角色间切换，处理三类 Python 任务。Deduction 给定 `(program, input)` 要求输出；abduction 给定 program 与目标输出，要求找出任意能产生该输出的输入；induction 给出十组生成 I/O 中的五组以及一条 message，要求合成通过另外五组隐藏样例的程序。

因此，内部在线记录不只是 Python triplet。它包括任务类型与采样的 buffer context、proposer prompt/completion、生成程序与输入、executor output、parse/安全/两次运行一致性检查、八次 solver 尝试、估计成功率、proposer learnability reward、solver prompt/completion、任务特定 terminal verdict 和 format reward。这些记录进入持续演化的 buffer，并用于 Task-Relative REINFORCE++ 更新。

“Zero data”只有一个有证据支持的窄定义：**AZR 的 RL 阶段不使用外部人工整理或蒸馏得到的任务答案数据集**。它不表示零先验数据或零人工设计。policy 从外部预训练的 Qwen2.5 或 Llama checkpoint 开始；人类规定 prompts、角色模板、任务分类、identity-function seed、executor 规则、禁用模块、reward、optimizer 和 evaluation suites。executor 本身还提供 privileged program output。

该工作属于 **Data Construction and Open Release Recipes**，因为它披露了在线 self-play recipe、programmatic verifier、reward 计算、buffer policy 和 optimizer scaffold。仓库公开了代码以及模型特定的 256 行 seed JSONL 文件，却没有公开完整论文运行 buffer、proposer/solver rollout、verifier trace、reward、拒绝任务或失败执行记录。本卡达到 L4 双语审阅准备状态，但发布完整性与精确运行复现仍为 partial。
