- 阅读第 3 节与表 1，核对四阶段训练顺序、各阶段的数据继承关系和已披露的训练超参数，并把四个主训练阶段与下游 NAVSIM IL+DiffGRPO 规划器实验分开。
- 精确匹配、IoU、点是否落在掩码内与格式检查都是标签层级奖励，不是物理或驾驶安全验证。
- 不要从上游数据集统计推断 MiMo 的实际入选规模；入选数量、混合比例、CoT 总量、轨迹与采样展开数量均未披露。
- 阅读第 4 节与表 6，区分 NAVSIM 分支中的模仿学习、IL+DiffGRPO 结果与主训练流程；NAVSIM 与专有轨迹证据应解释为离线/开环证据，真实世界机器人图只属于定性可视化。
- 对照附录和官方评测套件检查 LingoQA 评判器依赖；默认 checkpoint 路径 `/path/to/your/Lingo-Judge-safetensors` 已核实为官方评测代码中的占位路径，而非本卡模板残留或可用模型地址。LingoQA 复现仍需要缺失的评判器 checkpoint，7B 品牌与 8B 元数据之间的冲突也尚未解决。

相关卡片：`mimo-vl-2025`、`mimo-reasoning-pretraining-posttraining-2025`、`gemini-robotics-physical-world-2025`。
