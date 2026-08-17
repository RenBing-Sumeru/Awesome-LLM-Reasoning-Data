验证器堆栈只检查答案级信号，而且可能出错。社区回复可能不完整或错误，抽取器可能选错帖子，重写器也可能在提示明确禁止增加信息时添加、遗漏或扭曲步骤。跨模型一致性会保留共享错误，并且比较的是最终答案而非证明。论文自己展示了一个不完整的三次方程解答和一个计数错误的重写，因此正确的 benchmark 分数不能认证训练 rationale（论文 Figures 16-17）。

覆盖范围有结构性限制。LiveAoPSBench 删除证明题和没有明确 boxed answer 的样本，来源处理又只支持文本。这排除了奥赛推理中的重要部分，也低估了依赖图示的几何题。人工审计只覆盖 386 道 benchmark 题目，既不是完整 benchmark，也不是 647,255 条训练记录；其中 5% 错误、3% no-answer 的标注也说明仍有筛选/judge 误差。

在本次检查的版本上，复现仍不完整。作者仓库没有 tagged release，commit `56f6bc1e670170e301f1c9ebc172124defd21e90` 也缺少 README 调用的两个 shell 脚本。Figure 2 把 QA 抽取标为 Qwen 32B，而正文和当前 `parse_aops.py` 指向 Llama-3.1-70B；论文中的 Qwen2.5-14B topic classifier 也不同于当前 `classify_aops.py` 默认的 Llama-3.1-8B。论文运行的解码、重试、随机种子、optimizer 和完整环境均未知。公开 AoPS-Instruct artifact 被明确标为第三方；行数相等不能证明爬取日期、源帖编辑、模型版本、过滤器或逐条记录相同。

公开 provenance 不足以支持来源级审计。抽取提示会记录答案用户和帖子编号，但默认模型就绪发布省略了规范 topic/post URL 与 ID；benchmark 只暴露索引，第三方默认训练集也只有 chat message。Curator inference：即使这些标识是出于隐私而省略，这仍会削弱独立来源核验、贡献者署名、定向纠错和 takedown 处理。受保护的 provenance map 可以兼顾这些需求，但本次没有核实到此类机制。

内容权利证据仍未解决。AoPS 条款说明 AoPS 不主张用户提交内容的所有权，用户则向 AoPS 授予广泛、可再许可的许可。已检查的论文、仓库和数据卡没有记录 AoPS 或贡献者向数据集发布者提供的对应授权。Curator inference：代码或上传页面上的 Apache-2.0/MIT 标签本身不能证明对底层用户解答或转载题目的权利。这是审计缺口，并不等于认定发布违法。

时间划分只能降低、不能消除污染。旧题的转载或改写可能在 cutoff 后出现，8/10-gram 过滤也会漏掉语义重叠。2023 回顾性 split 落在 AoPS-Instruct 来源时期内，对 AoPS 训练模型并不自动构成留出集。LiveAoPSBench-0824 与当前 5,328 行的完整 2024 发布是不同快照；不固定版本的 `LiveAoPSBench-2024` 分数无法复现，公开快照也可能进入未来训练。
