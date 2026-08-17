1. **构造文档—主张任务。** 作者从 FineWeb 采样不同领域的文档，分别生成受文档支持的 grounded claim，以及故意缺少证据的 hallucinated claim。
2. **重构并过滤数据。** 多阶段筛选删除过于简单、前后矛盾或格式不合格的样本，并统一分类任务格式。
3. **生成竞争回应。** Qwen3-235B-A22B 生成详细且较可靠的 chosen 推理，Qwen3-0.6B 生成较弱、缺少证据或结论错误的 rejected 推理。
4. **验证偏好质量。** 若 chosen 分类与 ground truth 不一致，则删除样本；GPT-OSS-120B 和 DeepSeek-V3.1 还必须同时偏好 chosen 回应。
5. **训练 HalluGuard。** 最终使用 ORPO 优化 Qwen3-4B，使其输出推理过程、groundedness 标签和证据解释。
