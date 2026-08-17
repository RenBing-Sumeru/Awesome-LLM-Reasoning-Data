六页模型卡直接支持有限训练披露和依赖配置的评估。Table 1 报告 Thinking/Non-Thinking 的有害 query answer rate：standard refusal 0.07/0.05、user jailbreak 0.02/0.00、system jailbreak 0.02/0.00、AgentHarm 0.14/0.04、AgentDojo attack success 0.05/0.01。Table 2 的 input-filter false negative rate 对 restricted biology 是 .03/.20（direct/prompt injection），对 chemistry 是 .00/.12。这些是报告的评估结果，不是 verifier training quality 或可复用 safety record。

Table 3 的 MASK dishonesty 为 .49/.46、sycophancy 为 .19/.23（Thinking/Non-Thinking），而 Grok 4 为 .43/.07。Table 4 的 Thinking 结果为 WMDP Bio .87、VCT .61、BioLP .37、ProtocolQA .79、FigQA .34、CloningScenarios .46、WMDP Chem .84、WMDP Cyber .84、CyBench .39、MakeMeSay .00。模型卡称所有 dual-use 结果使用 Thinking 且移除 safeguard，不能视为部署系统安全分数。

公告独立报告了 11 月 1–14 日两周 silent rollout、持续 blind pairwise evaluation 和相对前一 production model 的 64.78% preference。它提及 production-traffic 分层 hallucination evaluation，但可读正文未提供数字表。这只是部署/评估证据：既不记录 live traffic 用于训练，也不提供 label、数据治理或可复现结果。

模型卡明确说早期卡片误将只英文 prompt 用于评估，本次 multilingual 结果不可直接比较。未核验到独立复现、代码、原始数据、evaluator package、filter package 或官方权重。
