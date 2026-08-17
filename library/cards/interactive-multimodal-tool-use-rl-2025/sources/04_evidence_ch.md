在tau-bench retail上，表`tab::main_results`报告：base Qwen3-8B的pass^1为42.6，Qwen3-8B + GRPO为51.3，`+Math+TARL`为57.4；按表中数字，最后一项比GRPO高6.1个百分点（论文§4.2）。这些是作者在主要verifier设置下报告的任务成功结果，该设置不包含tau-bench的expected-output check。

多模态表报告：base Qwen2.5-Omni-7B的文本pass^1为7.8、语音pass^1为14.8，而`+GRPO+Math+TARL`分别达到36.5和37.4。未使用语音训练的policy在语音评测上得到32.2，而混合语音-文本训练得到37.4；作者把这一差距解释为纯文本fine-tuning会削弱语音能力的证据（论文§4.3–§4.4，表`tab::multimodal_results`）。

reward granularity分析报告，trajectory-level聚合比vanilla PPO的pass^1高4.3个百分点，而直接逐轮分配reward表现更差并使训练不稳定（论文§5.1，Fig. `reward_granularity`；表2）。另一种online intervention方案允许judge在每个推理step最多干预两次，但会提高KL、破坏优化稳定性，且没有改善表现（论文§5.2，Fig. `intervention_comparison`）。

负面的泛化结果同样重要：只在约3,000个零售任务上训练的policy，在airline评测中会随`k`增大而更快退化；作者据此认为学到的探索方式不能有效迁移（论文§2.3，表`tab::baseline_rl_results`）。这些结果只说明模型在论文sandbox、reward、curriculum与评测边界内的行为；它们不能证明未发布任务或rollout是高质量可复用数据，论文也未报告独立复现。
