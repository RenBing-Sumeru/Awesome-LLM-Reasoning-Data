现有证据支持下列可重建流程，同时必须把 historical-release fact 与当前 reproduction command 分开。

1. **输入。** 从 GSM8K 和 MATH training split 开始。最终记录通过 `problem_source` 区分原始/增强来源，但公开 schema 不保留上游 seed ID 或 source revision。
2. **Solution augmentation。** 提示 Llama-3.1-405B-Instruct 为每个原始问题生成 OpenMath CoT。当前 Skills recipe 对每个 GSM8K item 请求 64 个 random-seed solution，对每个 MATH item 请求 512 个。论文 post-processing 删除含多个 `\boxed` 的输出，去掉 “My Solution:”，在第一句含 `\boxed` 的句子处截断，修复/删除规定的算术模式，并拒绝超过 1024 个 Llama-3.1 token 或短于 200 个字符的 solution（附录 A.2）。
3. **Question augmentation。** 使用来源示例构造 five-shot prompt 来生成相关问题。当前 recipe 对每个 GSM8K seed 请求 10 个新题，对每个 MATH seed 请求 80 个。先做 syntax filtering，再在生成解答前对新题去污染（第 3 节；附录 D.2）。
4. **去污染。** 将每个合成问题与 GSM8K、MATH、AMC 2023 和 AIME 2024 test question 比较。使用 `multi-qa-MiniLM-L6-cos-v1` 检索 top-5 neighbor，构造两个 pair order，再让 Llama-3.1-405B-Instruct 判断每一对是否为 paraphrase。十个 judgment 中任意一个为 positive 就删除合成问题。约 569K 个 MATH-derived candidate 中删除 50K，剩余约 519K（第 3.1 节；附录 C.2）。
5. **增强问题的解答。** 以 temperature 0.7 为每个新题采样 32 个 Llama-3.1-405B-Instruct solution。抽取最终答案、忽略 null extraction，并把剩余表面形式中最常见者设为 `expected_answer`。作者测试 minimum-vote threshold 0、8、16、24，并选择 **0**，因此没有固定最低同意要求（附录 C.1，表 9）。
6. **答案/格式保留。** 原始问题 solution 与来源 ground truth 比对；增强问题 solution 使用构造出的 proxy answer。流程应用格式和长度过滤，但发布记录不暴露 parser output、vote count、candidate set、filter decision 或 rejection reason。
7. **打包。** 合并论文中四个 rounded component：GSM8K solution augmentation 7.4K 问题/0.46M pair；GSM8K question-solution augmentation 73.6K/2.11M；MATH solution augmentation 7.4K/2.46M；MATH question-solution augmentation 519.1K/8.94M。论文合计为四舍五入后的 607.3K 个 unique question 和 13.97M 个 pair；HF manifest 给出准确行数 13,972,791。
8. **下采样与 SFT。** 发布完整 train split，以及恰含 1M、2M 和 5M 行的重叠 fair subset。Llama-3.1-8B-Base 在 full/1M/2M/5M 数据上 fine-tune，Llama-3.1-70B-Base 在 5M 上训练。论文使用 batch 512、AdamW、weight decay 1e-2、两个 epoch；8B learning rate 为 2e-5，70B 为 1e-5，并平均六个等间隔 checkpoint（第 4 节；附录 A.4）。
9. **评测。** 论文使用 greedy decoding 与 temperature 0.7 的 majority@256，并由 GPT-4o 判断 predicted 和 reference final answer。该 evaluation contract 与发布 training row 的 selection contract 是两套不同机制。

Generation setting 随阶段不同。第 2 节消融使用 temperature 1.0 和 top-p 0.95；增强问题的 32-solution 阶段使用 temperature 0.7。每个发布阶段的准确历史设置、retry、seed 和总 GPU-hours 均为 unknown。当前命令在两个各含八张 GPU 的节点上部署 405B teacher，但这不是完整历史成本账本。

复现时必须区分 dataset-head commit `469216e3f46f4dacf476b382e192485ea51a143e`（2024-11-25）和已检查 Skills commit `74b8649734a6ecc2d3beca89311e1a5e02da48fa`（2026-07-14）。没有确认 OpenMathInstruct-2 专用的 historical repository tag 或 immutable run manifest。发布卡说明仍保留 564 个超过 1024 Llama token 的问题并建议过滤；当前 Skills conversion command 会删除过长问题和解答。因此，当前 recipe 可重建方法，但未证明与发布 train split byte-identical。
