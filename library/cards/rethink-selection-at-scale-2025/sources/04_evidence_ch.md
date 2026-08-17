在主要 10K experiments 中，被测试 selector 的 average score 通常落在五次 random run 的范围内。Table 1 对 baseline-versus-random comparison 报告 one-sided Mann–Whitney U test，所有列出的 p-value 都大于 0.05。这支持一个窄的作者结论：在两个 pool 与两个 model family 中，复现的 self-scoring methods 没有显著优于 random selection；它不能证明 random sampling 支配所有 data-selection method。

Diversity ablation 支持第二个有条件结果。给四种 quality method 加 K-means 通常会提高报告 average，cross-entropy-plus-diversity 对 Qwen2 的增益超过 3 points、对 Llama3 超过 5 points（Paper §5.2，Table 5）。并非每个 method/model 都提升，因此它说明 diversity 可在测试设置中修复部分 self-scoring choice，而不是建立 diversity 普遍优于 quality 的排序。

在 token length 方面，Table 4 报告 Llama3-8B 在 OpenHermes 上 average 56.23，在 WildChat 上 55.51；后者高于 Table 3 的 full-WildChat SFT average 54.58。这些是 author-reported run aggregate，而不是经独立复现的 record-quality measurement。论文也提醒，length selection 并不适合每个 model，base model 变强后效果可能减弱。

Comparison set 受到 resource limit 塑造。作者因 financial cost 排除 external-model scoring；因声称需要超过 2,000 hours on 40 A100-80G GPUs 排除 NUGGETS；因超过 1 TB memory 排除 DQ。DiverseEvol 使用 8 张 A100-80G、运行 5–7 days，ZIP 选择 50K 约需 7 days（Paper §5.3）。由于 baseline runtime，没有运行超过 50K selected records 的实验。因此，“almost all you need”是 resource-conditioned finding。

公开 artifact evidence 弱于 paper-level result。仓库在 commit `5a635e42f84640f3c6b23a526fcfb1f251765f2b` 暴露 method adaptation 与 training utility，但没有 selected 10K/50K IDs、五个 random subset、per-record score、checkpoint、log、evaluation output 或 end-to-end length recipe。Filtered WildChat release 是一个 2,547,377,673-byte JSONL，card 极简且没有 exact row count。因此，main tables 无法重新绑定到 immutable record，也无法从当前 release 独立复现。
