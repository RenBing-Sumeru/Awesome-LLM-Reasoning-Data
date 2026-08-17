后训练分为三阶段。SFT 先做两轮 32K，再做一轮混合 32K/256K 的长文档与长视频 curriculum；标准回答训练 non-thinking 变体，CoT 回答训练 thinking 变体。报告中的 SFT 集约 120 万条，其中三分之一是纯文本，三分之二是图文/视频文本。另一个 Long-CoT cold start 在视觉语言与文本 query 间约为 1:1。

Strong-to-weak distillation 先组合 off-policy teacher 输出做 response distillation，再让 student 生成 on-policy sequence，并最小化 student 与 teacher logits 的 KL divergence。最终 RL 区分 Reasoning RL——使用规则/代码验证的数学、代码、逻辑、视觉定位与视觉谜题——和 General RL——混合指令、偏好、格式与定向纠错 reward。这些阶段包含不同的 response、sequence、logit、rollout 与 reward 对象，但都没有作为训练数据发布。

