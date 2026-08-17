1. 汇集深度研究、科学综述、创意写作、长链分析和系统综述中的六个数据集；保留原协议，同时把每个实例统一为 instruction、content、response。

2. instruction 包含源问题、协议以及可选 rubric、权重、参考材料、约束或格式；评审器返回理由及可提取的分数、偏好或排序。

3. 在 Vanilla、Rubric、Reference、Reference+Rubric 四种设置下，以温度 0 测试八个基础模型评审器。

4. 用 accuracy、Spearman、Kendall 与专家参考判断比较；成对样本交换两种顺序以降低位置偏差。
