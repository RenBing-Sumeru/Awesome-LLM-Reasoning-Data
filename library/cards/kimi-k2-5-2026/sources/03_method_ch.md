预训练管线从 Kimi K2 开始，训练 MoonViT-3D 视觉编码器，随后联合训练视觉与语言，最后用更高质量 mid-training 数据激活长上下文。报告点名了整理后的网页文本、代码、数学、知识、检索/爬取的 STEM 内容、图像—代码对、GUI 截图/动作轨迹、视频、grounding 数据和合成搜索 prompt。来源清单、混合权重、记录数、权利与 item-level lineage 未发布。

对 SFT，K2、K2 Thinking 和专有 in-house expert model 合成候选响应。领域专属管线结合人工标注、prompt engineering 和多阶段验证。对视觉 RL，outcome-based 任务包括 grounding/counting、图表/文档理解和视觉关键 STEM；选定 RL 轨迹可用于 rejection-sampling fine-tuning。精确教师版本、prompt、选择阈值、产出和拒绝样本均为 unknown。

Unified Agentic RL Environment 被描述为一个 Gym-like 系统，包含可插拔 tool、sandbox、judge、prompt diversification 和 instruction-following 组件。任务是可触发 subtask rollout 的异步 coroutine；报告称 rollout manager 可编排最多 100,000 个并发 agent 任务。它没有发布环境代码/配置、任务实例、container、工具状态或 rollout 记录。
