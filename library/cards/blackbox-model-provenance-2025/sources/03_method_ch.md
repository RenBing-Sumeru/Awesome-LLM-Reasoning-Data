1. 记录经过随机打乱、但顺序可追溯的训练 transcript。
2. 查询设置中，将嫌疑模型对样本的 token likelihood 与训练顺序相关；参考模型消除自然难度差异。
3. 仅观测文本时，按 transcript 分区相关 n-gram 匹配，或比较文本在独立重排后续训模型下的 likelihood。
4. 将统计量换为 p-value 或近似 z-score。须固定顺序、样本数、参考模型、续训比例和温度。
