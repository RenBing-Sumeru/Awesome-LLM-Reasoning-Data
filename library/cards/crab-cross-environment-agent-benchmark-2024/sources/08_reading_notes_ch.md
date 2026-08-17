读 CRAB 时先看 graph evaluator，再看 leaderboard。它评的是跨环境任务完成，不只是视觉 grounding 或移动端自动化。要分开 completion ratio、节点级 evaluator 结果、模型/脚手架通信设置。某个任务在单环境里简单，跨环境后可能因 handoff、状态迁移或 evaluator 设计变难。
