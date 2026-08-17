MCTS-RAG 处理的是一个具体的测试时推理问题：静态 Retrieval-Augmented Generation 通常在推理之前或与推理分离地检索，而仅在模型思维上运行的普通 MCTS 无法补入缺失的外部事实。论文追问能否把检索本身变成搜索中的分支级决策，使小语言模型不必沿一条固定 RAG 路径运行，而能在回答、推理、分解、检索和总结之间交替选择。

可审计对象是一条覆盖六种动作的推理时搜索过程：A1 Direct Answer、A2 Quick Reasoning、A3 Decompose Question、A4 Retrieval Reasoning、A5 Retrieval Decompose 和 A6 Summarized Answer。节点可包含直接答案、子问题与子答案、以检索内容为条件的推理或总结；模型导出的 consistency 与 likelihood 值用于引导 UCT 搜索和最终答案选择。论文使用 Qwen2.5-7B 和 Llama 3.1-8B，在 ComplexWebQA、GPQA 与 FoolMeTwice 上评测这一过程。

官方 artifact 的边界比方法描述更窄。仓库提供 generator、retrieval、evaluation、discriminator 代码和少量 benchmark 输入子集，但没有实例化的论文运行搜索树、全分支 archive、结构化 retrieval-state ledger、discriminator 分数包或逐样本预算日志。因此，本 Card 将 MCTS-RAG 视为构造配方与 scaling study，而不是开放的搜索轨迹数据集。
