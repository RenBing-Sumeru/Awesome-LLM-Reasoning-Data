正确性只相对于作者验证流程和官方标签成立。模型答对表示它选中了 option 1 或 option 2 的 gold label，并不表示它真的用了题目预期的常识关系。

这个 benchmark 对 release 版本、split、标签可见性和评估入口很敏感。version 1.1 公开 train/dev 标签，但 `test.jsonl` 不含标签；test 需要通过 leaderboard 评估。论文里的计数和发布包里的计数有些地方不完全一致，因此复用旧分数时应引用具体发布包，而不是只写论文数字。

AFLite 是强审计步骤，但不是全覆盖 verifier。它针对特定 embedding、线性分类器和参数选择下可见的 shortcut，仍可能留下其他伪影、世界知识歧义、标注噪声、人口统计偏差和训练集污染风险。WinoGrande 不应被解读成通用常识能力证明，也不应把旧 benchmark 上的迁移提升直接等同于真实推理提升。
