官方论文与仓库说明了“选择后改写”的转换、硬/软约束划分、curriculum 输入和 RL 集成。官方 HIR-16K 公开 prompt、criteria、checker metadata、source 与 ID，并声明 Apache-2.0。本卡片记录时，Hugging Face viewer 报告 schema cast 失败，因此仓库文件存在不能等同于 viewer 正常或 schema 已完整审计。

论文报告多 backbone 比较，以及 selection、replay 与 curriculum 组件消融。这些结果支持方法在所测模型/评测设置中的效用，却不能证明每条原子 criterion 都正确、学习型 judge 已校准、硬 checker 足够稳健或公开 prompt 混合无污染。

已核查官方产物没有公开完整 rollout group、生成回答的逐约束决定、被拒 replay 候选、在线改写样本、entropy/选择分数或 checkpoint 对应奖励日志，而这些正是审计“失败转成功”转换所需的记录。
