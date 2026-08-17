LogicORM 的明确 novelty 是把 answer-conditioned Echo prompt 用作 outcome reward modeling 的困难负推理轨迹来源。普通多样本 CoT 捕获 reasoner 自发产生的错误；Echo generation 则先选定一个目标结论，再要求模型为其构造 rationale，从而更容易得到围绕错误答案组织、表面流畅但实际无效的路径。之后，第二层 model-mediated filter 去除 judge 容易识别的错误，保留其未能发现的部分。

这种构造不同于随机负采样，也不同于只增加普通 rollout 数量。它先用三种任务标签分别条件化 generation，以改变负样本分布，再使用相同的 binary full-trace ORM interface 在增强数据上训练。公开 FOLIO 文件对使这种变化在序列化语料中格外清楚：在不改变 7,383 条正样本的情况下，加入 9,096 条全部为负的 Echo 记录，把 10,009 条 CoT 文件扩展为 19,105 条合并文件。

多个组件是继承的，而非新提出。FOLIO、ProverQA 与 JustLogic 提供逻辑任务和金标准标签；最终答案精确匹配是标准 outcome supervision；Qwen2.5-7B-Instruct、GPT-4o、LoRA、多样本 generation 与 Best-of-N selection 都是既有组件。论文没有引入 step label、process reward model、新 environment 或 proof checker。其贡献在于 data construction 与 selector 的连接：用定向负样本训练标量 ORM，再由该 ORM 控制测试时候选选择。

对 Atlas 而言，另一项重要价值是审计启示。这里的“hard negative”指没有被某个 GPT-4o judgment prompt 识别的错误轨迹，而不是经过形式化验证的细微错误。因此，该构造可能集中 judge blind spot 与 generator 的 answer-conditioning artifact。忠实的可复用记录应同时保留接受和丢弃的 Echo 候选、预设标签、judge prompt 与 response、keep/drop decision 以及后续 ORM score；公开 release 没有原生保留这些字段。
