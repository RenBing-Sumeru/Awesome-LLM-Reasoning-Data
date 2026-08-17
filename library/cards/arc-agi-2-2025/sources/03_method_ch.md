输入是 ARC-style JSON tasks。每个 task 在 `train` 中有 demonstration pairs，在 `test` 中有 test pairs；每个 pair 都包含 `input` 和 `output` grids。评测时，solver 应只使用 demonstration pairs 和 test inputs。

流程如下：

1. 从固定 split 载入 task；
2. 根据训练 input/output pairs 推断转换规则；
3. 为每个 test input 生成 output grid，包括尺寸和所有 cell 符号；
4. 将提交 grid 与 expected grid 比较；
5. 只有所有 test outputs 在允许尝试次数政策下完全正确，任务才算 solved。

官方 README 说明 public repository 有 1,000 个 training tasks 和 120 个 evaluation tasks。README 还说明每个 public evaluation task 至少由两名人在 controlled testing 中解出，测试样本平均人类表现为 66%。复现时必须固定 GitHub commit、public/private tier、attempt policy，以及开发过程中是否使用过 public evaluation feedback。
