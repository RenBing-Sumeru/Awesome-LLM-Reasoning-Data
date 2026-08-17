LiveBench 把新鲜度和可复现性写进 benchmark 契约：每个模型分数都对应一个带日期的任务 release 和明确的客观 checker，后续版本再替换过时材料。与静态排行榜或由 LLM 评审的 arena 不同，需要审计的对象是版本化的 prompt—回答—得分记录；因此它属于基础与评测审计，而不是训练数据构造。

Google Scholar 引用数：125（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=LiveBench%3A+A+Challenging%2C+Contamination-Limited+LLM+Benchmark&author=Colin+White&hl=en）

开源数据：有。

- 名称与地址：LiveBench，https://huggingface.co/livebench 和 https://github.com/LiveBench/LiveBench。
- 论文版本规模：1,000 道题，覆盖 18 个任务和 6 个类别；更新版本会随时间变化。
- 形式：任务 prompt、答案数据或任务专用 scorer、release 元数据和评测程序；各类别数据在 Hugging Face 分别发布。
- 许可证：论文说明官方代码仓库使用 Apache-2.0；不同来源数据的条款仍需分别检查。
- 预期用途：考虑污染风险的 LLM 评测、排行榜复现，以及跨 release 的回归分析。
