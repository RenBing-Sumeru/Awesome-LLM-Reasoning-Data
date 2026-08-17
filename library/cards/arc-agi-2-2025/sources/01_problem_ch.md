ARC-AGI-2 评测的问题是：AI 系统能否从少量彩色网格示例中归纳一个新的抽象转换规则，并把它应用到未见过的测试网格。主论文是 “ARC-AGI-2: A New Challenge for Frontier AI Reasoning Systems”，arXiv:2505.11831，2025 年公开，2026 年修订；官方 ARC Prize GitHub 仓库发布 public task data。

评测对象是一个 JSON task，包含 `train` demonstration pairs 和 `test` pairs。每个 grid 是由 0-9 整数组成的矩形矩阵，显示为颜色，尺寸范围从 1x1 到 30x30。solver 能看到 demonstration input/output grids 和 test inputs，需要构造 exact output grid，包括尺寸和每个 cell 的值。

判断边界是少样例抽象网格转换与 exact-answer scoring。它不是自然语言 QA，不是多选题推理集，也不能单独证明通用智能。它的有效信号是：solver 是否能在 public/private 泄漏控制下，从极少示例获得任务特定转换规则。
