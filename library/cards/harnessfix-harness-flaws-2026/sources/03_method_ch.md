1. 输入：四个目标 benchmark 的失败轨迹，包括 task 文本、agent action、observation、环境反馈、终止分数或错误。
2. 表示：把平铺日志转换成 HTIR，拆开 task、state、action、observation、evaluator 与 failure evidence。
3. 诊断：识别候选 harness flaw，例如环境配置、依赖缺失、任务说明歧义、evaluator 不匹配、oracle 或 ground truth 问题。
4. 修复：调用 benchmark-specific repair operator，在可行时重跑或重新评分受影响样本。
5. 输出：缺陷记录、修复后的 harness artifact 或 patch，以及修复前后的验证结果。

反馈契约来自修复后的 benchmark 环境和评分规则；人工或 LLM 诊断只提供中间线索。复现时必须固定 GitHub revision、benchmark 版本、环境镜像、API/tool 凭据、失败采样用的模型 rollout 和 timeout policy。
