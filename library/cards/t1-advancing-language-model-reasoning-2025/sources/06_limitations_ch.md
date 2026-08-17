最终答案 reward 同时会产生 false positive 与 false negative：一条 completion 可能用无效推理碰巧得到正确标签；有效的等价表达也可能被未披露的 parser 拒绝。对重复、过长、混合语言或乱码回复施加 -1 的做法可以改善文中运行，但规则与 perplexity 阈值没有发布；离开作者设置后，它带来 verifier gaming 和不公平拒绝风险。（论文 §3.2；Table 3。）

合成 chain 也不是透明的过程标注。组成它的 attempts、critiques、verifier prompts、teacher identity 与 merge decision 均不可得，因而无法逐行审计隐含 teacher 习惯或错误 critique。选择规则丢弃简单题，并保留 16-sample pass rate 位于一个窄区间的题，但发布物没有保存所有被拒绝的尝试或筛选解释。这会以使用者无法量化的方式改变难度、文风和错误分布。

artifact 限制很实质。由于两个已发布文件的列不兼容，dataset viewer 报告 schema-cast error。检查到的 README 说 model weights 与 RL training data “coming soon”，但数据集 revision 又有 `rl-data.jsonl`；文件名不能决定究竟发布了什么。dataset license、上游权利、逐行 provenance、benchmark-overlap 分析、可执行训练代码和完整配置都是 unknown。因此，benchmark 提升不能被理解为发布质量或干净评估隔离的证明。
