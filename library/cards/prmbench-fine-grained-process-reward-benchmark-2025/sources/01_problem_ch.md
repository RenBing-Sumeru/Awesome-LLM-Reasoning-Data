单一步骤准确率会掩盖 PRM 的具体失效：模型可能接受冗长绕行、逻辑不成立的步骤，或对数字和条件的小改动毫无反应；即使平均分较高，进入搜索后仍会稳定选择带隐蔽错误的路径，且难说明弱点究竟来自哪一维。

PRMBench 围绕正确推理构造 simplicity、soundness 和 sensitivity 三类受控变体，以细粒度标签诊断 PRM 与 LLM critic。
