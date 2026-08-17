在最多 50 个动作、temperature 0.0 的条件下，论文中最强 planner-executor 是 GPT-5 + UI-Ins-7B：overall SR 51.7%，其中 116 个 GUI-only task 为 54.0%，45 个 user-interaction task 为 62.2%，40 个 MCP task 为 51.6%。Gemini-3-Pro + UI-Ins-7B overall 46.3%，Claude-4.5-Sonnet + UI-Ins-7B 为 43.8%（论文表 6）。

最强 end-to-end 结果是 Doubao-1.5-UI-TARS 的 overall 20.9%，且只评测兼容类别，没有 MCP 分数。Qwen3-VL-235B-A22B overall 9.5%，user-interaction 4.4%，MCP 5.4%。因此 51.7 与 20.9 的比较同时混合模型能力、planner-grounder 分解和 action/tool support，不能视为模块化 agent 天生更优的受控证明（论文 §4.3–§4.4）。

行为指标提供进一步边界。GPT-5 平均 27.8 step、1.11 次用户询问、UIQ 0.40、2.23 次 MCP call；Gemini 平均 step 更少（24.2）、MCP call 更多（2.63），但只问 0.36 次，UIQ 为 0.19。低 step 也可能来自提前失败：GUI-Owl-7B 平均 20.6 step，但 SR 只有 4.5%（论文表 7、§4.5）。

作者人工检查失败轨迹，总结五类模式：不澄清而臆测缺失事实、MCP 返回撑爆 context、忘记已修改文件、算术/逻辑错误，以及缺失时空 grounding（论文 §4.6）。这些是定性案例，不是发生率统计。

当前官方 artifact 相比论文显著提升可审计性：task/evaluator code 与按模型组织的 trajectory bundle 已公开。所检查的 `seed-2.0-pro.json.gz` 含 161 个任务条目，记录 task goal、step、prediction/action、可选 user/tool 字段、token usage、终局 score/reason 和 video-frame metadata；其中 101 条 score 1.0、60 条 score 0.0。这证明该 bundle 保留失败，但不代表每个论文运行都已完整发布。所有 benchmark 分数仍为作者报告，本 Card 未独立复现。
