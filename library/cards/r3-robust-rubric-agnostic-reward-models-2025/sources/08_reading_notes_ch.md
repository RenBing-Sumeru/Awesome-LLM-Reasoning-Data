1. **一句话定位：**现有RM往往针对固定标准、输出不透明标量，难以迁移到新的评价维度。
2. **方法抓手：**关键动作依次是为样本补全 rubric、生成带理由的评分、筛选 20K 训练记录，最后完成训练并评测 rubric-agnostic RM。
3. **数据抓手：**R3构建20Krubric—reasoning—score数据，训练rubric-agnosticrewardmodel，根据query和回应自行识别评价角度并给出可解释分数。
4. **证据锚点：**论文在多个rewardbenchmark与未见rubric场景比较，并通过数据、rubric输入和reasoning消融证明泛化与稳健性。
5. **复用决定：**自行推导rubric可能与用户真实标准不一致；
