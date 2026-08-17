论文和官方仓库支持下面这条流程重建。

1. **初始化搜索。** 现有 Mathlib4 定理定义初始 Lean 状态。精确种子定理列表、文件清单、排除规则和逐文件权重未发布。
2. **构建 tactic 模板。** 标准化 tactic 字符串：变量名替换为带编号占位符，假设替换为 `{hypothesis}`，无法识别的片段替换为 `{unknown}`。
3. **训练检索器。** 使用证明状态、正确 tactic 模板和随机错误模板，对 GPTNeo-350M 做对比学习。训练切分、随机种子、优化器、检查点和负采样细节未披露。
4. **检索并实例化动作。** 把所有模板嵌入 FAISS。每个状态检索 100 个最近模板，代入可用变量和假设，并把生成 tactic 上限设为 200。
5. **通过 LeanDojo 执行。** 在当前 Lean 状态应用每个候选 tactic。Lean 返回错误、后继状态或 `ProofFinished`。错误转移被丢弃；未见过的成功非终态进入图。
6. **广度优先探索。** 用优先队列实现 breadth-first search。每个种子定理最多搜索 30 分钟或尝试 200,000 次状态转移。生成运行使用 24 个 Ray 进程、同时处理最多 24 个定理，报告在整个 Mathlib4 上运行 28 天。
7. **选择证明记录。** 对所有距 `ProofFinished` 不超过八个 tactic 的状态，选择 tactic 数最少的路径；若长度相同，再按 tactic 字符串总长度决定。把状态作为定理、路径作为证明。
8. **压平发布。** Zenodo 的 tar.xz 中包含一个 `leannavigator_dataset.json`。每条公开记录都是两个字符串组成的 `[state, proof/tactic text]` 数组；图、种子 ID、前驱边、错误、可选成功路径和重放日志均被省略。
9. **准备 SFT。** 论文报告用 BPE tokenizer 训练 flan-t5-base 和 flan-t5-small 做证明预测。官方 notebook 会打乱数据、把多行目标截断到第一行，并进行未固定种子的随机 90/10 行级切分。当前 notebook 实际配置 `google/byt5-base`，因此不能视为论文 flan-t5 实验的精确可执行版本。

notebook 显示 Mathlib4 commit `27c6744e1c0e25d676be5eb252cd4b6d30c6acc7` 和 `leanprover/lean4:v4.9.0-rc2`。它们只是复现线索，不是发布级固定项：论文和 Zenodo 清单都没有把公开压缩包绑定到该 Mathlib/Lean/LeanDojo 环境。
