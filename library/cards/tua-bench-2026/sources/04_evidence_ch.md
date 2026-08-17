最强证据是 benchmark 验收具体 terminal artifact，而不是让 agent 自报完成。论文报告 120 个真实任务，跨五类任务，每题都有确定性 setup 和 execution-based scoring。

主结果中，最强被测 agent 是 Claude Code with Claude Opus 4.8、max reasoning effort，overall performance 为 65.8%，仍暴露 long-horizon planning、tool use、execution monitoring 和 error recovery 的明显缺口。这个数字只在论文任务 release、scorer script、runtime environment、模型版本和 reasoning-effort 设置下可解释。行级可信证据来自每题 verifier 对最终文件或状态的检查，而不是 aggregate success rate 本身。
