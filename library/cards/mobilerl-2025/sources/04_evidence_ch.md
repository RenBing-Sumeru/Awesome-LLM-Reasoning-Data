在 arXiv v2 的 full-resolution setting 下，以 Qwen2.5-VL-7B 为 backbone 的 MobileRL 在 AndroidWorld/AndroidLab 上为 72.0%/42.5%；以 GLM-4.1V-9B-Base 为 backbone 的 MobileRL 为 80.2%/53.6%。Table 1 中，V-Droid 为 59.5%/38.3%，UI-Tars-1.5 为 64.2%/38.3%，UI-Genie-Agent 在 AndroidLab 为 41.2%。这些是作者在特定 emulator/judge setup 下报告的 success rate，不是独立复现或 data-quality 认证。

staged ablation 把初始化与 online RL 分开。Qwen2.5-VL-7B-Instruct 从 27.6%/10.1% 开始，reasoning-free SFT 后为 50.2%/36.9%，reasoning SFT 后为 56.8%/38.7%，AdaGRPO 后为 72.0%/42.5%。GLM-4.1V-9B-Base 从 7.7%/10.1% 提升到 48.1%/42.7%、66.2%/45.0%，最后为 80.2%/53.6%。SFT 阶段贡献很大，因此不能把 final score 全部归因于 online RL。

AdaGRPO ablation 使用 Qwen reasoning-SFT initialization 与 AndroidWorld rule-based verifier，以避开 AndroidLab reward-model bias。三次运行平均后，完整 MobileRL 为 71.1%；去掉 AdaPR 为 63.6%，去掉 SPA 为 69.1%，两者都去掉为 58.5%，去掉 FCF 为 64.8%，完全不用 AdaGRPO 为 56.8%。这些结果支持 100-step compute budget 下的组合 selection recipe，但没有披露每个 filter 实际保留或丢弃多少 episode。

Figure 4 按 AndroidWorld task complexity 做八次 temperature-1.0 trial。最高 complexity group 的 pass@1/2/4/8 相对提升分别为 +11.3、+15.7、+19.9、+24.3 个百分点；SPA 在各 complexity group 上也更常用较少 step 完成任务。这是 paper-defined efficiency 的证据，不能证明短路径天然更安全或语义更优。

两个 negative result 限定了结论。AndroidLab learned reward model 在 1,000 条 curated trace 上只有 86% accuracy，且作者报告 AndroidLab training curve 更不平滑；MobileRL-9B 最优结果来自只使用 AndroidWorld 的 RL。Table 6 还显示 image resolution 会改变 GLM 结果：compressed image 为 75.8%/46.8%，full-resolution 为 80.2%/53.6%。官方 evaluation README 提醒 inference engine、deployment 与 compression 会造成常见 1–2 point 波动，并以三次独立运行取平均。
