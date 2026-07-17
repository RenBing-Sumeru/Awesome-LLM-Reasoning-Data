在 Arena-Hard、AlpacaEval 2.0 和 MT-Bench 上，主设置只选择 30% 的回答 token。论文报告，相对于比较方法，这使 GPU 训练时长减少 39.94% 至 62.34%，同时在多数被测试策略模型上超过主要的回答级和 token 级基线。对于 LLaMA-3-Base-8B，SePO 的 Arena-Hard 胜率为 25.0%，长度控制的 AlpacaEval 胜率为 25.6%，而 SparsePO 分别为 20.6% 和 21.78%，DPO 分别为 15.9% 和 18.2%。

对照实验将性能与选择质量而非仅仅稀疏性联系起来。随机选择相同份额的 token 会显著降低结果；在 LLaMA-3-Base-8B 上，它的 Arena-Hard 胜率为 6.2%，长度控制的 AlpacaEval 胜率为 10.6%。研究还报告，一个 TinyLLaMA-1.1B 或 Pythia-1B oracle 可以引导大得多的策略模型，并检验了分布外 HH-RLHF 监督，以表明选择性掩码能够减少在较弱数据上的过度优化。
