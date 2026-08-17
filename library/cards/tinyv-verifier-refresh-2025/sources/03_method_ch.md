源数据是 Big-Math-RL-Verified；论文称其包含九类来源、超过 250,000 道数学题，并提供参考答案与 Llama-3.1-8B 生成 64 个回答所得的通过率。离线审计时，DeepSeek-R1-Distill-Qwen-7B 对每题生成四个回答，temperature 为 1、top-p 为 1、context length 为 32,768。流程保留含 boxed answer 且被 Prime 判错的回答。

Qwen2.5-72B-Instruct 采用 non-thinking 模式，Grok-3-Mini-High 采用 thinking 模式，二者独立重新判断保留样本。真实假阴性必须得到两者一致的正确判断。对 200 条共识正例的人工抽查发现 199 条正确、1 条假阳性，同时发现 3 道源题目的 ground truth 错误。合成增强由 Qwen2.5-72B-Instruct 生成至少五个等价答案变体，覆盖格式、记号、近似与表达式变化；候选变体在使用前会再次标注。

论文报告一个包含 638K 个“题目—参考答案—模型回答—LLM 标签”实例的混合池，但该池未公开。公开的平衡 SFT 工件恰有 159,136 条 train 数据：True 与 False 各 79,568 条，真实数据 139,432 条、合成数据 19,704 条。每行保留源索引、题目、参考答案、模型回答、Prime 拒绝标记、一个 LLM 标签与理由、合成标记和两轮对话；没有保留 Qwen 与 Grok 两份判断、分歧案例、被拒的合成变体、提示版本或平衡抽样种子。

TinyV 对 Qwen2.5-1.5B-Instruct 进行两轮全参数微调，学习率 1e-5，使用 AdamW、cosine decay、warmup 0.1、八个设备、每设备 batch 8、gradient accumulation 8、有效 batch 512，论文最大长度为 4,096。模型输出 True 或 False。公开 add-on 奖励代码中，Prime 接受时给终局奖励 1；Prime 拒绝后，将 TinyV 解析出的 0/1 结果乘以默认值为 1.0 的 tinyv_weight，奖励管理器把该分数写在最后一个有效 response token。输出无效或推理重试耗尽时记为 0。

主 GRPO 实验从规定的通过率区间选择 5,000 道困难 Big-Math 题目，以 Qwen2.5-7B 和 Qwen2.5-Math-7B 为基础，batch 128、每题八个 rollout、mini-batch 64、学习率 1e-6、KL 系数 0.001，共训练 12 轮。公开困难提示数据有 7,009 条 train 记录，全部是 Prime-negative 且 LLM-positive，每行有四个 output score；实验实际使用的 5,000 个 ID 和随机种子未公开。

HardVerify-Math 公开 250 条 train 数据，每题带一条假阴性输出和一条真阴性输出。内部字段把它划分为 125 条 benchmark 和 125 条 Big-Math。论文将 benchmark 一半描述为 115 条 Olympiad 与 10 条 MATH，公开统计却是 110 条 Olympiad 与 15 条 Math_500。把论文结论绑定到实际工件时，必须保留这一未解决差异。
