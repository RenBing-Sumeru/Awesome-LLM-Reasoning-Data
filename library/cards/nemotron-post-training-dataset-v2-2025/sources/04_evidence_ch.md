发布级证据精确且直接对应数据对象。官方数据卡报告：math 239,467 条、code 175,000 条、STEM 355,000 条、chat 627,720 条、日语 975,202 条、德语 1,015,314 条、意大利语 1,016,503 条、西班牙语 935,704 条、法语 1,001,504 条，九项合计 6,341,414。该页还标明版本 2.0、发布日期 2025 年 8 月 20 日、Parquet 格式、SFT 配置、联系信息门控和仓库级 CC-BY-4.0 标签。

Generator 账本不是逐条记录账本：DeepSeek-R1-0528 对应 5,713,694 个样本，Qwen2.5-14B-Instruct 为 3,928,913，Qwen3-30B-A3B 为 627,720，Qwen2.5-32B-Instruct-AWQ 为 1,015,314，Qwen3-235B-A22B 为 627,720。数据卡明确提醒，一个记录可能由多个模型共同生成。因此，这些数不能相加为数据集规模，也不能用于推断每条记录的唯一 teacher。

关联报告给出了另一套统计口径：约 800 亿个 SFT prompt-response token；表 7 分别列出 1.5M math、1.1M coding、2.0M science、400K tool-calling、1.5M conversational、2K safety 和 5.0M multilingual 样本（第 3.1 节，PDF 第 13-14 页）。这些数字描述模型的 SFT 阶段，而不是本次 634 万条发布的逐行 manifest；官方没有提供二者的对齐表。

模型行为方面，表 8 报告 12B 对齐 checkpoint 在 AIME-2024、AIME-2025、MATH-500、GPQA-Diamond、LiveCodeBench、IFEval、BFCL v3、RULER@128k 和 ArenaHard 上分别为 85.42、76.25、97.75、64.48、70.79、89.81、66.98、83.36 和 74。评测对 AIME 平均 16 次，对 MATH-500/GPQA/LiveCodeBench/IFEval 平均 4 次，其余所列 benchmark 各运行 1 次（第 3.3 节，PDF 第 16 页）。这些分数属于经过多种数据和优化阶段训练的 checkpoint，**不能**隔离本发布的作用，也不能证明逐条正确性、来源、去污染、许可或 verifier 质量。

已确认的官方产物中没有独立复现、逐条 verifier 审计、拒绝率表或不可变文件 checksum 账本。因此，artifact 存在和模型表现是比 artifact 完整性或数据质量更强、也更有限的主张。
