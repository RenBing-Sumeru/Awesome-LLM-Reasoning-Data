表三在 Qwen2.5-7B 上的消融报告：完整方法的 StableToolBench 平均 SoPR 为 66.37，去掉监督微调为 58.52，去掉强化学习为 59.72。这说明该设置下两个阶段都有贡献，不能外推为所有接口或部署都必然改善。StableToolBench 与 TMDB 使用 GPT-4o 评审，ToolHop 则检查答案包含关系，需区分这些得分定义。
