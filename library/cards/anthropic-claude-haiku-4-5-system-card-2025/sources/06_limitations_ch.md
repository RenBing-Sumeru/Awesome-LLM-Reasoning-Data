来源 mixture 与授权无法审计。五类来源没有比例、样本/token 数、命名数据集、版本、语言/领域分布、synthetic share、opt-in volume、contractor allocation 或过滤 yield。遵循 robots.txt、避开访问控制只是 crawler-policy 事实，不是 item-level copyright、license、consent 或司法辖区授权账本。

RLHF/RLAIF 的 reward contract 缺失。报告没有识别 AI-feedback model、reward model、constitution、preference schema、aggregation、objective weight、normalization、calibration、rejection rule、RL algorithm 或 human-vs-AI mixture。仅有“preference selection”不能证明 pairwise layout、adjudication 或 rater reliability。

Deduplication 被命名但不可审计。没有 dedup key、algorithm、threshold、revision pin、benchmark exclusion list、near-duplicate analysis、false-negative audit 或保留/拒绝账本。Reward-hack-prone coding task 明确来自 training distribution，使这一缺口尤其重要。

报告没有全局 train/development/evaluation split。Held-out fuzzed test 只在一个 reward-hacking suite 内部 held out，不能推广到 policy prompt、prompt injection、SHADE-Arena、危险能力评测或 base/post-training 语料。

训练与评测界面部分纠缠。安全评测在训练期间持续运行并可能触发干预，但这不能证明其 rubric、classifier、VM/MCP task、SHADE monitor 或 hidden test 是优化 reward。Prompt-injection 结果混合了 checkpoint behavior、model-level instruction、FileRead 改动和实时 classifier，mitigation score 不能单独归因于模型训练。

Extended-thinking 边界不完整。报告承认当前 faithfulness metric 对这类模型不可靠；没有观察到明确失败不等于推理忠实。极少数很长的 user-visible thought 会在推理时由第二个 Haiku 4.5 实例总结，因此展示 trace 可能不同于完整生成 trace；该第二实例不是训练 teacher 证据。产品 benchmark 的 thinking budget 是推理设置，不是训练预算。

最后，前代模型 reasoning trace 与 recursive audit 工件都未发布。Teacher checkpoint、trace generation、编辑和选择未知；原始 RL transcript、summary、Claude Sonnet 4 judge prompt、分数、数量与 checkpoint ID 均不可得。粗粒度 stage lineage 无法连接单个 source item、preference、reward、update 与发布 checkpoint。
