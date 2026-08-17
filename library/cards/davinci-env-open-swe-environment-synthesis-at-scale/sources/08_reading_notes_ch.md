1. **一句话定位：** daVinci-Env 将 12.8K+ 仓库转为 45,320 个环境，并从约 9K 环境采集 13K 轨迹。
2. **方法抓手：** 多 agent 探索仓库、生成 Docker/eval script、执行修复、质量筛选、再运行 coding agent。
3. **数据抓手：** OpenSWE 同时开放环境构建资产、测试反馈和交互轨迹，而非只有 issue—patch。
4. **证据锚点：** OpenSWE-32B/72B 在 SWE-bench Verified 为 62.4%/66.0%，但配方变量未完全解耦。
5. **复用决定：** 适合大规模 agent 数据；最大约束是 147 万美元级成本、Python 偏差和逐仓库许可。
