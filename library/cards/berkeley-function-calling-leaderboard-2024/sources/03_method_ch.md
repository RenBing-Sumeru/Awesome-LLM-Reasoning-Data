1. 输入：prompt、一个或多个函数定义、类别元数据、可选历史轮次，以及模型生成的 tool-call 格式响应。
2. 流程：归一化响应，解析预测函数名和参数，按类别做结构匹配或执行/检查调用，再汇总到官方 leaderboard。
3. 输出：解析后的工具调用、通过/失败或类别分、各类别准确率和 overall 分数。
4. 验收者：官方 BFCL evaluator 通过 AST 匹配、execution check、relevance check 或场景特定 predicate 判定成功。
5. 复现边界：必须固定 BFCL 版本、数据 release、evaluator commit、模型 adapter、供应商 API 日期、function-call 格式、多轮状态、hidden/public split 政策和 leaderboard 快照日期。
