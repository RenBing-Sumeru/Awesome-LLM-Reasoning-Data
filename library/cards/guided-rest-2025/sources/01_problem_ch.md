Guided-ReST 处理的是一个具体的数据构造问题：普通结果筛选式自训练很难让较弱策略产生足够多的成功轨迹，如何利用策略自身的失败与成功尝试来学习更有效的搜索行为？Stream of Search（SoS）先让模型学习由 generation、exploration、verification 和 backtracking 组成的线性化符号搜索轨迹；这类轨迹比只模仿最优路径更有利于搜索泛化，但可能把固定 token 预算浪费在无关分支上。ReST 只保留成功的自生成轨迹，却不会在当前策略失败时提供局部纠正。

官方来源是 NeurIPS 2025 Main Conference 论文，并有 arXiv v2、OpenReview 记录和官方实现。该工作属于 **Data Construction and Open Release Recipes**，因为其核心贡献是把带答案的任务、当前策略行为和特权最优产物转换为通过验证的 SFT 轨迹。它不是新 benchmark、人工偏好数据集、学习式奖励模型，也没有发布冻结语料。

论文研究两类记录。Countdown 记录以四个整数和目标数为输入，包含由合法算术状态与运算构成的语言化树搜索轨迹；代码自修复记录是多轮消息序列，依次包含完整推理与代码尝试、执行反馈、修改指令和下一次尝试。两种场景都由当前策略生成行为；最优 Countdown 路径或参考程序只对构造流程可见；候选是否能保留由程序化检查器决定。

必须区分三种数据视图。**特权构造视图**含最优子目标或参考代码；**训练视图**含被改写的 Countdown 轨迹，或把真实参考程序替换为论文所述 dummy marker 的代码 episode；**推理视图**看不到任何最优产物。当前 Card 达到已接受的 L4 边界，是因为论文、补充材料、会议元数据、机构、代码、许可证、采样设置、筛选脚本和 workflow state 均已核验；生成 buffer、checkpoint 与冻结数据发布仍不可用。
