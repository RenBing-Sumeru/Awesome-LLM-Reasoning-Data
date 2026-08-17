已披露流水线只能在阶段层面重建。

1. **输入与 prompt 来源。** OpenAI 点名了软件工程、数学、研究、医学和计算机使用等宽泛代理训练领域，以及 PR 创建、代码审查、前端编码和 Q&A 四类真实软件工程任务（PDF §1，第 3 页）。安全专用输入包括合成恶意软件 prompt、代码片段、环境配置、prompt-injection 攻击，以及带冲突用户编辑的编码 rollout。条目来源、数量、权利、日期、混合权重和 split membership 均未披露。
2. **生成与交互。** 合成流水线创建恶意软件相关场景，并包含边界样例和对抗样例（§4.1.2.1，第 7 页）。新的 Instruction Hierarchy 数据提供编码环境 prompt injection（§4.2.2.1，第 7–8 页）。在 destructive-action RL 中，一个独立 user model 在 rollout 期间修改 workspace（§4.3.2.1，第 8 页）。生成器 checkpoint、prompt、sampling、temperature、rollout 数和失败样例保留策略均为 unknown。
3. **行为与输出。** 代理产生代码改动、答案、拒绝或防御性帮助以及长程 trajectory。Compaction 允许模型跨多个 context window 工作，报告称单个任务可连贯处理数百万 token（§1，第 3 页）。精确 context state、action schema、tool-call 序列化、compaction threshold、摘要和存储的 trajectory 字段均未披露。
4. **反馈。** 恶意软件行为受 policy compliance 约束，并由专家 golden set 评测；prompt injection 以是否成功忽略为评分目标；destructive-action RL 在不回退用户改动时给予正向强化。仅用于评测的反馈还包括 hidden test、端到端 Playwright 测试、场景 pass/fail、rubric、模型 grader、classifier 加人工作弊复核，以及专家判断。Reward 大小、聚合、校准、grader 版本与训练/评测边界均为 unknown。
5. **筛选与优化。** 恶意软件流水线包含对抗和边界样例，但筛选阈值、产出率、拒绝原因和失败样例保留情况缺失。RL 只在 destructive-action 干预中被明确点名；optimizer、objective mixture、schedule、batch、checkpoint selection 和总训练计算量均未披露。
6. **用途。** 已披露对象可以支撑安全对齐与编码代理 RL；被点名的 benchmark 用于 evaluation，compaction 用于长程 test-time compute。报告不能支持 SFT 复用、reward-model 训练复用或已发布代理 trajectory 等更宽泛主张。

复现需要固定 prompt 和代码仓库 revision、user model 与合成 generator 版本、环境镜像与工具、action 和 patch schema、reward 或 grader 代码、成功和失败 episode、训练/评测 membership、sampling budget、optimizer 设置、compaction 配置、checkpoint hash 以及来源 license。这些 artifact 均未发布。唯一核验的官方 artifact 是 OpenAI 发布页、Deployment Safety Hub HTML 和官方 PDF。
