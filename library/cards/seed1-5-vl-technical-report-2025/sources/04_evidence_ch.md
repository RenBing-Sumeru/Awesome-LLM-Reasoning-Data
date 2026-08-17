报告提供了定量构造信息、优化器设置、计算量和明确的反馈分工：预训练消耗按 H800 归一化的 130 万 GPU 小时，RL 为 6 万小时，reward model 为 2.4 万小时。报告还声称在 60 个公开 benchmark 中有 38 个达到 SOTA，并给出 MMMU 77.9，以及公开、内部、GUI、视频和游戏评测。这些数字支持“所述系统具有相应评测行为和流水线规模”，但不能证明隐藏数据授权正确、无污染、完整或可复现。

公开工件的范围更窄。官方 GitHub 仓库提供技术报告、API cookbook、demo、示例，以及采用 Apache-2.0 的仓库代码；官方 Hugging Face 工件是 API 驱动的 Space，发布页指向火山引擎模型 ID doubao-1-5-thinking-vision-pro-250428。核验到的官方工件没有提供 Seed1.5-VL 权重文件、权重模型卡、训练语料、SFT 或偏好记录、LongCoT 轨迹、reward-model 权重或 verifier 实现。示例代码的仓库许可不能转用于这些未发布资产。
