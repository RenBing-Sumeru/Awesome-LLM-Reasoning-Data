1. **一句话定位：** R2E-Gym 用 commit、测试生成和回译构造 8K+ 可执行环境，并以混合 verifier 将开放 SWE agent 的 Best@N 提升到 51%。

2. **方法抓手：** 提交前后验证、生成测试、issue back-translation、专家轨迹 SFT 和执行/非执行双 verifier 是核心。

3. **数据抓手：** 论文与公开版本有 8.7K、7,478、4,578 等不同口径，必须记录完整集、公开集和去污染集。

4. **证据锚点：** 32B Pass@1 为 34.4%；单一 verifier 约 42–43% 饱和，混合 Best@26 达 51%。

5. **复用决定：** 适合开放 SWE 训练和候选选择；最大风险是有毒测试、learned bias 与 commit 重合，需独立验证和 lineage 审计。
