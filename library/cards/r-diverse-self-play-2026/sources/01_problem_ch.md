自博弈推理系统会把模型生成的问题与解答转化为下一轮训练数据。在本文研究的 R-Zero 式 Challenger-Solver 循环中，Challenger 因生成接近 Solver 不确定性边界的问题而获得奖励，轮内重复惩罚则用于维持课程多样性。论文指出，局部词面新颖性并不充分：后续轮次可能重复历史模式，措辞不同的问题也可能训练近乎相同的求解过程。论文将这两种失效称为 Local Diversity Illusion 与 Surface Diversity Illusion。（论文 §1、§3。）

这里构造的对象不是静态 benchmark，而是持续演化的数据流：竞赛数学问题、Solver reasoning rollout 与提取答案、答案等价组、consistency、多数投票伪标签、规范化 Python 表示、embedding、记忆判定，以及回放的历史问答对。训练过程中，policy、伪标签来源、新颖性表示与历史池都会变化。论文没有发布这条数据流的 immutable snapshot。

MAP 与 SAM 会改变哪些题目得到奖励、进入记忆并被回放，因此该工作属于数据构造研究。但它不是 ground-truth dataset release：主要正确性信号仍来自 Solver 自身的一致性，官方仓库目前也只是项目说明与图片，并未提供可执行代码或生成记录。
