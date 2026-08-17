1. 完整构造从 810.5K 个文件开始，得到 454.9K 个可执行函数与约 3.52M 条 I/O 预测轨迹。
2. 所有 CoT 都由 DeepSeek-V2.5 编写；程序执行只检查 JSON 预测，不逐步验证文字理由。
3. CODE I/O++ 不做简单拒绝采样，而是保存错误首答、执行反馈与一次修订。
4. 最清晰的结果是 Qwen2.5-Coder-7B 平均分从 baseline 54.8 提升到 CODE I/O 的 57.2 和 CODE I/O++ 的 57.7。
5. 采用 ODC-BY 的公开 artifact 只是 PythonEdu-Reasoning JSONL 子集，完整的 CodeMix 主导训练混合并未发布。
