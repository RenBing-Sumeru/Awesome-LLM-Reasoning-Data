主要证据是与人类偏好的 agreement。论文报告 3K 受控专家投票和 3K 抽样众包投票，GPT-4 judge 与人类的一致率超过 80%，达到与 human-human agreement 相近的水平。在 MT-Bench second-turn 的 non-tie 比较中，GPT-4 pairwise judge 与人类一致率为 85%，human-human 为 82%；在 Chatbot Arena 的 non-tie 比较中，GPT-4 pairwise judge 与人类投票一致率为 87%。

artifact 证据比较具体：80 道 MT-Bench 问题、6 个模型回答集的人类标注、FastChat `llm_judge` 脚本，以及 Hugging Face 上 `lmsys/mt_bench_human_judgments` 数据集卡，后者列出 3.3K expert-level pairwise human preferences，许可证为 cc-by-4.0。逐条证据不是“答案正确性”，而是在指定 prompt 和回答顺序下，独立人类或 GPT judge 选择 A、B 或 tie。

证据边界不能省略。模型差距越大 agreement 越高，接近 tie 时更不稳定；answer order swap 会暴露 position bias；数学答案如果没有 reference 或更强约束，judge 可能误判。因此复用 leaderboard 或分数时必须保留 judge prompt、回答顺序、tie policy、model version 和数据快照。
