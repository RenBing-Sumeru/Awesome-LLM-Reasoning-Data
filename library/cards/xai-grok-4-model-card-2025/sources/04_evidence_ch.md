模型卡是一份日期为 2025-08-20 的官方八页披露。它直接支持本 Card 中关于来源类别、过滤、SFT/RL 反馈及评估的表述。

对于滥用潜力评估，表 1 报告 Grok 4 API 和 Web 的标准拒答 answer rate 均为 0.00；用户越狱条件下分别为 0.00 和 0.01；API 的系统越狱 answer rate 为 0.01；AgentHarm answer rate 为 0.14；AgentDojo attack-success rate 为 0.02。表 2 报告 Grok 4 API 的 MASK dishonesty rate 为 0.43、内部 soft-bias 平均值为 0.36、sycophancy rate 为 0.07。表 3 报告了部分双重用途能力分数，包括 API/Web 的 BioLP-Bench accuracy 为 0.47/0.44、VCT accuracy 为 0.60/0.71。

这些数字是模型卡在其所述条件和缓解措施下的结果，并不是已发布训练数据、经过校准的奖励模型、可独立复现的系统配置或一般安全保证的证据。发布公告独立支持了 RL 规模化、可验证数据领域扩展和工具使用 RL 的高层主张。

