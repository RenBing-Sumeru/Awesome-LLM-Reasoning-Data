这个 benchmark 不是纯 deterministic verifier。data-analysis 评分可能依赖需要 OpenAI key 的 judge 步骤；modeling 分数依赖每个 competition 的 metric 和 processed data snapshot。judge model、Kaggle 数据或源文件漂移都会改变结果。

仓库 disclaimer 将数据限定为教育和研究用途，要求非商业使用，除非获得明确书面许可，并声明不拥有原始数据。复用时必须记录来源权利和合规边界。论文分数也不应被解读为覆盖所有 data-science expertise，只覆盖这些任务和文件格式。
