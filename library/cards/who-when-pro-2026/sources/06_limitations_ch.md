核心建模假设是单个受控错误。现实智能体失败可能来自多个弱 action、延迟环境变化、智能体交互、隐藏状态或成功恢复。18-mode taxonomy 被作者明确说明为非穷尽，其适用 profile 来自抽样自然失败，但数量与抽样流程均为 unknown。因此，论文报告的基准刻画的是注入流水线能够表达并保留的失败，而不是完整自然失败分布。

“由构造保证的 golden label”有价值但存在边界。3 位标注者的多数复核对 step 标签的通过率为 94%，对多智能体轨迹的 agent 标签为 90%，对 error-family 标签也为 90%，另有 2% 没有清晰决定性错误。一个被替换的 action 可以是首个受控差异，但在语义上仍可能含糊，尤其当其下游症状更像另一错误 family 时。模型经常把 planning、verification 和 coordination 根因归为 reasoning error；提供任务答案还可能把 judge 引向终局不匹配，从而削弱根因诊断。

筛选隐藏了韧性。只有使来源 evaluator 判为失败的注入才会保留；注入后成功、自我修正、replay abort、因泄漏被过滤的轨迹，以及答案已明显出现的案例都会被丢弃。由于任务 evaluator 清单、版本、阈值、输出和 false-positive/false-negative 审计不可得，这一流程可能偏向对 evaluator 敏感的失败，并移除学习“表面错误何时可恢复”所需的反例。这是根据筛选契约做出的 curator inference，不是作者报告的训练结论。

Replay 只实现了部分冻结。静态事实工具调用使用 cache，但页面 summary LLM 输出被刻意排除在 cache 外；有状态浏览器与代码 session 则在新 instance 上重新执行。Bing DOM rotation 占论文报告的 `input_text` replay failure 的 89%。由于 cache、snapshot、环境 image、dependency lock、retry ledger 和 fidelity 输出均未公开，无法审计精确因果 replay。

实验没有披露 train/dev/test split。100 条人工复核轨迹和 1,444 条消融轨迹都没有公开 ID 或 overlap manifest。全部任务来自 26 个公开基准，但去重、任务分组、模型污染与 benchmark overlap 均为 unknown。论文称不存在 PII 且不涉及人类受试者，但 reviewer 招募、报酬、同意、原始修正和脱敏证据未披露。

发布状态是阻塞性限制。Appendix A 称全部轨迹、标签和评测代码均已发布，但官方仓库明确表示尚未公开，当前只发布 README 与一张图。数据/代码许可证均为 unknown，不能把 manuscript 的 CC BY-NC-SA 4.0 许可转移给未发布工件。当前没有任何成功 seed、自然失败、保留的注入失败、被拒绝尝试、evaluator、预测或可运行环境可公开取得。
