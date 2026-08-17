核心贡献是在 instruction-reasoning-safety, 裁判-奖励-meta-评测 上提供 本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：five domains score whether a 奖励 model ranks the chosen completion above three rejected completions; Ties combines correct-over-incorrect accuracy with a 奖励-margin calibration condition。

数据对象或环境是：multi-skill 奖励-model accuracy tied to downstream utility。最接近的对比对象是 奖励-model, rubric-裁判, and preference-评测 benchmarks。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 需要裁判判断。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
