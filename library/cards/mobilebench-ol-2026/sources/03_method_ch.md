**输入。** 基准从12类80款带版本的中文应用与人工编写任务开始。表4包含Base 310、Long-Tail 340、Long-Horizon 60、GUI-Reasoning 60及Noise-Robust 310个评测项，最后一类复用Base任务。每次测试从对应应用主页开始；论文设备已安装应用并完成账户登录。

**构造。** annotator从零编写任务并在真实设备执行，得到golden trajectory和步数。领域专家根据task-trajectory pair编写成功条件；UI-TARS-1.5与annotator采样多种完成路径；Auto-Eval打标签；专家检查分歧并修改规则。论文报告每项任务至少有五个样本，但没有披露准确的人类/模型比例、总尝试数、被拒绝尝试或逐记录规则修订历史（论文第3.3节、图3）。

**交互。** 设备提供截图和XML UI hierarchy；智能体还会按其scaffold接收交互历史。不同模型动作被转换为统一空间：click、type、scroll、press home/back、wait、long press和finished。episode最大长度为人工golden step的三倍，每个动作后等待三秒，循环在完成信号或步数上限时停止（附录A.3-A.4、G.2）。

**噪声与重置。** Noise-Robust在每一步以20%概率注入repeat、unexecuted、delay或pop-up之一。每轮基准结束后，一个可靠智能体执行255项细粒度逆任务。reset分为task-level、app-level、无需reset或infeasible；infeasible情形通过放宽成功条件处理，而非完全恢复状态。准确噪声seed、账户/服务器fixture、reset retry政策与state-diff ledger均未披露。

**验证与输出。** 成功条件是针对GUI元素和关键动作的规范化XPath式合取规则。全部条件加Complete判为Success；满足条件但到达步数上限判为Overdue；条件未全部满足却输出Complete判为Early Termination；其他情形判为Failure。已发布harness写出task/success pair，以及含action、image、response、summary和success的逐任务`trajectory.json`；Sub-SR与Step Ratio分别补充部分进度和效率指标。

**发布与用途。** 官方仓库提供Python代码、config、evaluator模块及七个任务/reset CSV。数据采用CC BY-NC-SA 4.0，源码采用Apache-2.0。复现需要支持ADB/uiautomator2的物理Android设备及相应应用/账户。论文承诺提供80个APK，但未核实到官方APK bundle。由于没有train/dev/test split、冻结论文轨迹发布、semantic version或完整设备/账户/服务器snapshot，受证据支持的用途是evaluation，而非SFT或RL训练。
