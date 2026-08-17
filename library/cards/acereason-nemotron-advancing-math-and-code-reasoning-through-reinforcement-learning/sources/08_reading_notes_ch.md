1. **一句话定位：** AceReason-Nemotron 用约 49K 可规则验证数学题和执行式代码任务研究顺序跨域 RL。

2. **方法抓手：** 先严格过滤数学提示并用答案 reward 强化，再以代码执行反馈继续训练。

3. **数据抓手：** AceReason-Math 来源于 NuminaMath 与 DeepScaler-Preview，约 49K，CC BY 4.0。

4. **证据锚点：** 数学 RL 同时提升 AIME25 与 LiveCodeBench，最终 14B 在 AIME24/25 为 78.6/67.4。

5. **复用决定：** 适合数学—代码顺序 RLVR；使用前检查答案 parser、测试覆盖和受控训练预算。
