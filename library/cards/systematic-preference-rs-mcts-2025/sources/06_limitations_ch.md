verifier 覆盖可由代码检查的结构、词汇、大小写、格式和顺序约束,不能证明事实准确性、安全性、有用性、连贯性或人类偏好。MCTS 在搜索中用 policy self-evaluation 部分补充内容条件,但该信号来自同一个 8B policy,self-consistency 次数 L 未披露,也没有报告校准或独立误差分析;最终 pair eligibility 刻意不使用它。

Prompt pipeline 只能部分复现。论文没有列出全部 seed datasets 或来源数量,没有发布 few-shot prompts,没有标识 generator revisions,也没有报告 all-mpnet-base-v2 revision、相似度阈值、duplicate rejects 或条目级来源谱系。训练与评测采用不同 constraint ontology——生成的训练 constraints 与 IFEval constraints——但评测 prompts 使用同一管线生成,且未提供更广泛的污染审计或不可变 split manifest。

采样契约并不完整。RS 报告 N=64 和 temperature 1.0,但"non-overlapping"含义不清,阶段产量也没有作为可复用记录完整列出。MCTS 报告 depth 5、K=4、M=4、c_puct=1.0 和 lambda=0.2,却遗漏 tree iterations、self-evaluation L、action token limit、terminal rules、总 tokens、latency、硬件与 failed-tree handling。因此无法进行端到端搜索成本和数据产量比较。

比较实验固定 training dataset size 和 unique prompts 数量,却未披露其数值。DPO beta、batch size、完整 optimizer 细节、硬件、seeds 和 checkpoint selection 同样缺失。实验只使用 Llama-3.1-8B-Instruct 和代码可验证 instruction-following,因此对更大模型与开放式偏好的迁移有限。

论文开放访问不等于开放数据发布。ACL 官方页提供 CC BY 4.0 论文、DOI 和 BibTeX,但未确认官方代码仓库、generated-prompt dataset、preference pairs、verifier implementation、search trees 或 logs、rejected candidates、checkpoints 或发布许可证。报告的 48K 是实验 prompt 数量的约数,表格精确总数为 47,198,并非已发布 dataset size。
