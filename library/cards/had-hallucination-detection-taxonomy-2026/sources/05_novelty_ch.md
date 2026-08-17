现有检测器通常只做二元判定，或另用模型定位和改写。HAD 的改变是用统一 11 类 taxonomy 将 detection、span identification 和 correction 训练成单一生成任务，并同时提供大规模合成训练集与人工测试集。新意是统一输出合同，而非单一新 backbone。
