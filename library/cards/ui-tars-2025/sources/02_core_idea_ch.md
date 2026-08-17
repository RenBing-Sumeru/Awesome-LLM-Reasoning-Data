核心对象是一条 state-action 记录：任务指令、截图与交互历史、可选 thought、归一化 GUI action、下一状态，以及质量/纠错反馈。统一动作词表覆盖桌面与移动端，包括 Click、Drag、Scroll、Type、Wait、Finished、CallUser、hotkey、双击/右击、LongPress 和导航键。

UI-TARS 把离线感知/示范构造与在线 VM 飞轮结合起来。合成 thought 和按动作正确性选择强化推理数据；人类 first-error 标签、纠正动作与恢复 continuation 形成 reflection SFT target 和 corrected-versus-erroneous DPO pair。该契约是混合的，因为 heuristic、VLM 分数、人类、动作匹配和环境成功观察的是不同质量概念。
