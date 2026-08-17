本文贡献是一套建立在匹配教师输出之上的、同时受难度和训练阶段控制的蒸馏日程。Qwen2.5-32B-Instruct 提供普通 chain-of-thought 解答；DeepSeek-R1-Distill-Qwen-32B 则以三种模式生成：Think 保留完整审慎推理，NoRethink 禁止少量会触发自我修正的词以促成更线性的轨迹，NoThink 在开头加入无信息的“已经思考完毕”模板，使模型直接给出解答。这些是可观察的提示与解码条件，并不是经验证的内部认知状态。（论文第 3.1.1 节。）

反馈合同由 Math-Verify 提供。在每道题、每种条件最多四次采样的预算内，它接受经抽取的最终答案；只有 Instruct、Think、NoRethink 和 NoThink 都至少产生一个被接受解答的题目，才进入含 6,445 道题的池。该验证器能观察答案抽取后的等价性，却不能证明中间文本在逻辑上正确或忠实。因此，过程文本在 SFT 中受到监督，而样本选择仍是答案级的。

阶段 1 对 MATH Levels 1-4 使用 Instruct 轨迹，对 Level 5 使用 NoThink 解答；阶段 2 把 Levels 1-4 改为 NoThink，把 Level 5 改为 NoRethink。论文中最接近的基线是 Li et al. (2025) 的 Mix-Long，它按 4:1 随机混合 Instruct 与 Think 输出。关键变化是用同时依赖题目难度和训练阶段的课程，替代固定的长短轨迹随机混合。（论文第 4.2 节与表 2。）
