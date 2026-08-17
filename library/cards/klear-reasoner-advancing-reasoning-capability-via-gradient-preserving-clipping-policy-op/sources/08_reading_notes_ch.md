1. **一句话定位：** Klear-Reasoner 用 MathSub-30K 困难题和 GPPO 共同提高 RLVR 对负轨迹的利用。

2. **方法抓手：** 精选难题、教师长 CoT SFT、答案奖励 RL，再让越界 token 保留衰减梯度。

3. **数据抓手：** MathSub-30K 是 prompt/answer 数据，不包含复现全部模型所需的所有 rollout 与优化状态。

4. **证据锚点：** AIME24 90.5%、AIME25 83.2%、LCB V5/V6 66.0/58.1；归因需依赖消融。

5. **复用决定：** 适合困难数据和负样本研究；使用前检查 verifier 噪声、梯度稳定与教师轨迹。
