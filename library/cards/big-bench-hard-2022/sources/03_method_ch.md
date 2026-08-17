1. 输入：选出的 BIG-bench 任务样本、target answer、few-shot 示例、prompting 策略和语言模型。
2. 流程：用直接 prompt 或 chain-of-thought prompt 格式化任务，收集模型答案，必要时抽取/归一化最终答案，再与 target 比对。
3. 输出：任务 JSON 样本、prompt 文件、模型输出、每任务准确率和 BBH 聚合结果。
4. 验收者：任务答案键和官方评测脚本判定成功；rationale 文本没有被独立 verifier 验证。
5. 复现边界：必须固定仓库 commit、prompt variant、答案抽取规则、模型/API 版本、解码设置、任务子集和污染状态。
