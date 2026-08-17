1. 输入是小学科学考试题、选项、标准答案，以及浅层 solver 使用的可选支撑语料。 
2. 构造时 AI2 收集并清洗题目，运行检索式 solver 和词相关 solver，把两者都答错的题分到 ARC-Challenge，并发布 Easy/Challenge 的 train、dev、test split。 
3. 评测时系统接收题干和选项，预测一个选项，由 exact option accuracy 评分。 
4. 输出是每个 split 和子集的准确率；官方契约不要求过程 trace、proof 或检索证据。 
5. 复现必须固定 ARC release、split 文件、答案标签归一化、模型包装或 prompt、使用的检索语料，以及评测 ARC-Easy、ARC-Challenge 还是二者合并。
