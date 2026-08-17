1. **模块化评测：** 分别测 code、spec 和 proof，避免用低 proof success 笼统否定代码能力或反之。

2. **形式训练数据：** 用 reference artifact 做 SFT，并把编译错误—修复过程转为 verifier-guided trajectories；测试集应隔离。

3. **组合误差研究：** 将模型生成规格提供给代码模型或证明器，比较 reference 与 generated context，量化上游错误传播。
