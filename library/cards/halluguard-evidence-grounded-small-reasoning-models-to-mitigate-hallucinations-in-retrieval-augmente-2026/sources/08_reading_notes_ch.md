1. **一句话定位：**HalluGuard 将 RAG 幻觉检测从仅输出标签，改为同时生成文档证据推理与分类结论。
2. **方法抓手：**FineWeb claim 合成、强弱模型生成、标签验证、双 judge 一致筛选和 ORPO 是决定数据质量的核心步骤。
3. **数据抓手：**`HalluGuard-Preferences-76k` 包含 76,708 个英文 JSON 偏好元组，记录 prompt、chosen 推理和 rejected 推理，采用 Apache-2.0 许可。
4. **证据锚点：**4B 模型在 RAGTruth 上达到 84.4% BAcc，在完整 LLM-AggreFact 上达到 77.1%，超过多个 7B／8B 或闭源 baseline。
5. **复用决定：**适合 RAG grounding 验证；复用前必须审计解释忠实性，并明确“受文档支持”不等于“现实世界真实”。
