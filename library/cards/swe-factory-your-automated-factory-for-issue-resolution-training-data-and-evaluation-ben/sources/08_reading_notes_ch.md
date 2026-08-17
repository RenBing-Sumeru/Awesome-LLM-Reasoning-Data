1. **一句话定位：** SWE-Factory 自动完成环境、退出码判分和 F2P 验证，并发布 2,809 条 Gym 任务。
2. **方法抓手：** 四 agent SWE-Builder、environment memory、标准 exit code、base/gold 双执行。
3. **数据抓手：** 每例含 issue、patch、容器、命令、F2P/P2P 和日志，可直接提供 RLVR reward。
4. **证据锚点：** 269 个有效实例成本 0.045 美元/条；F2P precision/recall 为 0.92/1.00。
5. **复用决定：** 适合低成本扩展 SWE 数据；先检查“退出 0 但未真正运行测试”的假阳性。
