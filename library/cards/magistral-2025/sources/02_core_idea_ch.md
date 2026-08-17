Magistral 区分了两条训练血缘。Magistral Medium 从 Mistral Medium 3 Instruct 出发，直接进行在线 RL，没有推理轨迹冷启动。Magistral Small 先学习 Medium 在训练后期产生的正确 RL 轨迹，以及 Medium 在多样化提示上的新增回答，再继续在线 RL。这个设计可用于比较纯在线探索与教师轨迹冷启动。

两条血缘都把数据对象与反馈契约绑定。回答首先必须满足严格的推理区块和答案格式；数学由规则归一化、parser 与 SymPy 判定，代码则编译并运行抽取测试。软长度惩罚与 fastText 语言一致性信号用于塑形，但不替代终局正确性检查。
