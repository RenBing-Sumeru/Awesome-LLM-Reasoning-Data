常见数学模型流程把数学网页文本用于 continued pre-training（CPT），把带过程的问题解答留给 supervised fine-tuning（SFT）。该论文研究一个更窄的数据设计问题：问题与推理步骤是否应在 CPT 阶段就被学习，不同变换方法是否改变结果，以及相同问题求解 token 分配到 CPT 或 SFT 时会怎样。（论文 §1–§2。）

研究比较普通数学语料 token、原始问题求解记录和四类合成衍生记录。核心数据对象不只是最终答案，还包括替代的带过程解答、带自检的变换问题—解答对、人工重试轨迹，以及学生尝试/教师纠错记录。它们具有不同反馈信号和 rationale 结构。

对本图谱而言，该论文同时属于 instruction/demonstration/rationale data 研究与构造 recipe 对比。但来源和合成语料均未发布；公开的只有论文、prompt、answer-comparison model 与最终 MathGPT-8B checkpoint。因此，它适合用于 recipe 审计和独立重实现，而不能直接复用 dataset。
