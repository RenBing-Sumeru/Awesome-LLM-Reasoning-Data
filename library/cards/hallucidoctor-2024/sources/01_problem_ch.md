视觉指令数据含有不存在的物体和关系，模型即使架构不变也会通过微调学到幻觉。

流程先诊断有毒记录和无依据片段，再依据图像改写答案，并公开修正对话用于重新训练。 该方法直接产出 HalluciDoctor corrected visual instructions。本卡的决策边界是可下载训练记录，而不是只有模型的报告或只用于评测的基准；单条记录包含 图像、原始指令回答、幻觉诊断以及修正回答。

L4 事实：已于 2026-07-27 核验 CVPR 2024 官方页面、https://drive.google.com/file/d/1M0dZwF6nPuZMLeAH44VhFj0RCS4KxL5D/view?usp=sharing 的实际公开记录、规模和条款。收录理由是论文中心贡献直接构造或筛选可序列化的后训练目标。
