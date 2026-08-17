核心贡献是在 document-vqa, ocr, layout-understanding 上提供 paper reports 50,000 questions over 12,000+ document images; challenge paper reports 50,000 question-answer pairs over 12,767 images for task 1.，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：answer-level comparison, commonly ANLS-style string similarity against ground-truth answers。

数据对象或环境是：static visual question answering over document images。最接近的对比对象是 document, chart, multimodal QA, and visual 评测 benchmarks。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 程序化。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
