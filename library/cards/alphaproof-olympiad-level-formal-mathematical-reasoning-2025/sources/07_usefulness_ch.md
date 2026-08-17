对 `rollout_search_test_time_trace_data` 而言，AlphaProof 给出了一套明确的形式搜索记录模式：形式陈述及溯源、Lean/Mathlib 版本、tactic state、采样 tactic、有效性与执行结果、生成的子目标、逐步奖励、树访问与 value、自适应预算、proof/disproof/timeout 结果、是否进入 replay，以及最终独立验证。

TTRL 循环对后训练数据设计尤其重要，因为它在推理时把生成变体和已验证搜索经验转化为问题特定适应。复用或复现需要发布课程、接受与拒绝尝试、树和 matchmaker 日志、replay 采样、环境固定版本、模型检查点及计算核算。基准结果只是方法证据，不是轨迹质量证明。
