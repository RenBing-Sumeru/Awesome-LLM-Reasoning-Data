核心贡献是在异构测试时推理方法之上建立共同的执行与观察层。ThinkBooster 把 reasoning generator、strategy、按需使用的 scorer、benchmark evaluator 和 artifact/debug 层分开。这样，同一 prompt 与模型后端可以经过离线采样、投票、逐步搜索、续写或置信度引导解码，同时保留可比较的候选、决策、成本和结果记录。

九种策略覆盖不同控制模式。Best-of-N 生成完整候选并重排序；self-consistency 对抽取答案投票；beam search/Tree-of-Thought 反复扩展并剪枝部分路径；extended thinking 请求有上限的续写；MUR/dynamic exploration 动态调整逐步探索；DeepConf 同时包含 online 与 offline 版本；phi-decoding 和 uncertainty CoT 在生成过程中利用内部置信信息。论文表 1 还区分 offline/online、black-box/white-box 访问以及是否需要 prefill；这些是部署契约，而不是形式标签。

四类 scorer 提供选择证据。PRM 为步骤或轨迹附加过程奖励；不确定性/置信度 scorer 从 token 概率导出 entropy、perplexity、sequence probability 或 probability differential；LLM critic 使用 value 或 vote prompting，因此提供的是判断而不是正确性证明；ReProbes 被报告为利用内部状态的 white-box scorer。最终 benchmark grader 与这些搜索时 selector 相互独立：路径即使 selector 分数很高，也可能无法通过精确答案或可执行测试。

其轨迹契约具有较强可观察性。策略结果可以暴露选中轨迹、抽取答案、步骤条目、候选池、分数与信号方向、选中索引、token 统计、延迟、完成状态及策略/scorer 元数据。visual debugger 将它们转换为 timeline event 和 trajectory tree，展示生成、剪枝、重排序、选中路径与被剪枝兄弟节点。运行记录还可包含 provider/model 身份、预算与已用预算、token 总量、延迟、配置快照、置信度和选择理由。

这种可观察性存在于运行时，但发布完整性远窄于此。仓库跟踪的 `cached_examples.json` 只包含两个生成式数学示例，每例预算为 8，各有五次运行：baseline、self-consistency、online Best-of-N 加 PRM、beam search 加 PRM，以及 offline Best-of-N 加 PRM。示例由 `anthropic/claude-sonnet-4` 通过 OpenRouter 生成，包含 prompt、轨迹、候选、分数、配置、token 计数和延迟。它们是产品演示缓存，不是 Qwen/GPT-OSS 论文实验语料。
