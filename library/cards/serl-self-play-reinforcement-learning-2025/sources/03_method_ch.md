论文与 pinned repository 支持以下 pipeline。

1. **创建 seed。** 从 MATH train 的各 difficulty levels 均匀采样 500 条 questions。配置 seed file 有 500 rows 与 500 个 unique normalized prompts。Medical experiment 则从 MedQA train 采样 500 条 instructions。
2. **构建八示例 generation context。** 混合 seed 与 accepted generated questions，要求当前 policy 生成新的 math question 而不要解题。论文目标比例是 2 seed/6 generated；公开代码最多使用 2 generated，其余由 seed 填充。
3. **采样 question text。** 公开 generation settings 为 temperature 0.8、top-p 0.95、maximum 1,024 new tokens、presence penalty 2，每个 generation prompt 一个 completion。
4. **应用 lexical 与 similarity filters。** 拒绝 maximum ROUGE-L 超过 0.7、包含 image/graph/file/program requests、以 punctuation 或 non-English character 开头，以及少于 3 或多于 150 words 的 instructions。代码的比较池是 seed 加当前 unconsumed batch，不是已发布且 immutable 的 global corpus。
5. **Roll out responses。** 对每个剩余问题采样 16 个当前 policy responses，包含 reasoning 与 final answer。主要 RL sampling 使用 temperature 1.0，prompt 与 response maxima 均为 1,024 tokens。
6. **构造 agreement rewards。** 用 Math-Verify 抽取答案，检查 pairwise equivalence，选择 maximum-neighbor cluster，与其等价的 responses 标 1，其余标 0。Verifier exceptions 被捕获并视为 non-equivalence，但不保存 error record。
7. **按 agreement difficulty 过滤。** 计算 16 个 binary rewards 的均值，只保留 mean 位于 `[0.2, 0.8]` 的 group。保留 groups 同时提供 training prompts 与 response-level rewards。
8. **用 Reinforce++ 更新。** 使用 response-level reward、token-level KL penalty、reward-to-go 与 normalized advantages。论文表格规定 actor learning rate 5e-7、critic learning rate 9e-6、initial KL coefficient 1e-4、batch/rollout batch 16、一个 epoch、三个 iterations。
9. **在线重复。** 每个报告的 iteration 完整处理 7,500 条 admitted instructions，每条采样 16 responses，即 nominally 120,000 sampled responses per iteration。Accepted questions 进入后续 generation contexts。

论文报告硬件为八张 NVIDIA RTX A6000 GPU、96-core Intel Xeon Gold 5318Y CPU 与 512 GB RAM，但没有报告 total GPU-hours、rejected-generation budget、failed-run compute 或独立 RL reruns。

公开 training templates 是 recommendations，不是 paper-exact manifests。LLaMA template 的 micro-train batch 为 1、micro-rollout batch 为 4，论文 Table 6 则是 2 与 16。Qwen template 使用 initial KL `1e-3`，Table 7 为 `1e-4`。两个 templates 都把每 iteration instructions 设为 2,000，而论文实验使用 7,500。再加上反转的 few-shot mixture 与缺失的 shortest-answer tie-break，若没有作者补充选择，就无法 paper-exact replay。

Run-local code 可以写出 `filtered_data_{step}.jsonl`、`expired_data_{step}.jsonl` 与 `keep_train_data_{step}.jsonl`，但只存 prompt/index pairs。16 responses、answer extractions、equivalence graph、exceptions、rewards、filter reason、policy hash 与完整 iteration manifest 均未序列化。
