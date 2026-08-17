1. **一句话定位：** CodeContests-O 用正确/错误程序反馈反复优化测试，把 11,683 道竞赛题变成更可靠的执行奖励资源。

2. **方法抓手：** 关键循环是生成器—执行—误判报告—search-and-replace 修正，停止条件由 TPR/TNR 与最大轮数决定。

3. **数据抓手：** 每题保存最终测试、generator、checker、commands 和逐轮 results；平均 40.19 个测试，约 325GB。

4. **证据锚点：** 89.37% TPR、90.89% TNR；Qwen2.5-7B 的 LiveCodeBench Pass@1 从 27.10% 到 34.57%。

5. **复用决定：** 适合代码 RL 与 verifier 训练；复用前应加入目标模型错误程序，检查未知故障上的区分度。
