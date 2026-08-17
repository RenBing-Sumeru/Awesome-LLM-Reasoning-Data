输入是众包写出的 twin-style 常识句、两个候选 referent、答案标签和 split 元数据。官方 release 的 JSONL 样本字段包括 `qID`、`sentence`、`option1`、`option2`、`answer`；version 1.1 还用单独的 `.lst` 文件保存 train/dev 标签。

流程如下：

1. 众包工人按 WSC 风格写成对句子，用 WikiHow 随机锚词和长度/词重叠约束控制主题和形式。
2. 三名独立验证者回答每道题，并检查是否只有一个明显合理选项、是否不能靠目标代词附近的局部上下文直接猜出答案。
3. 用一个在小子集上 fine-tune 的 RoBERTa 为通过验证的样本计算 embedding。
4. AFLite 在 embedding 上反复训练随机划分的线性分类器，并删除分类器高置信猜对的样本。
5. 发布包提供多种 train size、dev labels、无标签 test questions、sample submission 和 dev 评估脚本。

输出是 benchmark split、非 test split 的标签、隐藏 test 协议和 baseline 分数。验收器不是语义证明，而是和官方标签是否一致。复现实验必须固定 version 1.1、train subset、prompt 或 fine-tuning scaffold、prediction 文件列顺序，以及使用 dev 脚本 accuracy 还是 leaderboard test accuracy。
