WebChain 的基本数据单元是受任务条件约束的人类网页轨迹，而不是孤立的“截图—动作”对。一个未具名 LLM 先根据从目标网站提取的功能 schema 合成任务，人类标注者再借助 WebChain Builder 在真实在线网站上执行任务。每个步骤同步视觉状态、结构状态与 grounded action；后处理还会标注视口内其他可交互元素，并可加入由未具名 VLM 生成的动作解释。

官方报告 31,725 条人工核验轨迹、317,993 个步骤和 428 个 domain，这三个数字的分母不同。每条轨迹平均 10.02 步、耗时 1.07 分钟。Hugging Face 发布物既有原始归档，也有两种加工视图：高层样本结合指令、历史和当前截图训练规划，低层样本结合当前步骤指令与观察训练 grounding。全页面截图明确只覆盖部分记录。

配套的 Dual Mid-Training 将空间 grounding 与长程规划分开培养。论文研究了结合 Visual Grounding Densification 的 Spatial-Grounding-oriented RLVR、使用 5,000 条合成解释样本的 CoT-SFT，以及后续 Long-Chain-oriented RLVR。本 Card 仍遵守已接受的 `sft` 与 `agent_training` 分类边界；RL 阶段仅作为配方证据说明，不用于扩张 canonical 字段。

这些监督不能被理解成唯一 gold plan。人类轨迹只是非平稳网站上的一条看似成功路径，其他元素、顺序、快捷操作和恢复动作同样可能有效。
