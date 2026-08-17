偏好学习结果不仅取决于优化器,也取决于交给优化器的数据对象。一个 chosen/rejected pair 可以在绝对质量、分数间隔、prompt 难度、采样预算以及是否共享前缀等方面不同。若多个因素同时变化,就无法把下游增益清晰归因于某一项数据设计选择。

本文构建了一个受控的 instruction-following 基底,可依据 23 项程序化约束检查回答质量;随后比较两种自动配对流程:rejection sampling(RS)从独立生成的完整回答中选对,Monte Carlo Tree Search(MCTS)则从共享部分回答前缀的 sibling branches 中选对。核心问题并非 MCTS 是否普遍更优,而是在训练数据规模匹配时,共享前缀、pair contrast、回答绝对质量、prompt 难度和采样规模分别贡献什么。

对 Data Construction and Open-Release Recipes track 而言,审计问题同样关键:概念上存在哪些 prompts、verifier decisions、candidate responses、tree states、rewards 和 selection records,哪些超参数得到报告,以及哪些可复用制品真正开放。
