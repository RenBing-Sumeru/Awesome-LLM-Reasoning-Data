1. 输入：官方 prompt 文件、每条 prompt 的 instruction id 与参数，以及包含 `prompt`、`response` 字段的模型输出文件。
2. 流程：评测器按 instruction id 找到对应 checker，对 response 执行检查，记录逐 instruction 的 pass/fail，再汇总 prompt 级是否通过。
3. 输出：strict 与 loose 两种评测 JSON，以及 prompt-level、instruction-level accuracy。
4. 反馈契约：Python 规则 checker 决定成功或失败；没有学习型 reward model、人工偏好 judge 或交互环境。
5. 复现边界：必须固定 google-research commit、input_data、instruction registry、strict/loose 模式、response 格式和依赖版本。公开 prompt 可能进入后续训练语料，比较新模型时要记录评测日期。
