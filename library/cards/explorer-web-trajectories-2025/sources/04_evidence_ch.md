与数据本身最直接相关的证据是构建漏斗和 verifier 审计。Table 3 区分 175K 次原始尝试与 94K 条接受 episode，并明确说明 49K 个唯一 URL、平均 7.7 步、720K 张图像、830M tokens 和 33.3M 个元素属于接受集。Table 9 又报告 53K 个唯一 proposal、94K 条最终任务描述和 81K 条唯一最终描述。这些计数支持作者流程下的规模与可观察描述多样性，但不能证明合法性、无污染、可重放性或逐条成功。

在随机抽取并由人工复核的 100 条生成轨迹上，Table 10 报告 task verifier 与人工判断一致率为 81%。归一化混淆矩阵包含 0.14 的“人工标为失败、verifier 判为成功”和 0.05 的“人工标为成功、verifier 判为失败”。这直接显示误接受与误拒绝。它是对筛选器的小样本校准，不是全部 94K 条接受记录均正确的证明。

在作者选择的 83 条可访问 Mind2Web-Live 任务上，Table 5 报告 Explorer-4B 的 full-task success 为 18.1%，Phi-3.5V 为 2.4%；Explorer-7B 为 19.3%，Qwen2-VL-7B 为 14.5%。Appendix A 说明这些值取三次运行的最大值；在全部 104 条任务上，Appendix Table A.1 报告两个 Explorer 模型均为 16.4%。在 Multimodal-Mind2Web 上，仅使用合成轨迹的 Explorer-4B 与 Explorer-7B 的平均 step success 分别为 37.4 和 43.0；Table 6 也表明加入 Mind2Web 训练会改变比较。在 MiniWob++ zero-shot 评测中，Table 8 报告 46.74 与 53.26 accuracy，对照 AgentTrek-7B 为 45.28，Qwen2-VL-7B 基线为 36.96。

Figure 3 报告 25%、50% 与 100% 数据子集在三次运行平均后单调改善，但该消融改变的是既定训练配方内的数据量，不能独立验证轨迹质量。Table A.3 还显示 backbone 敏感性：LLaVA-Mistral-7B、纯文本 Phi-3-mini、Phi-3.5V 与 Qwen2-VL-7B 的 full-task success 分别为 4.8、13.3、18.1 与 19.3。所有 benchmark 结果均由作者报告；实时站点选择、学习型裁判、backbone 与训练设置都会限制归因。

官方仓库以 MIT 条款公开合成、SFT 与评测代码，核查时没有 tagged release。命令需要传入本地轨迹路径，而不是提供官方语料下载。因此，代码可得支持的是配方检查，不能据此宣称 94K episode、拒绝尝试、checksum、data card 或数据集许可已经公开。
