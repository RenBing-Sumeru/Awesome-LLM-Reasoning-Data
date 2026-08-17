核心贡献是一个平均数据长度超过 100K token 的 benchmark，并把可控 synthetic 任务与真实长文档任务混合起来。它的机制不是只找一个短 span，而是让任务依赖长距离上下文理解、聚合或执行模拟。

数据对象是长 context、task input 和 answer 字段；部分任务是多选或精确答案，QA 与摘要任务使用文本重叠类指标。反馈契约是混合的：官方 README 记录 retrieval、math、code、dialogue、多选任务用 accuracy，英文/中文 QA 用 ROUGE F1，英文摘要用 rougeLsum。

最接近的对比是 LongBench 与 needle-in-a-haystack 类测试。InfiniteBench 的变化在于把长度和任务组合推到更高压力区间；方向标签是带 metric 审计要求的 long-context evaluation surface。
