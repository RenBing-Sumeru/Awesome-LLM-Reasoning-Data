核心贡献是在 healthcare, medical-advice, safety-评测 上提供 HealthBench, HealthBench Hard, and Consensus are treated as related OpenAI health-评测 surfaces; exact public task counts and release artifacts need pinning before reuse.，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：expert or rubric-guided 裁判 scoring; exact public 裁判 contract needs 审计。

数据对象或环境是：healthcare advice and medical-safety 评测 surface。最接近的对比对象是 nearby benchmark and 评测-surface datasets that share the same feedback contract。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 需要裁判判断、混合。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
