主要数学结果显示该方法在论文设置下带来提升。对 LLaMA-3.2-3B-Instruct，MATH-500 Pass@1 从 initial 47.6 提升到三个 SeRL iterations 的 48.6、50.4、52.6。对 Qwen2.5-7B-Instruct，则从 initial 74.2 变为 74.2、74.8、75.8。SeRL 在若干 math/STEM benchmarks 上也报告提升，而 MMLU-Pro 变化较小且依赖领域。这些结果证明 recipe 在所测模型上能够工作，却不能验证每个 generated question 或 reward。

解释反馈契约时，论文的 reward-hacking ablation 更重要。移除 difficulty filter 后，mean reward 上升，而 MATH-500 accuracy 在大约 100 steps 后明显下降。Case study 显示，一些 responses 的中间推理看似合理甚至正确，却持续以 final answer 0 结束。由于输出一致，majority mechanism 会给错误答案 full reward。`[0.2, 0.8]` window 可以缓解 unanimous case，但不能识别错误的 10-of-16 consensus。

作者的 capability analysis 显示，majority-at-16 并未随 iterations 持续提高。谨慎解释是：SeRL 可以把部分已有 multi-sample agreement 压缩成更强 Pass@1，而不是可靠提高底层 majority ceiling。这种行为仍有价值，但比“产生新推理能力”或“正确 self-verification”的主张更窄。

Appendix F 报告 `D_gen^1`、`D_gen^2`、`D_gen^3` 各含 7,500 条 generated instructions。Qwen-3-32B 给出的平均质量约为 3.5–3.6/5。这个 learned judge 属于 post-hoc analysis，不是 training verifier，而且未发布 item-level judge outputs。

Pinned repository 提供另一类证据：可直接审计的静态文件。配置的 500-row seed 有 500 个 unique normalized prompts。`llama_gen7500_iter4.jsonl` 含 **7,532 rows，但只有 4,730 个 unique normalized prompts**，因此有 **2,802 条 exact duplicate prompts**，约占 37.2%。其 iteration-4 文件名无法映射到论文报告的三个 main iterations。另一个 mixed snapshot 有 15,004 rows 与 15,003 个 unique prompts，混合 generated blank-label rows 和 MATH ground-truth rows，却没有显式 provenance field。Bundled MATH train snapshot 有 7,500 rows 与 7,499 个 unique prompts。

Curator 对配置 seed、已检查 bundled training/generated files 与 bundled MATH-500/MATH-Hard evaluation files 做 exact-normalized-string 比较，没有发现重叠。这只支持针对被检查 snapshots 的 exact-string 结论。论文未报告 semantic-overlap procedure 或 base-model pretraining audit，因此 decontamination 仍是 `unknown`。

NeurIPS checklist 说明由于 RL 成本较高，只使用一个 fixed random seed；论文没有 error bars 或 significance tests。Greedy evaluation 可降低评测时 decoding variance，但不能量化 stochastic training variance 或 checkpoint-selection sensitivity。
