先前的生物医学 QA 多偏向检索式任务、factoid/list answer 或自由文本专家答案。PubMedQA 改变的是评测对象：问题是研究标题中的判断，给定证据是去掉 conclusion 的论文摘要，目标是与 conclusion 立场对齐的 yes/no/maybe 判断。

新意不在分类器架构，而在数据构造和反馈契约：小规模但可靠的专家标注评测集，更大的未标注池，人工规则扩展流程，以及官方 exact-label evaluator。这样，生物医学 conclusion reasoning 才能作为可复用的 benchmark 坐标。

复用前应检查 subset 身份、split 文件、标签分布、PQA-A 启发式是否带来模式伪影、PubMed 源文本条款是否允许目标分发方式，以及公开样本是否已进入后续模型训练。除非另行审计，PQA-L 标签应作为评测证据，PQA-A/PQA-U 只能作为较弱的数据构造资源。
