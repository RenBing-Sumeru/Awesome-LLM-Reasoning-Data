主要来源是一份由 xAI 发布、最后更新于 2025-09-19 的七页官方模型卡。它直接支持本 Card 中关于宽泛来源类别、过滤、SFT/RL 反馈、安全缓解和评估的表述。官方发布公告独立支持大规模 RL、端到端工具使用 RL、统一推理/非推理权重、200 万 token 上下文以及所述产品行为。

表 1 对推理/非推理模式分别报告：拒答 answer rate 为 0.00/0.00，用户越狱 answer rate 为 0.00/0.00，系统越狱 answer rate 为 0.00/0.01，AgentHarm answer rate 为 0.08/0.10，AgentDojo attack-success rate 为 0.00/0.03。表 2 报告 MASK dishonesty rate 为 0.47/0.63、内部 soft-bias 平均值为 0.79/0.89、sycophancy rate 为 0.10/0.13。表 3 报告 MakeMeSay win rate 为 0.12、BioLP-Bench accuracy 为 39.0、VCT accuracy 为 54.5、WMDP Bio/Chem/Cyber accuracy 为 85.2/77.5/81.4、CyBench unguided success 为 30.0。

这些是来源报告的、特定配置下的评估结果，并不是已发布训练数据、经过校准的奖励模型、可独立复现的部署或一般安全保证的证据。

