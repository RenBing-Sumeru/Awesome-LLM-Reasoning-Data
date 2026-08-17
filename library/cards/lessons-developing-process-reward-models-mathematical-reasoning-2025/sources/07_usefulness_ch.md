对于 Track 12，该工作提供了阅读 process-reward 发布的紧凑清单：识别 query source 和 golden-answer contract、response generator、step separator、completion count、answer matcher、critic、consensus rule、retained/rejected yield、reward interface 和 step-level evaluation。它说明这些字段不应被压缩为“PRM checkpoint 是开放的”这一说法。

它对 process-supervision 和 reward-model 审计有用，因为它把 MC outcome estimates 与直接步骤验证分开，并要求 response-level selection 结果与 error-localization evidence 一起解读。官方 checkpoint 可用于 score steps，但报告并不支持其训练语料或 verification pipeline 可被复现或复用的主张。

本 Card 特意不把论文的 scaling comparisons、candidate counts 或 search experiments 当作 Track 8 贡献；其范围是 process-reward 的数据披露边界与相关审计风险。
