1. **安全证书 agent 评测：** 使用 100 个系统比较不同 LLM、RAG 和协作策略，最终只接受 SMT 通过的 certificate。

2. **过程数据构建：** 保存失败候选、solver 反例和修正后的成功函数，形成 verifier-grounded reasoning/repair trajectories。

3. **新控制领域迁移：** 将本地动力学与 safety sets 编码为相同接口；任何部署结论都需验证模型误差和鲁棒 barrier 条件。
