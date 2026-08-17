MobileBench-OL是发表于*Findings of the Association for Computational Linguistics: ACL 2026*的真实设备移动GUI评测基准。官方论文、DOI、arXiv条目和Xiaomi Research仓库均已核实。它处理的问题比泛化“手机自动化”更具体：当任务包含长时执行、陌生界面、自主探索及随机真实环境干扰时，智能体能否完成中文应用操作，同时由自动评测器和重置流程保持不同试验可比较？

论文报告80款应用上的1,080个评测项，分为Base 310、Long-Tail 340、Long-Horizon 60、GUI-Reasoning 60及Noise-Robust 310。Noise-Robust以Base任务为seed，因此这些数字表示770个独立任务规格外加310个由Base派生的噪声评测项，而不是1,080个互不重复的prompt。Long-Horizon任务至少需要20个golden step；GUI-Reasoning难度则由图标发现、隐藏功能和层级导航衡量，而非按步数划分（论文第3.2节、表4）。

一条已发布任务记录包含task identifier、自然语言goal、应用主页信息、人工golden-step数、key node或规则材料，以及可选reset字段。执行后，它形成由截图、XML界面状态、规范化动作、response、终止原因、规则匹配和成功标签组成的完整episode。因此，主要数据对象是评测任务/环境/verifier规格，不是论文智能体轨迹的冻结语料。

本工作属于`environment_agent_trajectory_data`，因为结果取决于实时设备状态、应用/网络行为、action-observation loop、环境谓词及状态重置。它没有建立训练recipe、真实设备安全部署结论或跨应用推理能力；`training_use`仅为evaluation，作者也明确把复杂cross-app任务列为缺失项。

本Card通过primary source把任务规模、episode字段、反馈规则、报告分数、发布内容、许可证和回放风险连接起来，达到L4采集深度。最关键边界是：代码与任务/规则CSV已经公开，但完整成功/失败验证轨迹和实验轨迹、论文承诺的APK包、账户fixture及不可变设备snapshot均未在官方发布中核实。
