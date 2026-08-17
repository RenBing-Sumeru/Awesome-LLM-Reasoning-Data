发布的训练对象包含 9,390 条轨迹：第一阶段为 1,128 条合成模仿 episode、4,636 张图像；第二阶段为 6,246 条通过筛选的自探索 episode、约 45.8K 张图像；第三阶段为 2,016 条反思/纠正 episode、约 13.8K 张图像。论文还分别报告约 64K 张图像、8M 个 thought token，以及约 90K 次五类思考模式出现：situation analysis、task planning、spatial reasoning、self-reflection 和 double verification。约 90K 不是独立样本数。

每条样本都是多轮 Observation-Thought-Action episode。user 轮提供自我中心图像与交互反馈，assistant 轮输出推理和一个离散高层动作。原始格式还包含任务类/子任务、场景、指令模板及变体、有序关键动作、对象 ID 与类型、逐动作奖励、总奖励、轨迹字符串和图像路径。dialogue 文件只是把同一批 9,390 条轨迹转换成训练消息，因此两种格式不能相加计数。

环境为 AI2-THOR：训练覆盖 107 个场景、约 2,100 个对象和约 2,600 个容器；动作集合包含观察、移动/导航、拾取、放置、开关容器、切换设备和终止。这样的状态—动作上下文比自由文本思维链更丰富，但缺少随机种子和不可变 build hash，仍不足以保证确定性回放。
