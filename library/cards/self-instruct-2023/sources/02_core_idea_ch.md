Self-Instruct 让模型同时担任数据作者和训练消费者：已接受的人写与机器任务会成为生成下一批指令的 in-context 示例，而启发式有效性与相似度过滤决定哪些序列化的“指令—输入—输出”记录进入 SFT。相对只用人写数据的 instruction tuning，改变的决策是自举任务分布本身，而不只是让 teacher 回答固定 prompt 集。

Google Scholar 引用数：3864（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Self-Instruct%3A+Aligning+Language+Models+with+Self-Generated+Instructions&author=Yizhong+Wang&hl=en）

开源数据：有。

- 名称与地址：Self-Instruct data，https://github.com/yizhongw/self-instruct/tree/main/data。
- 规模：175 条种子任务、52,445 条生成指令和 82,439 条指令实例。
- 形式与格式：指令记录和实例记录包含 instruction、可选 input 与 output 字段，以 JSON/JSONL 资源连同生成和评测文件发布。
- 构造方式：迭代式 GPT-3 指令生成、ROUGE-L 相似度过滤、任务类型判断、实例生成和启发式无效输出过滤。
- 许可证与用途：预期用于 instruction-tuning 研究；已核验 README 没有清楚说明每条生成记录的数据集级再分发条款，复用前应检查仓库许可证与来源条件。
