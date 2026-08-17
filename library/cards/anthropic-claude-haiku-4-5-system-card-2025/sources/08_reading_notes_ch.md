- 先读第 1.1.1 节，把五类来源逐项写入台账。2025 年 2 月 cutoff 只绑定公开互联网信息，不推断其余四类的日期或比例。

- 分析 RLHF/RLAIF 时，把第 1.1.1 与 1.1.4 节配对阅读。区分 worker preference selection、safety evaluation 和 adversarial testing，并把 reward model、AI-feedback、aggregation、adjudication 标为 unknown。

- 把第 1.1.3 节视为具体 agentic-RL 干预：提供精确 context-usage 信息。200K release context 必须与训练 rollout length、产品 benchmark thinking budget 分开。

- 把第 4.3 与 4.5 节当作两种 trace object：递归总结的 later-stage RL behavior，以及 earlier supervised learning 中的前代模型 reasoning text。二者均未开放；推理时 long-thought summarization 是第三种独立展示层。

- 阅读表 5.B 时保留 training-distribution 警告。Hidden fuzzed test 只是局部 held out，不是全局 split 证据。Prompt-injection 与安全分数要绑定 model-level instruction、tool、classifier、mitigation、mode 和 snapshot policy。
