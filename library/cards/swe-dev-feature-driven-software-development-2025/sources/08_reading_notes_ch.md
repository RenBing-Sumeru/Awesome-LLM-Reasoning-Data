1. **一句话定位：** SWE-Dev 从已测试的 Python 功能反向生成 PRD 和不完整仓库，发布 14K 训练与 500 评测任务。

2. **方法抓手：** 环境验证、动态调用 tracing、遮蔽核心实现、测试前后检查和 PRD 生成决定任务质量。

3. **数据抓手：** 每条含 PRD、repo、gold code、开发者测试与环境；测试集按 250 easy/250 hard 人工检查。

4. **证据锚点：** Claude-3.7 hard Pass@3 仅 22.45%；7B SFT 的 hard 结果约由 6.68% 升至 18.89%。

5. **复用决定：** 适合 feature-driven agent SFT/RL；最大风险是逆向 PRD 与测试盲区，必须允许非 gold 正解并做全量回归。
