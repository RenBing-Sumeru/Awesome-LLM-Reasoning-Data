对 Data Construction and Open Release Recipes track 而言，这篇论文完整展示了如何把一个持续演化的社区来源转成两种不同的 reasoning-data 产品。受控复现可以固定爬取与抽取阶段，只比较训练筛选（10-gram 去污染、允许证明题）和评测筛选（时间窗口、8-gram 过滤、明确 boxed answer、双重写与答案一致性）。这样，source、behavior、feedback、selection 与 audit 可以成为彼此分离的实验变量。

可复用训练记录应保留稳定 topic ID、规范 thread URL、首帖 ID 与时间戳、被选答案帖 ID、隐私保护的贡献者引用、原始问题、原始答案、重写解答、模型与提示词 revision、解码/重试设置、每项过滤决策，以及源帖编辑/删除状态。模型就绪视图可以省略敏感字段，但发布维护者仍需保存受保护的 lineage table，用于纠错、署名和 takedown。许可证标签也应绑定到每种来源，而不是从代码许可证推断。

可复用 live benchmark 应把不可变 snapshot ID 与 HF commit 绑定到精确首尾发帖日期、来源 ID、重叠清单、答案规范化代码、重写模型 revision、被拒分歧、人工审计样本和评分代码版本。评测者应报告被测模型 checkpoint、已知预训练/后训练 cutoff、评测日期，以及该 benchmark 快照在训练时是否已经公开。2023 回顾性 split、LiveAoPSBench-0824 与完整 2024 发布必须分别命名。

论文还支持具体审计实验：在分层 topic 样本上重跑抽取并比较被选帖子 ID；用符号工具和专家过程检查比较 Qwen/Llama 重写；测量文本、数值与 SymPy 比较的假接受/假拒绝；测试语义重叠而不只做 n-gram 匹配；并发布逐阶段计数及已接受/被拒 manifest。这些研究会直接评估反馈与筛选契约，而不是用下游准确率替代轨迹正确性。

复用等级：当前适合作为构造、审计和复现参考。固定 revision 的 LiveAoPSBench 在检查使用条款与模型 cutoff 后，可谨慎用于评测。链接的 AoPS-Instruct 文件在获得作者维护的等价性证明、来源级 provenance、权利/署名审查和不可变 manifest 前，不应直接用于训练。论文只支持已演示的 `sft` 训练用途，不支持扩张为 RLVR、reward model 或 process supervision。
