arXiv 官方报告为分阶段配方提供了较强证据。它说明了推理开关提示、领域来源、数学候选数量、代码解码参数、具体生成器与评审器、筛选操作、SFT 调度、LN-Ultra GRPO 奖励与课程、指令遵循 RLOO 和偏好优化奖励模型；还报告了 33,011,757 条样本的领域表，并明确区分三个模型的训练路径。

Hugging Face 官方数据集是真实可下载工件，而不是只有论文声明。它包含 SFT 与 RL 配置、版本化文件、数据集卡、记录级许可证和训练元数据，以及可见样例。SFT 预览公开 `input`、`output`、`category`、`license`、`reasoning`、`generator`、`used_in_training`、`version` 和 `system_prompt`。RL 指令遵循预览则以结构化约束参数取代回答输出。当前 viewer 将 SFT 估算为约 3.91M 行，而 RL 完整生成因某些分片结构字段无法转换到声明模式而失败。原始文件仍可能下载，但该故障会影响便捷的程序化审计。

NVIDIA 官方模型卡可以确认 Llama-3.1-Nemotron-Nano-8B-v1、Llama-3.3-Nemotron-Super-49B-v1 和 Llama-3_1-Nemotron-Ultra-253B-v1 权重已发布，并适用 NVIDIA Open Model License 与相应 Llama 条款；NVIDIA collection 汇集了该系列。NVIDIA 还将 NeMo、NeMo-Aligner、Megatron-LM 和 NeMo-Skills 列为相关代码库。不过，报告使用的是 NeMo-Aligner 开发分支，本卡核验的来源没有固定精确 commit、配置或端到端运行清单。

基准表支持这些模型在指定解码与评测设置下的行为结论，却不能验证每条数据的推理正确性、来源完整性、权利兼容性或无重叠。课程与推理模式消融同样可以支持训练设计选择，但不能统一解释发布数量，也不会公开被拒候选。
