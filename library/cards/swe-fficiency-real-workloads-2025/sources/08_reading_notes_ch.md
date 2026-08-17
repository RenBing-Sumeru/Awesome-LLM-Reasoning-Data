1. **一句话定位：** SWE-fficiency 提供 498 个九仓库真实 workload，让 agent 自主定位并以相对专家 Speedup Ratio 评测优化。

2. **方法抓手：** PR 筛选、静态/coverage 定位、稳定 expert speedup 测量、正确性门控和 SR 聚合构成 pipeline。

3. **数据抓手：** 每题含完整仓库、workload、相关测试、专家 patch 与容器；任务集中于 Python 科学计算。

4. **证据锚点：** 论文中 11 个系统平均均低于 0.15× 专家；后续最佳榜单约 0.225×，仍有巨大差距。

5. **复用决定：** 适合 investigative performance engineering；最大风险是计时噪声和 workload 过拟合，必须固定硬件、重复测量和扩展测试。
