**主张。** 基于执行轨迹的奖励建模可替代代码 RL 的合成单元测试奖励。**受控设置。** 表1在5,000道 OpenCodeInstruct 题上训练 Qwen3-4B-Thinking，并按论文所述 GRPO 配方比较奖励来源；会改变归因的差异是 CodeRM-NT 与合成测试。

**结果。** CodeRM-NT 在 HumanEval(+) 、MBPP(+) 、LiveCodeBench-v5 和 BigCodeBench-Instruct Hard 上的平均 pass@1 为72.7，合成测试为72.1；前者在 LiveCodeBench-v5 和 BigCodeBench 上为52.1和22.3，后者为50.3和25.7。表3的 RewardBench hep-python 准确率为0.963，AceCodeRM-7B 为0.957。

**边界。** 这只支持披露的 Python、模型、数据和奖励配置，不能证明所有由 LLM judge 判断的轨迹都具备语义正确性，也不证明其适用于多文件软件工程。
