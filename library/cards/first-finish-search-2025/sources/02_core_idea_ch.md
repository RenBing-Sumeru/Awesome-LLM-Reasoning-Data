FFS 启动 n 个独立随机解码，并返回最先发出 EOS 的轨迹；其余轨迹全部丢弃。在同步 FFS 中，一个模型副本以 lock-step 推进整个 batch，因此第一个 EOS 也对应最短生成长度。在异步 FFS 中，n 个任务独立运行，最先结束或达到最大长度的任务获胜，随后中断其他任务。论文把选择器写成负长度 reward，但这只是启发式目标，不是正确性证据。

选择循环中没有 reward model、judge、执行 verifier 或 majority vote。在线反馈只有终止事件，以及决定哪个轨迹先完成的系统时间或解码步。ground-truth exact match 只在事后评估中使用。最近的比较对象包括标准解码、budget forcing、beam search、majority voting/self-consistency，以及论文设置的 last-finish 对照。

它属于 Rollout, Search, and Test-Time Trace Data，因为选择依赖一组采样轨迹及其完成顺序。它也是一个警示案例：轨迹过滤器可在某些推理模型上提高 benchmark accuracy，同时引入很强的长度偏置。可复用记录必须保留获胜轨迹和被取消轨迹；只保留赢家会隐藏选择机制，也无法做反事实比较。
