正确性只是在该任务 scorer 下的局部正确性。由于任务高度异构，aggregate score 混合了完全不同的能力、数据来源和评分函数。公开仓库任务可能被记忆；部分任务可能有歧义标签、脆弱 regex scorer，或元数据没有捕捉的领域假设。除非固定仓库 commit、任务子集、prompt 政策和模型版本，否则不应把它读成单一推理能力指标或稳定 live leaderboard。
