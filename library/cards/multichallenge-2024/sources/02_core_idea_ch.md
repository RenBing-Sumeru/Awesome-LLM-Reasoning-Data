核心贡献是在 instruction-following, reasoning 上提供 multi-skill challenge benchmark surface; exact primary source and size 需要审计.，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：混合 exact, rule, or 裁判 scoring。

数据对象或环境是：混合 reasoning/instruction tasks。最接近的对比对象是 nearby benchmark and 评测-surface datasets that share the same feedback contract。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 混合, 需要裁判判断。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
