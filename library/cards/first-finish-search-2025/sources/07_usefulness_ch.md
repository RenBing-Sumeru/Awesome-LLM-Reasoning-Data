在 Rollout, Search, and Test-Time Trace Data 方向中，FFS 是研究“无学习型 verifier 的选择器偏置”的紧凑案例。仿照它构建的轨迹数据集应保留每条采样 prefix、EOS 与取消事件、最终解析答案、总 token 与顺序 token、scheduler 模式和事后正确性；winner 标记必须与 correctness 分开。

这些记录可用于在相同预算下比较 first-finish、last-finish、majority vote 和 verifier-guided selection，分析长度能否作为正确性 proxy，并审计 API 调度是否改变被选输出。它们也可作为系统研究中的 censored-trajectory 数据。由于官方发布不包含这些记录，当前论文更适合作为构造与审计 recipe，而不是可复用轨迹来源。
