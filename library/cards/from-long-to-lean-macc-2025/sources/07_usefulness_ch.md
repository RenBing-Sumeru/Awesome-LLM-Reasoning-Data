对于 **Rollout, Search, and Test-Time Trace Data**，MACC 是顺序 long2short 选择的紧凑案例。后续对照研究可以固定来源 prompt、原始轨迹生成器、compressor snapshot、答案暴露、tokenizer 和 SFT 配方，再改变最大轮次 \(T\)、停止规则、语义/正确性保障，或是否保留被拒绝回弹。这样就能把轨迹长度与修订深度变成显式构造变量，而不是未记录预处理。

具体用途包括：

- 实现论文中每轮一个候选的答案条件化改写链，并同单次、固定轮数和单轮多候选压缩比较；
- 将 token 长度回弹同需要最终答案一致、语义等价、证明步骤保留或校准 judge 一致的替代规则比较；
- 研究暴露最终答案如何改变 rationale 忠实性，以及隐藏标签后压缩轨迹是否仍然有用；
- 把表 5–6/算法 1 不一致用作 tokenizer 固定、停止日志、选中索引与渲染示例标签的复现审计；
- 在 API 调用、输入/输出 token、延迟、金钱成本和最终 SFT 计算匹配时评估 compressor 与轮次选择；
- 设计完整修订语料 schema，保留选中和被拒绝证据，而不是只发布 \(r^*\)。

可复用记录应包括不可变来源与 prompt ID、source split 与上游 revision、目标模型与 compressor snapshot、tokenizer revision、\(r_0\)、每个 \(r_i\)、父轮与轮次索引、最终答案暴露标志、prompt template revision、输入/输出 token 数、\(CR_i\)、任何 PPL/答案/语义/过程检查、回弹与停止原因、选中索引、排除/重试状态和最终 SFT serialization。被丢弃的更长轮应保留，因为它是 selector 的直接负面证据。

受支持的下游用途是 SFT：选中压缩 rationale 加答案，并混入部分原始轨迹。未来发布可能支持偏好学习、忠实性研究或 learned selector，但论文没有执行或验证这些 objective，不应将其加入 `training_use`。

适当的复用等级是：**强构造/审计参考；仅支持论文级复现；数据与实现复用受阻**。官方仓库只有 README，语料计数/schema/split 未知，API 设置与 \(T\) 未固定，生成数据权利未解决，附录选择也无法重建。复用者不应从 benchmark 标准规模推断计数，也不应从示例虚构缺失的修订链。

对本 track 而言，MACC 还是一份发布清单。可信 long-to-short package 需要全部原始、中间、选中和回弹/被拒绝轮；精确 tokenization 与停止决定；prompt/model/API 版本；数据 split 与去污染；SFT mixture manifest；成本；以及明确代码/数据许可证。汇总 accuracy 与平均长度不能替代这些谱系。
