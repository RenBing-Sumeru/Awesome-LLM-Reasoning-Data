核心贡献是在 math, grade-school-math 上提供 grade-school math benchmark surface; exact source and size 需要审计.，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：exact or normalized numeric answer match。

数据对象或环境是：grade-school math QA。最接近的对比对象是 nearby benchmark and 评测-surface datasets that share the same feedback contract。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 程序化。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
