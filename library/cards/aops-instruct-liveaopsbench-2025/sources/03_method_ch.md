输入是带首帖时间戳和有序用户帖子的完整 AoPS topic。原始采集含 1,076,712 个 topic。Qwen2.5-14B 用 few-shot 二分类提示判断首帖，删除 598,375 个 topic 后留下 478,337 个数学问题 topic。随后，Llama-3.1-70B 阅读带编号的对话，返回首帖问题以及每个答案用户的身份与帖子编号；仓库中的 sanity check 会确认返回用户与被选帖子一致。Qwen2.5-72B 接收问题和原始答案，只被允许形式化给定解答，不能增加信息。针对已列出评测集做精确 10-gram 匹配后得到 652K 条 QA，其中 647,255 条早于 2024 年 1 月（论文 §3.1、附录 G；官方仓库 `parse_aops.py`）。

对 LiveAoPSBench-0824，时间窗口最初包含 14,158 条 QA。针对 MATH 与 GSM8K 训练集做 8-gram 匹配后删除 664 条；排除证明题和没有 boxed solution 的样本后，剩下 7,173 条 QA，覆盖 5,416 道唯一题目。Llama 与 Qwen 独立重写的最终答案再接受一致性检查，1,553 道不一致题被删除，最终得到 3,863 道。相同流程在 2023 年数据上得到 5,216 道回顾性 split；后续完整 2024 年发布增长到 5,328 行（论文附录 A.1 与 B.1）。

监督信号附着在完整答案上。SFT 时，问题作为 instruction，Qwen 重写解答作为 response，并套用各模型的 chat template。论文对 DeepSeekMath-7B-Instruct、Mathstral-7B、Llama-3.2-3B-Instruct 与 Llama-3.2-1B-Instruct 训练三轮，数据分别是完整 AoPS-Instruct、Numina 或两者混合；随后在 LiveAoPSBench、MATH、OlympiadBench 中 675 道文本且有最终答案的子集，以及 4,428 道 Omni-MATH 上评测。它没有构造步骤标签、process reward 或 RLVR 目标。optimizer、batch size、learning rate、随机种子和精确模型 revision 均未披露。

本次检查的公开 benchmark 记录包含 `question`、月粒度 `post_time`、重写 `solution`、`answer` 与 `idx`。第三方 AoPS-Instruct 默认记录则是两条 `messages`。这两个默认模型就绪视图都没有暴露抽取提示中描述的内部 topic ID、答案帖子编号或规范来源 URL。第三方 `2024_not_decontaminated` 配置保留原始/重写字段和哈希用户元数据，但它并不是 2024 年前、已去污染的训练集。

复现至少要固定论文版本、仓库 commit `56f6bc1e670170e301f1c9ebc172124defd21e90`、两个 HF revision、爬取 cutoff、模型 checkpoint、提示词、解码、重试策略、重叠清单、答案规范化代码和输出 manifest。目前的缺口必须显式处理：Figure 2 把 QA 抽取标为 Qwen 32B，而正文与 `parse_aops.py` 指向 Llama-3.1-70B；论文用 Qwen2.5-14B 做 topic 分类，而当前 `classify_aops.py` 默认使用 Llama-3.1-8B；仓库树中也不存在 README 调用的 `scripts/crawl_raw.sh` 和 `scripts/reproduce.sh`。
