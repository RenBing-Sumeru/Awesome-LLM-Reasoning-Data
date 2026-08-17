对于 **Rollout, Search, and Test-Time Trace Data**，ThinkBooster 是把推理过程而不只是提交答案作为分析单位的实用参考。受控研究可以固定 prompt、模型快照、解码参数、最终 grader 和规范化预算，再比较离线候选选择、投票、online pruning、续写与置信度引导解码。共同接口减少工程差异，而轨迹仍必须保留足够细节，以识别各策略剩余的访问或成本优势。

具体用途包括：

- 为 Best-of-N、self-consistency、beam search、MUR、DeepConf、extended thinking、phi-decoding 或 uncertainty CoT 生成匹配候选池；
- 比较 PRM、confidence 与 LLM-critic selector，同时不把它们的分数误当成终点正确性；
- 通过 timeline 与 trajectory tree 调试选中路径在何处生成、重新评分、保留或剪枝；
- 在样本、步骤、token、理论 FLOPs、wall-clock time 与 evaluator 成本匹配时做归因，而不是只报告一种预算代理；
- 审计 PRM 领域偏移、步骤切分敏感性、选择错误，以及 scorer 排名与可执行结果的不一致；
- 构建官方仓库未提供的论文运行 artifact release。

最低可复用运行记录应包含不可变任务/来源 ID；精确 prompt 与可选 gold answer；模型、provider、package、代码提交及依赖版本；解码设置与随机 seed；strategy/scorer 配置；预算单位、上限与实际用量；每个候选或部分路径；步骤边界及抽取方法；scorer 输入、输出、方向、聚合与窗口；带索引的保留/剪枝/选择决定；抽取与原始最终答案；grader 版本与 payload；token、TFLOP、延迟、硬件及成本计量；以及输出许可证/来源字段。被拒或剪枝路径应作为一等记录保留。

若用户把解析后 Hydra snapshot、本地输出、W&B 记录、debugger event 与完整候选池连同稳定 hash 一起导出，工具包可以支持更强公共发布。复现应固定审计代码或 package 版本，冻结移动依赖，记录 logprobs、hidden states 与 prefill 等 backend 能力，并说明对未解决 ReProbe 路径的任何替代。Benchmark mirror 应绑定到上游 snapshot 与权利记录，而不能依赖仓库 MIT 许可证。

这些轨迹未来可以研究用于成功路径 SFT、偏好对、价值学习、reward modeling 或 RLVR，但论文既没有构造，也没有验证这些训练用途。它们是下游研究可能性，不是受证据支持的元数据标签。证据支持的用途仍是 test-time compute、evaluation 与 audit。

适当的复用判断是：**强工具包与捕获 schema 参考；有条件复现实验；无法直接复用论文运行轨迹**。两个 Claude demo cache 是有用的 schema 示例，但规模过小且设置不匹配，不能替代实验语料。
