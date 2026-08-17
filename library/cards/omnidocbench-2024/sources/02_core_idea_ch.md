核心贡献是在 document-ai, multimodal-reasoning-benchmark 上提供 本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：the official evaluator, answer key, 裁判, hidden test, metric, or 环境谓词 determines success。

数据对象或环境是：PDF parsing, layout, OCR, table, and formula recognition。最接近的对比对象是 document, chart, multimodal QA, and visual 评测 benchmarks。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 混合。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
