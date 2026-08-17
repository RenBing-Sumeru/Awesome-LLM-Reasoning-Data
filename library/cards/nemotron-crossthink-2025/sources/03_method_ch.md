论文训练表包含 99,842 条 MMLU train、192,930 条合成 Nemotron-CrossThink-QA、100,000 条 NaturalReasoning、87,350 条 NuminaMath、100,000 条合成 Nemotron-CrossThink-Math 和 8,523 条 MATH。QA 构造使用 topic/subtopic/difficulty 生成、Common Crawl 与人工核对 OCR 的 OpenStax/Formal Logic 教材。具名生成器包括 Nemotron-4-340B-Instruct、Qwen2.5 系列、Mixtral-8x22B-Instruct-v0.1、Qwen2.5-VL-72B-Instruct、DeepSeek-R1 与 Qwen2.5-72B-Math-Instruct。合成 QA 答案通过 DeepSeek-R1 多个解答的多数投票确定。

过滤会删除 gold 不在选项中的 MCQ、移除选项后不完整的问题、gold 超过 10 个词的开放题，以及没有答案的数学题。困难数据实验还保留 Qwen2.5-7B 答错的 GPR 提示。主要 policy 为 Qwen2.5-7B/32B。veRL GRPO 使用 8 个 rollout、temperature 与 top-p 均为 1.0、每步 128 个唯一提示、batch/PPO minibatch 128、context 5,000、learning rate 1e-6、KL 0.001 和固定 650 步。

Hugging Face v1 在固定 revision a4ce9a3b9434c5f231e2cbe30696d9a721c11d69 下有 train_qa=187,496、train_math=99,880，合计 287,376 行。它少于论文表中的数量，也不包含四个开源组件、blend manifest、在线 rollout 或 reward 日志。

