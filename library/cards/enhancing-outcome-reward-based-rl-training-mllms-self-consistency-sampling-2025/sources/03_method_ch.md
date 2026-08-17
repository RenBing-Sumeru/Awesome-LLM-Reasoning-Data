训练 prompt 被过滤为带关联图像的多项选择题。表 1 报告 M3CoT 7.8k、Geometry3K 2.1k、保留的 ScienceQA 6.2k，总计约 16.1k。经核对，Hugging Face release 中 Qwen 格式 JSONL 含 16,180 行，因此论文舍入后的表格数与发布文件应单独核对，不能直接视为完全相同。每行发布数据保存 question、answer 和序列化 multimodal message；它属于 prompt data，不是 rollout/reward ledger。

RL 期间，当前 policy 先采样初始轨迹。SCS 将其截断，对每个 continuation 独立扰动图像，重采样选项答案，根据答案集合大小计算 consistency，再加入 accuracy 与 format rewards。对 Qwen2.5-VL-7B 的 RLOO 配置，附录报告 batch size 128、temperature 1、每个 prompt 16 个样本、最大生成长度 3000、截断比例 0.8、四条重采样轨迹；GRPO 使用比例 0.4 和八次重采样；两个 REINFORCE++ 变体使用比例 0.8，并分别重采样四次或八次。论文评估 Qwen2.5-VL-7B-Instruct、Qwen2.5-VL-3B-Instruct、InternVL3-8B，并采用结构化 reasoning-and-answer 输出格式。

环境是基于 OpenRLHF 的在线 multimodal RL。终局 verifier 检查选项正确与输出格式；SCS 额外提供来自重采样答案一致性的标量，而非 step-level judge。正文称实验使用 8 张 A800、约 24 小时，附录时长表则描述 8 张 A100 上 12.5 小时与 17.2 小时的比较，硬件和 run scope 需要协调解释。官方 Apache-2.0 代码、训练脚本、评测代码与 HF data 已发布，但图像归档具体内容、数据 revision、扰动 seed、采样 rollout、奖励分量、checkpoint 和逐 run manifest 未被证明构成完整 replay package。
