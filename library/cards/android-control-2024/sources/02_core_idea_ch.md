该工作的贡献是双粒度轨迹语料与受控规模研究：人类在物理手机上执行 Android 任务，同时记录任务级目标和每个动作前即时输入的指令；随后，同一批 episode 被转换为仅含高层指令的 HL 状态—动作样本，以及同时包含低层和高层指令的 LL 状态—动作样本（论文第 3.1 节，第 4–5 页；第 4.2 节，第 6–7 页）。

一条发布的 episode 包含 `episode_id`、`goal`、PNG `screenshots`、序列化 `accessibility_trees`、截图尺寸、JSON `actions` 与 `step_instructions`。动作位于相邻截图之间，因此动作数比观测数少一个；低层指令与动作一一对齐，当一条指令需要多个动作时可以重复（附录 B.2，第 14–15 页；官方仓库 README 的 “Dataset format”）。原生动作空间包括 `click`、`long_press`、`input_text`、`scroll`、`navigate_home`、`navigate_back`、`open_app` 和 `wait`（论文表 2，第 5 页）。

其反馈契约是程序化但狭窄的。离线 step accuracy 将预测的下一动作及参数与人类参考动作比较，仅放宽三类等价：坐标落在目标元素边界内、`navigate_back` 与点击屏幕 Back 元素等价、`open_app` 与点击匹配 app 名称的文本等价（论文第 4.2 节，第 7 页；附录 D.3，第 20–21 页）。它能观察与单条人类下一动作的一致性，却不能观察在线任务完成、延迟副作用、错误后的恢复或许多其他有效路径。采集时的 successful、infeasible、failed 是人工判断；SeqIO 使用的 `terminate` 动作则是训练时插入项，不是发布的可执行 terminal predicate（论文第 3.1 节，第 5 页；附录 C.2 与 D.1）。

相较论文表 1 总结的 UI 控制数据集，包括作为 zero-shot 评测基线来源的 Android in the Wild，AndroidControl 的区别在于跨大量 app 联合提供人类高层与低层指令，并明确分析 IDD、app-unseen、task-unseen 和 category-unseen 划分。它代表的是分布偏移下的监督轨迹规模研究，而不是 RL reward 设计或在线环境构建。
