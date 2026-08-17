最接近的基线是普通数据集级谱系：一个发布只引用直接前序，重复提示和更早来源被聚合过程遮蔽。ATLAS 将审计单元改为带时间顺序出现列表和原子来源标签的规范化提示。在 1.45M 实例规模上组合精确复用、语义恢复与迭代来源扩展，使谱系成为构造输入，而不仅是文献描述。

SCA 增加了来源条件化效用视角。base checkpoint 与来源训练 checkpoint 定义正确性转移，再将其赋给该来源记录。这比按来源规模或单一最终 benchmark 分数排序更具操作性，但仍受模型规模、checkpoint、verifier 和训练配方约束，也不能识别单条记录的因果贡献。

Q 与 DAPO++ 把审计连接到行动。Q 区分静态属性和动态 RLVR 效用，DAPO++ 则用泄漏与可学习性决策修复一个已有 17K 提示集。对 `data_construction_open_release_recipes` 而言，谱系、选择规则、替换、奖励与评测之间的连接是最有价值的方向信号。

SHA-1 匹配、Sentence-BERT 检索、人工审查、GRPO、VERL、Math-Verify、DAPO-Math-17k、Stack Exchange 题目、Mean@N 和 Pass@N 均不是新贡献。由于最终谱系、SCA、删除和替换账本缺失，该发布也没有建立新的 provenance 完整性标准。其新意是整合式 RLVR 工作流与来源条件化视角，而不是新的数学 verifier，也不是用 benchmark 增益认证数据质量。
