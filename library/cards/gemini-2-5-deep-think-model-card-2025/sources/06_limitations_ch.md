Model Card 报告了 hallucination、偶发缓慢或 timeout，以及对良性请求的 over-refusal；2025 年 1 月的 knowledge cutoff 也限制了新鲜度。Parallel thinking 可能通过探索多个假设提升覆盖，但分支数、diversity control、stopping rule、aggregation rule 和 compute-normalized comparison 均未披露。192K 输出上限不是隐藏 thinking budget，best-of-32 评测也不是服务或训练预算。

反馈契约是最大的构造缺口。Model Card 提到人类和 critic 反馈，家族报告则描述 Data Reward Model 与 rubric-driven prompted Critic；但 Deep Think 专属 reward equation、rubric 内容、critic checkpoint、人类比较协议、权重、校准以及 false-positive/false-negative audit 均未知。作为 curator inference，critic 可能奖励流畅的 rubric 符合度，或在相关分支间形成一致判断，却仍无法识别细微错误的证明；模型也可能优化风格或长度信号而非正确性。没有证据说明 reasoning RL 如何测试 reward hacking 或 critic gaming。

训练数据与发布限制同样关键。Source manifest、数量、mixture weight、generator、filter、被拒绝的 trace、权利、split 和 Deep Think 专属 decontamination 均缺失。家族级 decontamination 不能证明新增 theorem-proving 与 mathematics-solution corpora 未和 benchmark 重叠。数据、权重、代码、reward 实现、parallel trace 和 evaluation transcript 均未发布，无法独立重建。

版本映射形成另一类评测风险。FSF 测试使用的是 thinking prompt 与 serving configuration 不同的 preliminary implementation；app 版本又是耗时数小时的 IMO 模型的更快变体。报告没有 checkpoint equivalence study。Cyber evaluation 的尝试次数与工具权限也因任务和模型而异。因此，能力与安全 aggregate 必须绑定到具体 configuration、tool set、attempt budget 和日期。

安全证据覆盖广但不完整。CBRN threat-model 细节被保留；外部 deceptive-alignment testing 和最终 CBRN critical-capability 判定在发布时尚未完成。人工检查报告没有发现无效的 reward-hacked RE-Bench 实验，但 raw trajectory、sampling rate、adjudication 和 false-negative analysis 均不可得。部署监控与 rate limit 可以降低产品风险，却不能证明训练 reward 本身能阻止滥用。
