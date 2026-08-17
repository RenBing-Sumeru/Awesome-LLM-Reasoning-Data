1. **评测：** 评测能够比较 target rendering 与 candidate rendering 的视觉 reward model。

2. **训练：** 为 chart/table/SVG 生成提供密集反馈，联合可执行正确性奖励进行 RL。

3. **迁移或部署：** 把结构化 discrepancy 用作自动 critique，驱动候选代码修订；成功标准需包含视觉指标与功能测试。
