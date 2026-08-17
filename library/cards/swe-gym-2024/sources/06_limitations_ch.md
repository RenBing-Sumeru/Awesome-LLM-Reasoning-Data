SWE-Gym 的 verifier signal 可靠性受可执行任务环境和测试限制。通过测试可能漏掉行为回归，测试失败也可能来自 setup 问题，而不是 agent 推理失败。

轨迹数据带来 provenance 风险。官方 README 说明某个 OpenHands 设置中，fine-tuning 使用了从 GPT-4o 和 Claude 3.5 Sonnet 采样的轨迹；下游用户需要记录每条轨迹由哪个 teacher/model/scaffold 生成，以及用什么 filtering rule 接受。

compute 是混杂因素。论文报告的提升涉及训练算力、推理时采样和 verifier selection；如果 budget 不相同，模型比较可能把增益归因到错误组件。

公开发布提高了可审计性，但也增加污染风险。如果 SWE-Gym 数据或轨迹用于训练，后续 SWE-bench Lite/Verified 评测需要明确 leakage control。
