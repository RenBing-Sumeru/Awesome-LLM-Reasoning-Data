数据集证据来自专家演示发布：论文报告 709 个 episode、2,579 个 steps、29 个移动应用、中英文较均衡分布、5 个任务维度和 3 个 dependency level。官方 GitHub/HF 数据卡给出过滤版 708 个 episode、2,572 个 steps，因此引用数字必须绑定版本。

benchmark 证据来自确定性的 step-level 评测。论文主表中 Gemini 3 Pro 约为 63.6 EM、33.4 SR；Qwen3-Omni 是开源模型里较强的一项，约为 32.3 EM、5.1 SR。动作类型准确率明显高于 episode 成功率，说明精确坐标/字符串 grounding 和多步一致性仍是瓶颈。

消融实验支持设计动机：去掉 audio/video 对 AV-Critical 任务影响最大，对 AV-Present 任务影响很小；无关音视频甚至会干扰部分模型。证据边界是 offline teacher forcing：它能隔离每步感知到动作的能力，但不测试 agent 自己犯错后如何恢复。
