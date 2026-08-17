1. 可复用对象是 7,139 条静态 SFT 轨迹，而不是 Python 环境本身。
2. 每条轨迹都暴露思考、可执行 action、observation 或 traceback、修订过程与最终答案。
3. 原任务指标确认是否成功，附加启发式规则再删除格式错误、全程报错和未作答的 episode。
4. 最清晰的证据是 Mistral 7B 的 MINT 域外成功率从 9.7 升到 32.4，M3ToolEval 从 0.0 升到 12.2。
5. 复用前应审计上游许可、域内/域外重叠、teacher artifact 与 sandbox 边界。
