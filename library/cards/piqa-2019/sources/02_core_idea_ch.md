核心贡献是在 physical-commonsense, multiple-choice, text-only-reasoning 上提供 17,951 two-choice questions reported for PIQA; paper reports 95% human accuracy and 77% for strong pretrained models at release time.，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：answer-level accuracy against the gold choice。

数据对象或环境是：static two-choice natural-language physical commonsense benchmark。最接近的对比对象是 nearby benchmark and 评测-surface datasets that share the same feedback contract。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 程序化。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
