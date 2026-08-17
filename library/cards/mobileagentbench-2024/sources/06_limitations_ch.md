正确性只和每个任务 validator 及其观察到的 emulator 状态一样强。success label 表示 validator 在当前配置下检测到目标状态，不证明所有合理用户意图都满足，也不证明执行路径高效或安全。

该 benchmark 容易受运行时漂移影响：Android 镜像、应用版本、账号状态、本地文件、seed data、UI 布局变化、依赖版本和坐标动作行为都可能改变结果。visual-only agent 和 accessibility-assisted agent 看到的 observation channel 不同，若不记录接口配置，分数不应直接比较。

官方公开材料没有把所有复用问题都写死。数据 license、完整 split 规则、hidden-test 政策、是否依赖 live service，都应在使用的精确仓库 release 中核验；无法核验时保持未知。公开任务可能污染训练数据，validator 也可能漏掉脚本检查之外的语义错误。
