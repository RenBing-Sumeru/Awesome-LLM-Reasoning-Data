作者明确给出三项主要限制：配方依赖强 solution teacher；只研究 English mathematics；GSM8K/MATH seeds 或 problem/solution generator 的偏差可能传播。作者提出的额外 bias filter 只是未来工作，不属于报告管线。

反馈契约还带来以下具体风险。

- 最终 `First` 策略不做独立 solution verification，错误或误导性的 Qwen2.5-Math-7B-Instruct trace 可直接进入 SFT。
- Same-teacher self-consistency 可能在共同错误上达成一致；被测 solvability judge 又会拒绝 MATH500 的 30.2% 以及 level-5 的 49.3%。Learned quality filter 因而可能删除困难但有效的数据。
- Exact-match deduplication 与 95%-of-8-grams 规则会漏掉 semantic paraphrase；所述 test-overlap rule 只覆盖 GSM8K/MATH，而非全部五类评测。
- 按 GSM8K/MATH 最高平均分选择 checkpoint，使这两个报告指标部分成为 model-selection surface，而不是 untouched final test。
- Agent 与 mixture 比较共享 scaffold，但仍是单篇论文实验，没有公开 seeds、uncertainty interval 或独立复现；mixture selection 与 evaluation 使用重叠 benchmark objective。
- 官方没有提供 FLAMES Small/Large/XL records、construction code、rejected candidates、seed-to-output IDs、逐条 agent/intermediate fields 或 model-ready manifests。
- ACL 的 CC BY 4.0 只覆盖论文，不能证明未发布 synthetic records、teacher outputs、继承 taxonomy、GSM8K/MATH derivative 或 implementation code 的许可证与权利链。

以下属于 curator inference。如果只保留被接纳 problem–solution pair，generator failure rate 与 filter false positive/false negative 将不可见。未固定的 model/dataset revision 可能改变生成分布与 benchmark matching。Distraction Insertion 可能教会模型识别特定 distractor style，而不是一般 robustness；taxonomy mixture 也可能扩大 topic label 覆盖，却不保证概念独立或难度平衡。这些风险必须依赖逐记录 artifacts 才能检验。
