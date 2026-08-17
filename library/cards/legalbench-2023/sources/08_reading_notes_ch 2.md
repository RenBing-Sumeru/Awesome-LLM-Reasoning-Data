阅读 LegalBench: A Collaboratively Built Benchmark for Measuring Legal Reasoning in Large Language Models 时，要把 基准记录 和排行榜结果分开看。先确认任务记录 模式，再检查评分契约：官方评测器、答案键、裁判、隐藏测试、指标或环境谓词决定成功与否。

有用的 工件 线索：论文： https://arxiv.org/abs/2308.11462; 项目： https://hazyresearch.stanford.edu/legalbench/; 代码： https://github.com/HazyResearch/legalbench; 数据： https://huggingface.co/datasets/nguha/legalbench; Hugging Face： https://huggingface.co/datasets/nguha/legalbench。

如果要把这项工作复用为反馈契约，需要固定具体版本、划分、评测器代码、依赖环境、提示词/脚手架策略、访问条件，以及实时或持续维护排行榜的日期。
