对 Rollout, Search, and Test-Time Trace Data 轨道而言，GenSelect 提供了把 generation 与 selection 分开的具体 schema。一条可复现记录应包含：题目与来源；generator 与 decoding 设置；每个候选的稳定 ID、完整轨迹、摘要、抽取答案和顺序；分组与 bracket membership；selector model、prompt version、生成式比较、解析出的索引和 parse status；重复与 permutation ID；被选答案；answer checker 或 judge 的版本与输出；token、调用次数与 latency 预算；以及 selected、non-selected 与 failed candidate 的保留标记。有了这些字段，研究者才能审计增益来自更好的候选池、比较式推理、重复投票还是额外算力。

该方法可作为逐点 verifier 与比较式 verifier 的评测 baseline，可用于分支数和候选顺序的消融，也可作为研究 generation 与 selection 预算如何交互的 test-time compute policy。未发布的目标轨迹只能作为阅读与审计参考：论文足以支持重建高层评测设计，但不支持直接训练复用或精确结果复现。

相关 OpenMathReasoning `genselect` split 可用于格式检查，并可在遵守其 CC BY 4.0 条款且完成源数据权利审查后用于 selector-trace training 实验。其 565,620 条记录暴露完整的打包候选摘要组、未选摘要、selector reasoning 和可解析 judgment。复用者应先把打包索引规范化为独立字段，在有依据时重建逐候选标签，记录解析失败，并明确错误 selector 运行已在构建时被过滤。任何 SFT 用途都属于该 release 的 lineage，不能写成目标 GenSelect 论文已经验证的 training use。

Atlas 内适合对照阅读的条目包括：说明构建与发布 lineage 的 `aimo2-openmathreasoning-2025`，以及训练 selector 而不是仅依赖 prompt-time 行为的后续工作 `learning-generative-selection-2026`。
