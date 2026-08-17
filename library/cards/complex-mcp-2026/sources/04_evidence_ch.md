在论文的主要 ReAct 评测中，每个模型都在全部 47 个任务上独立运行 3 次。Table 2 报告的最佳一行是 Gemini-3-Flash：success 为 `55.31 ± 0.00%`，completion 为 `85.79 ± 0.50%`，misbehavior 为 `4.39 ± 0.19%`；human success 为 `93.61 ± 1.74%`。这些数字显示的是模型在该 benchmark 自身状态差分契约下的差距，不能证明发布的参考轨迹适合作为训练数据，也不能证明 evaluator 捕获了全部语义要求。

论文报告 full-context 工具描述约占 29,964 tokens，平均有 11 个 tool round。Table 3 中，retrieval-based variant 低于 full-context prompting；Gemini-3-Flash 的 iterative RAG success 为 `36.88 ± 2.01%`。作者把错误与 retrieval saturation、clean-slate assumption 或遗漏 state check、以及遇到瞬时错误后过早放弃联系起来。这些是受 benchmark 条件约束的 observation，不是某种 retrieval 设计普遍占优的证据。

最强的 artifact 证据来自结构。直接检查固定版本的 `data.parquet` 可见恰好 47 行、7 列，没有 null cell；每个任务有一条已接受的参考 `output` 和一个嵌套目标 `gt_env`。官方 config 枚举 15 个 MCP server 与 315 个工具，runner、client、construction script 和 evaluator 则暴露 episode 执行及评分逻辑。Appendix C 只给出 3 条成功和 2 条失败的模型定性轨迹。

release 边界同样重要。parquet 的 47 行是任务编写阶段接受的成功 ground-truth/reference demonstration，不是论文中完整的 model-by-task-by-trial rollout 集合。仓库树没有提供所有成功与失败的被评测 history，Appendix C 的 5 个例子也不能填补这一缺口。因此，不能从汇总 score 反推出完整 trajectory corpus。

current artifact 还暴露一处版本差异：论文称最难任务需要超过 60 次工具调用，而已检查 parquet 的参考调用计数不超过 59。这可能来自 paper-era 与 current-main 的差异，也可能来自计数定义差异；在没有论文关联 release 的情况下，应保留为 unresolved，而不能直接判定为论文错误。
