1. 输入：来自 ActivityNet Captions 与 WikiHow 风格步骤文本的 grounded context。
2. 候选构造：给每个 context 配一个正确 continuation，并生成或采样错误 ending。
3. Adversarial filtering：训练/评估判别器，替换容易被识别的负例，直到 distractor 对构造模型足够困难。
4. 人工验证：检查 gold ending 是否合理，distractor 是否足以作为错误选项。
5. 输出：JSONL 记录，包含 context 字段、四个 ending、label metadata、split 和 source tag。

模型评测的 verifier 是多选 accuracy，不是语义解析器或过程 judge。复现必须固定官方 split、label 是否公开、prompt 格式、选项顺序和具体数据镜像，因为公开镜像与 leaderboard 状态会随时间变化。
