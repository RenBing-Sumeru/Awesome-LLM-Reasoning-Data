VLFeedback 以 GPT-4V 反馈扩展 VLM 对齐。它整理多样指令，从 12 模型池抽取至少四个回答，并按三个维度以 1–5 分和理由评分。DPO 对使用平均维度分数构造，平局被丢弃。其契约是带解释、可审计的 AI 判断。相比狭窄的视觉忠实性数据，它在规模上加入有帮助性和伦理；人类一致性只是支持证据，不能替代人类审查。

官方数据：https://huggingface.co/datasets/MMInstruction/VLFeedback。代码：https://github.com/vlf-silkie/VLFeedback。
