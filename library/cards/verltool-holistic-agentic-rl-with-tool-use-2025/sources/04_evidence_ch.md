基础设施证据来自作者在固定8张H100设置下报告的时间。表2比较同步与异步rollout执行：Math-TIR分别为87秒与66秒，SQL为111秒与91秒，DeepSearch为193秒与98秒；最大报告比例是DeepSearch的1.97×。这支持“独立调度tool call能够在这些工作负载下降低等待”的主张，但不能衡量episode质量，也不能证明存在可复用轨迹发布（论文§3.3；表2）。

代表性任务结果跨越不同模型与metric。VT-Math配合GRPO报告61.7平均分；VT-Search配合GRPO报告45.9；VT-SQL在Spider dev和Spider realistic上分别报告83.9和81.3；VT-SWE报告19.5，而base scaffold为10.4；VT-VisualReasoner使用complex reward时报告82.7；VT-DeepSearch在snippet评测和外部QwQ summarizer评测下分别报告32.0和34.0（表3–6）。这些数字来自不可直接比较的任务surface，不能合并为单一data-quality分数。

论文的ablation与执行变体为机制提供证据，但每项结论都受任务特定数据、reward、模型和预算约束。deep-search的snippet评测不同于调用外部QwQ-32B browser summarizer的评测；后者是evaluation dependency，不是训练监督。SQL附录还存在内部冲突：附录A.3写Qwen2.5-7B-Instruct，表5与当前官方recipe则写Qwen2.5-Coder-7B-Instruct。本卡保留该矛盾，不擅自选择其中一项。

本卡不声称存在独立复现。benchmark提升只表明模型在作者配置下的行为，不能证明生成episode在正确性、覆盖度、license状态或replayability方面合格。由于缺少各领域生成与保留episode数量、成功/失败manifest、精确checkpoint映射和论文版本固定的代码bundle，无法对底层trajectory作出release-quality结论。
