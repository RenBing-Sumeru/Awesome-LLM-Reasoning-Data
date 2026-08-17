对 `rollout_search_test_time_trace_data` 而言，Weaver 的价值在于把重复采样的 selector 侧显式化。可复用对象不只是获胜答案，而是完整候选集合，以及解释某条 trace 为何被保留的信号和拟合状态。这有助于在测试时计算研究中区分：更多 generation、更多 verifier 调用、更强 verifier model、不同 aggregation 和 distillation 分别贡献了什么。

可审计 raw record 应保留 benchmark 与 split revision、prompt ID 与文本、generator checkpoint、prompt template、解码设置与 seed、candidate ID、完整回答、提取答案、在许可允许时的 correctness label，以及 truncation 状态。Verification record 还应加入每个 verifier checkpoint/revision、judge prompt/parser、raw score、normalized score、threshold、binary vote、filtering decision、TPR/TNR estimate、class prior、Weaver posterior 与计算成本。Decision record 应保留完整候选排名、selected ID、平局规则、reject-all policy 与评估结果。Distillation record 还应把每个 query-response 绑定到 Weaver target、data split、ModernBERT checkpoint、optimizer state 和来源 ensemble revision。

公开代码与 Hugging Face collection 支持 selector 消融、verifier subset 研究、新先验下的重估，以及检查紧凑 verifier 是否保持选择行为。更换 generator、候选池、verifier suite 或领域后，应锁定 revision 并重新计算阈值和 weak-supervision 参数。若错误伪标签不可接受，应增加独立 correctness gate，而不能把高 Weaver posterior 当作证明。

该工作也适合作为审计案例：它说明 Pass@K、selected-answer success、posterior calibration 与 released-data quality 是不同主张。Benchmark 增益可以支持 aggregation 配方，但不能认证候选 traces 或 distilled pseudo-label corpus。
