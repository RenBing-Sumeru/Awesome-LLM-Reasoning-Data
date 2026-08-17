该方法让工具代理生成、执行、修复并验证构造程序，从零合成近百万条完整历史。 相比只含几何结果的 CAD 语料和小规模可执行代码数据集，本文把唯一编号、构造代码、拓扑统计、操作序列、耗时、八个渲染图以及两种几何文件作为可复用目标，并以隔离执行、拓扑检查、几何验证和导出验证作为反馈契约，因此应归入 Track 01。

Google Scholar 引用数：1（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Zero-to-CAD%3A+Agentic+Synthesis+of+Interpretable+CAD+Programs+at+Million-Scale+Without+Real+Data&author=Mohammadmehdi+Ataei&hl=en）

开放数据集：是
数据集名称：Zero-to-CAD 1M
官方地址：https://huggingface.co/datasets/ADSKAILab/Zero-To-CAD-1m
规模：999633 条可执行 CAD 构造序列
记录形式：唯一编号、构造代码、拓扑统计、操作序列、耗时、八个渲染图以及两种几何文件
文件与存储格式：官方数据页所列结构化记录及其引用资产
领域与语言：程序化机械 CAD 生成
构造与筛选：工具代理生成构造代码、读取错误、查询文档并修复候选；隔离执行、拓扑检查、几何验证和导出验证
许可与访问限制：`Apache-2.0`；仍需遵守上游来源条款
预期用途：CAD 程序生成监督微调与代理训练
