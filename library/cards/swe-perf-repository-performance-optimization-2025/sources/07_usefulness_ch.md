1. **性能 agent 评测：** 在固定硬件与容器上运行 agent，先验证功能，再多次测量性能；报告成功率、加速比、回归率和相对专家差距，并区分 oracle/realistic 输入。

2. **定位研究：** 使用 `patch_functions`、`test_functions` 和真实修改文件训练或评测 bottleneck retrieval，但最终必须以未破坏功能且稳定加速验收。

3. **双目标 reward：** 将正确性作为硬门槛，性能改善作为连续 reward；对超时、噪声和微小加速设置统计阈值。若研究要训练模型，应另行挖掘数据，不能在公开 test 上直接 SFT 或 RL。
