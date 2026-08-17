报告描述了通用 SFT、专门教师 RL/SFT，以及最终的 MOPD 阶段。MOPD 将教师 reverse-KL 信号与 ORM advantages 结合；agent 任务还使用程序化代码或工具检查、LLM judge 和多模态网页验证。学生模型提供 on-policy 轨迹，因此数据对象同时包含编写的响应和交互 episode。

从披露账本看，关键贡献是相对明确的混合反馈与环境表面：报告点名了代码、终端、网页、搜索和合成功能调用设置，并说明了 teacher-KL 与 ORM 反馈的角色。它并不发布独立复用所需的任务、轨迹、环境实现、教师路由或 reward 细节。
