论文报告了对当时中英文导向 LLM 的综合评测，并指出原始实验中只有 GPT-4 的平均准确率超过 60%。官方仓库说明 C-Eval 包含 52 个学科的 13,948 道多选题，Hugging Face 数据集现在也公开了 benchmark 记录。

行级证据是题目记录和答案键；决定性检查是模型输出解析后是否精确匹配选项。aggregate accuracy 只有在相同 split、prompt、解析规则和 release 版本下才可审计。证据边界主要是污染：题目公开以及后来的完整测试集释放，使得 post-release 模型比较必须说明训练 cutoff 和数据暴露情况。
