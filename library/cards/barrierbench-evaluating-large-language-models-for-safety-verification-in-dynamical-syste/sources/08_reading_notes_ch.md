1. **一句话定位：** 100 个动力系统 barrier certificate 任务，用 SMT 严格验证 LLM 生成安全证书。

2. **方法抓手：** LLM 提出模板，solver 返回证明或反例，agent 迭代修正形成 verifier loop。

3. **数据抓手：** 覆盖线性/非线性、离散/连续系统，并支持 barrier-controller co-synthesis。

4. **证据锚点：** 作者框架在该任务集上有效证书成功率超过 90%。

5. **复用决定：** 适合形式安全与过程反馈；复用前锁定 solver，并避免将形式模型保证直接外推现实系统。
