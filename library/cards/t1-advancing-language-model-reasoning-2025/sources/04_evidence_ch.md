主要证据受作者所用模型、benchmark 与 greedy Pass@1 协议限制。作者仓库结果表中，Qwen2.5-32B 上的 T1 报告 MATH500 92.4、AIME 50.6、OmniMATH500 49.6、GPQA 56.1；其列出的仅 SFT 对照为 83.4、24.9、34.6、49.5。这些是作者报告的 benchmark 结果，并不是对公开数据质量的审计。

两个诊断结果对理解配方更有帮助。top-p 0.95 下，14B 设置的温度扫描在 0.9、1.1、1.2、1.3 时分别报告 MATH500/AIME/OmniMATH 为 78.2/19.1/32.0、84.6/29.0/37.8、86.4/29.3/38.6、84.6/24.3/36.4；温度 1.2 改为 min-p 0.05 时为 78.8/11.5/31.6。这支持的是特定设置中的探索结论，不是通用温度法则。（论文 Table 2。）

坏回复 penalty 的消融在 120 个 RL steps 时报告：有 penalty 的 accuracy 为 81.2、overlong ratio 为 1.6%；无 penalty 时为 76.4 和 16.3%；无 penalty 的 160-step 结果未报告。（论文 Table 3。）Figure 6 显示 Qwen2.5-32B 的平均生成 token 从约 2k 增至约 7k 时，AIME 平均值从 24.3 升至约 50，而 MATH500 从 86.1 升至 92.4。这些观察只描述报告的设置；未发现独立复现或 contamination audit。
