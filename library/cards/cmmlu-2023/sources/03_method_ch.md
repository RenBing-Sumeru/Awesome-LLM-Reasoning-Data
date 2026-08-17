1. 输入：按学科划分的 CSV 文件，包含中文题目、四个选项和唯一正确标签。
2. 流程：加载 subject data，按官方 direct-answer 或 chain-of-thought prompt utilities 预处理，在 zero-shot 或 few-shot 设置下运行模型，解析答案选项，并汇总 accuracy。
3. 输出：按 STEM、人文、社科、其他和中国特定类别分组的 per-subject 与 average accuracy。
4. 反馈：verifier 是答案 key 和精确选项级评分；标准评测不需要人工或 LLM judge。
5. 复现边界：固定 dataset commit、subject list、prompt language、few-shot examples、CoT/direct-answer mode、answer parser、harness version 和模型日期。公开答案 key 有污染风险。
