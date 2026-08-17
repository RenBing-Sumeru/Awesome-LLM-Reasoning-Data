MindLoom 把难度表示为一串原子知识与推理变换。学习得到的 retriever 提出与当前问题兼容的模式，相似度和稀缺度评分在语义匹配与避免过度使用常见模式之间取平衡；rollout judge 同时提供难度标签和正确 SFT 回答。Thought-mode 链与来源编号使生成路径可以检查。

Google Scholar 引用数：0（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MindLoom%3A+Composing+Thought+Modes+for+Frontier-Level+Reasoning+Data+Synthesis&author=Haiyang+Shen&hl=en）

开源数据：论文称已开源。名称：MindLoom 代码与数据发布。官方地址：https://github.com/EachSheep/MindLoom。规模：来自 16 个数据集的 58,526 道来源题、8,322 条逆向工程记录、11,433 条合成 rollout 和 9,230 条最终 SFT 样本。记录形式：来源编号、种子题目答案与解法、thought-mode 链、演化问题、rollout 回答、正确性标签，以及三消息 ms-swift SFT 转换；仓库具体文件应在下载时核对。DeepSeek V3.2 执行逆向工程、合成、rollout 与判断，Qwen3-Embedding-0.6B 支持检索。许可：未确认。预期用途：STEM 与数学 SFT。
