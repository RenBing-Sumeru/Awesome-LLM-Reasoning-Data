1. **一句话定位：** FACTORY 用模型筛难和人工验证构造长尾长文提示，并公开 claim 级证据标注。


2. **方法抓手：** Wikipedia 种子、LLM 扩写、难度过滤、人工修订和人工检索证据构成流程。


3. **数据抓手：** JSONL 的 all/hard/fact_checking splits；claim 标签含 Factual、NonFactual、Inconclusive 和 No Verifiable Fact。


4. **证据锚点：** SOTA 检索模型在 FACTORY 的约 40% claims 无可靠支持，其他数据约 10%。


5. **复用决定：** 适合长文 factuality 与 Judge 校准；必须保存证据快照并控制测试污染。
