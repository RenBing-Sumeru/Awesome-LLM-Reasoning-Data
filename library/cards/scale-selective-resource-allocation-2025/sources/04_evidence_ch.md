论文已被 AAAI 2026 接收，作者仓库和数据卡公开且由论文链接。数据卡记录四个 QwQ-32B JSON 文件，共 3,112 条，并给出其阈值、来源和字段。仓库使用 MIT license，且公开了大纲选择、步骤评分、模式路由和上下文传播的代码路径。

论文 Table 1 报告：在 AIME25 上，Qwen3-32B-SCALE 的准确率为 71.25%、总 response tokens 为 26,643；CoT 为 57.50%/6,839，InftyThink 为 70.00%/36,640。在 AIME24 上，Qwen3-32B-SCALE 为 82.92%/25,581，而 CoT 为 73.33%/7,409。作者还报告 800 对 SFT 设置；Llama3.3-70B-Instruct 在 AIME24 从 24.58% 变为 63.51%（Table 3）。

这些是在所列 prompts、模型、指标和采样协议下的作者报告结果。它们支持性能比较，不支持难度标签已校准、轨迹忠实、训练复用安全或不存在 benchmark overlap 的主张。
