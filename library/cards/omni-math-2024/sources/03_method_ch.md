输入包括奥赛级数学题、参考答案或解法、子领域标签、难度标签、模型提示和模型生成答案。论文中的 Omni-MATH 是评测对象，不是一个单一模型训练流程；不能从分数反推出 base model、optimizer、reward model 或 RL rollout 设置。

流程可以审计为四步：第一，整理高难数学题并归一化成带类别和难度元数据的 benchmark record。第二，用固定提示/脚手架策略运行待评测模型并抽取最终答案。第三，对格式明确的答案使用规则检查，对自由文本等价性问题使用 Omni-Judge。第四，按模型、子领域和难度报告 aggregate accuracy，但实例级是否正确仍是最终反馈单位。

输出是 benchmark 记录、模型分数、类别/难度拆分和发布的 judge artifact。复用时必须固定数据集 revision、judge revision、prompt 模板、答案抽取规则、采样设置，以及比较所用的是公开样本、保留样本还是某个排行榜快照。
