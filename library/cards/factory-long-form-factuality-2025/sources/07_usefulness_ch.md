1. **长文事实性评测：** 让模型生成检索增强长回答，按 claim 统计 factual、nonfactual、inconclusive 和不可验证比例。


2. **Factuality Judge 校准：** 使用人工标签、URL 和 snippet 检查自动 Judge 的证据匹配与 abstention，而非只测二分类准确率。


3. **提示集构建：** 复用“主题—扩写—模型筛难—人工修订”流程，建立新领域提示，但需重新采集证据。
