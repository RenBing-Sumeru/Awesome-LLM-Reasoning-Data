输入：公开可用、带 tabular context 和 detailed solution 的 grade-level math problems。作者用 HTML tags 抽取 table context、question、适用时的 options、correct answer 和 solution；保存 screenshot 与 raw text，把 raw table 转成 flattened semi-structured text，并进一步转成可供 pandas 或 SQL-style table models 使用的 structured format。

构造流程：作者只保留 table necessary 的问题，shuffle multiple-choice options 以降低顺序偏置，移除 solutions 中的冗余信息，手工重写部分 solutions 增强可读性，并删除具有相同 table、question 和 answer text 的重复记录。质量控制还包括人工过滤那些不需要 table context 或不需要 numerical reasoning 就能回答的问题。

输出：38,431 个问题按 6:2:2 分为 23,059 train、7,686 development 和 7,686 test。数据包含 28,719 个 free-text questions、9,712 个 multiple-choice questions、6,153 个不同 answers 和 35,442 个不同 solutions。PromptPG 使用固定 BERT encoder 加 learned linear layer，从 20 个 candidate examples 中选择 2 个；reward 根据 GPT-3 answer 是否匹配 label 取 +1 或 -1。
