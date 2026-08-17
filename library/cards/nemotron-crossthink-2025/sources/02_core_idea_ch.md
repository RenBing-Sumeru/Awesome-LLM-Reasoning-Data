该框架把来源多样性与狭窄 reward 合约结合。它收集通用推理和数学提示，将任务转换为 MCQ 或开放题模板，移除难以用简单规则核验的答案，构造按来源、格式或 usefulness 调整的不同 blend，再执行 GRPO。只有答案正确性与输出格式同时通过时，总 reward 才为正；推理必须位于 think 标签内，最终答案必须放在 boxed answer 字段中。

公开对象非常具体：每个 JSONL 行包含 data_source、在 think block 起点结束的 user prompt、reward_model.ground_truth、reward_model.style=rule 与 meta_data；Math 记录还包含 persona 和 skills。它不含 policy 完成后的推理。该方法讨论的是提示来源、答案空间约束与 blend 权重如何影响在线 RL，而不是声称公开文件是轨迹数据集或 exact matching 是语义 verifier。

