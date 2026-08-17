报告从 MiMo-V2-Flash-Base 开始，描述通用 SFT，随后使用专门教师的 RL/SFT 和 MOPD。内部专门 checkpoint 生成 SFT 响应，学生模型生成 on-policy rollout。教师身份、checkpoint 和领域路由没有披露，合成环境生成器也未发布。

prompt 来源只在高层说明：内部、真实和合成的 SFT 与 agent-RL 任务包括 GitHub issues、Stack Overflow/Exchange、终端任务、网页和搜索任务，以及合成功能调用。agent 基底包括未发布的代码、终端、Playwright 网页、搜索和合成功能调用环境。报告描述了约 12 万个环境，但未提供其分配、快照、任务 manifest 或记录数量。

反馈结合教师 reverse-KL、ORM advantages、程序化代码或工具检查、LLM judge 和多模态网页验证。报告提到了难度、可靠性、通过率、环境验证和视觉辨别过滤。它没有给出模型或 rubric 身份、阈值、MOPD 权重、rollout 数、解码参数、接受产出比例、完整优化器设置或推理预算。
