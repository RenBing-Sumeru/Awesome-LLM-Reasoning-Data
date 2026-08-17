1. **训练或数据构造。**MixReward可训练通用judge，UniRRM-RL可研究RLrewardreasoning；复用时应固定基础模型与数据预算，并使用论文主要留出指标检查是否真正有效。
2. **评测或审计。**应按语言和范式分别校准。当任务不满足原论文的 verifier、rubric、模态或标注假设时，不能未经修改直接使用。
