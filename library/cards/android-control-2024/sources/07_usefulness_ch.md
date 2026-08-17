对指定的 `environment_agent_trajectory_data` 方向而言，AndroidControl 可作为离线状态—动作语料：构建者可用高层目标训练 accessibility-tree 智能体，与低层子目标条件进行比较，并审计动作历史和 episode 长度如何造成误差累积。复用时应保留完整 episode 容器、原始目标、每步指令、screenshot、accessibility tree、动作参数与 split 归属，不能在丢失 lineage 的情况下只保留扁平样本。

对 `data_construction_open_release_recipes` 而言，论文给出一种具体设计：以 LLM 生成的任务覆盖种子结合人类执行，配对两种指令粒度，明确划分 app/task/category shift，并进行规模扫描。忠实复现还应保留原发布缺失的证据，包括功能/persona prompt 版本、标注者、设备与 app 版本、原始 status、拒绝原因、预处理日志，以及将 shard、代码和论文版本绑定在一起的 manifest。

离线匹配规则既是有用的评测 baseline，也是审计对象。研究者可将严格单参考准确率与在线完成、多参考路径、考虑恢复的指标或状态变化 verifier 比较；困难的 `terminate` 判断，以及第一方/第三方 app 差距，提供了具体 failure slice。13,604/13,603 的数量差异也能直接检验数据管线究竟以论文文字还是可执行 split manifest 为准。

复用等级：**不受限制的训练复用在核验完成前受阻；固定发布快照并遵守官方访问条款后，可用于评测与审计参考**。互相矛盾的许可证表述必须在训练或再分发前澄清；若不重建环境，该语料也不支持可回放的在线评测。论文报告的 benchmark 提升可以说明这些实验值得开展，但不能认证轨迹质量。
