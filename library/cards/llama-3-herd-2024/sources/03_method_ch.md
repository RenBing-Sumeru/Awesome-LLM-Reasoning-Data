已披露配方如下：

1. **预训练语料与配比。** 405B 模型使用 15.6T text token、约 3.8×10^25 FLOPs 和超过 16,000 张 H100。Meta 称数据来自公开在线内容、不使用 Meta 用户数据，cutoff 为 2023 年 12 月；最终约 50% 通识、25% 数学/推理、17% 代码、8% 多语言。来源清单与权利未发布。
2. **过滤与规模。** URL、MinHash 文档和重复行去重，结合 PII/成人/不安全域过滤、重复/离群启发式、基于 Llama 2 的质量/领域分类器，以及 176 种语言识别。AdamW 峰值 LR `8e-5`，8,000 warmup step，在 1.2M step 衰减到 `8e-7`，token batch 从 4M→8M→16M。
3. **长上下文与 annealing。** 六个渐进阶段用约 800B token 把 8K 扩展到 128K。最后 40M token 在 128K 上采样高质量来源，LR 线性降到零，最终进行 checkpoint averaging。
4. **人类偏好与 RM。** 每个提示由标注者比较两个当前模型的响应，标四档偏好强度，并可编辑 chosen，形成 `edited > chosen > rejected`。RM 使用合格比较；绝对数量、checkpoint、rubric 和校准均封闭。
5. **Rejection sampling、SFT、DPO。** 对人类标注提示通常从近期或能力最佳 chat 模型采样 10–30 个候选，由通用 RM 选最优。最大模型 SFT 以 LR `1e-5` 训练 8.5K–9K step；DPO 使用 LR `1e-5`、beta `0.1`、format-token masking 和 `0.2` chosen-sequence NLL。六轮重复收集偏好/SFT。PPO 被试验但未采用。
6. **SFT 配比。** Model card 报告超过 25M 条合成 fine-tuning 样本。最终 SFT 为 52.66% 通用英语、14.89% 代码、3.01% 多语言、8.14% exam-like、21.19% 推理/工具、0.11% 长上下文。
7. **能力数据。** 代码分支使用 1T token、>85% 代码的 expert，以及超过 2.7M 合成 SFT，其中约 1M execution-feedback、1.2M backtranslation，经 parser、linter、编译、测试、执行、自验证和 judge 过滤。数学使用转为 QA 的预训练记录、人类技能提示、最终答案、自验证、outcome/stepwise RM、MCTS、Python 和错误修正。工具数据覆盖 Brave Search、Python、Wolfram Alpha、文件处理、The Stack 函数、多 agent API 合成、可执行调用及人类 message-level 反馈。
8. **安全。** 人类/vendor 与合成对抗数据、guided mutation、Rainbow Teaming、安全 DPO 和拒绝语气改写训练策略。公开组件包括 8B Llama Guard 3（13 类 MLCommons hazard 加 Code Interpreter Abuse）、Prompt Guard 和 Code Shield；训练记录及内部基准仍封闭。
