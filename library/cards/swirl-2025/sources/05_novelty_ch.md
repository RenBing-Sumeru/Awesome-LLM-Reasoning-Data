最接近的比较对象不是 benchmark，而是多类训练 recipe。STaR、RFT 与 ReST 式方法生成或复用模型输出，并通常选择成功结果做监督式改进；DQO 与 OREO 则处理离线多步 RL，包括面向 value 的机制。论文把 SWiRL 同时置于这两类工作之间比较。（论文 §3，pp.5–7）

真正改变的是轨迹数据与优化之间的接口：完整工具使用 episode 先作为整体被筛选，再序列化为每个动作一条、相互重叠的前缀记录；generative reward model 根据该前缀给动作评分，固定记录进入无需单独 value network 的离线 policy-gradient 训练。stage-1 过程筛选可在所有动作被判为合理时保留最终答案错误的轨迹，而 stage-2 reward 不使用 golden answer。这把过程质量、结果正确性与优化反馈分成三个层次，而不是压缩成一个标签。（论文 §2；Figures 1–2）

对 reasoning data 研究而言，其方向价值在于明确改变了监督边界，从而可以逐项审计前缀重复、长轨迹加权、存储式环境 observation、过程 false positive，以及错误结果对 step-wise RL 究竟有益还是有害。与 Appendix C 的对比还表明，同一轨迹进入 SFT 或 RL 时，最合适的筛选器并不相同。（论文 §4.2；Appendix C）

不属于新贡献的组件包括合成自生成、搜索/计算器工具调用、LLM judge、依据 golden answer 的结果筛选、SFT 与 policy-gradient 优化。报告的数据规模和 benchmark 准确率也不会把隐藏轨迹变成数据发布。只有在官方记录、筛选与 reward 输出、环境版本、目标配置、lineage 和许可证齐备后，该 recipe 才可能成为可复用训练工件。
