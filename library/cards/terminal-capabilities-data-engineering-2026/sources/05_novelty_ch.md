本文的贡献不只是又一个终端 benchmark 结果。Terminal-Task-Gen 把广覆盖的 prompt adaptation 与定向、可执行的 synthetic generation 放进同一构建流水线，并在同一学生模型族上研究数据过滤、混合顺序、context length 和 scale。episode 表示保留多轮 command、observation、correction 与 recovery behavior，而不是把一次尝试压缩成最终答案。

最关键的实验区别是显式比较 no-filter、按 completion 过滤和按 success 过滤的 SFT mixture。在所测设置中，丢弃 incomplete 与 unsuccessful 轨迹会去掉大量数据，且表现更差。由此，negative 和 partial behavior 被当作具体的数据工程变量，而非 rollout generation 中未报告的副产物。

开放 artifact 还形成了较可检查的 task specification、environment、verifier、conversation trace 与 trained checkpoint 边界。但这条边界并不完整：task archive 与 conversation rows 分开，outcome 没有规范化，seed-based stream 也未发布。因而真正有用的新意是构建流程与消融分析的组合，而不是宣称发布物提供了完整标注的失败或完全可复现的容器。
