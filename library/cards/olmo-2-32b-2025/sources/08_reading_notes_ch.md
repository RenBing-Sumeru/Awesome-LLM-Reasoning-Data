- 保持 `arxiv: null`：已链接 OLMo 2 家族报告是已核验的背景，不是 32B 专属引用分配。
- 将已发布 SFT 查看器（866K train 记录）和 RLVR 查看器（29.9K train 记录）与未固定的逐条来源谱系和生产运行分配分开。
- 保留具体过滤规则：删除提及合成日期截止点的内容；指定数学数据需要五次 completion 中的多数一致。
- 仅按披露将 GRPO RLVR 记录为用于 GSM8K、IFEval 和 MATH；parser、reward、校准、rollout 数和 harness 尚未建立。
- 不要把 Apache 2.0 模型/代码条款延伸至每个数据子集：preference 数据包含子集特定且部分非商业条款。

