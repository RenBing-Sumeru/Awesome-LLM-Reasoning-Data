1. 定位：通过模型的偏好判别能力间接评测对齐。
2. 方法抓手：交换顺序后的 oracle 筛选不可省略；保留回答对上的 Cohen’s kappa 测的是 judge 能力，不是生成能力。
3. 数据与工具：AlignEval 发布 2,671 条指令—两回答—标签实例，以及提示词、代码和两种 oracle 标签版本。
4. 证据锚点：筛选使 Arena-Hard 的 GE 相关从 0.793 升至 0.971；AlignEval-CLAUDE 与风格控制 ChatBot Arena 的相关为 0.885。
5. 复用决定：适合低成本重复排序，但要用直接生成测试检查 oracle 偏好与只会 judge 的过拟合。
