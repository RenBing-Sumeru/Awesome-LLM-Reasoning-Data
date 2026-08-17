主要证据是在 123 个 Hard instance 上进行的 V0→V1→V2 目标消融，结果为三次运行平均值。Qwen3-4B 的 base/V0/V1/V2 correctness 分别为 22.8/29.3/33.1/44.4%，speedup rate 为 11.1/13.6/12.7/24.7%；validity 从 base 的 99.2% 降到原始 V0 的 81.3%，经 normalization 恢复至 97.6%，V2 达到 100%。Llama-3.1-8B 的 V2 把 correctness 从 14.9% 提到 45.5%，speedup rate 从 5.4% 提到 18.4%。Mistral-7B 也表现出原始目标失效：validity 从 base 的 93.8% 变为 V0 的 68.8%，再恢复到 V1 的 95.9% 和 V2 的 99.5%。这些结果支持“目标构造很重要”，但没有把 LLM 改写与样本数或目标分布的全部变化完全隔离。

Table 3 给出 end-to-end 条件。Qwen3-4B-V2 把 VBP-E2E 从 185.7 秒降到 165.7 秒，并把 correctness 从 22.8% 提到 44.4%。Qwen3-14B-V2 的 VBP-E2E 为 162.9 秒，接近 GPT-5.2 的 163.4 秒，但 correctness 为 43.4%，而 GPT-5.2 为 72.4%。该比较只支持 portfolio time 结论，不能证明模型能力相等。Qwen3-0.6B 是有价值的负结果：V2 correctness 略低于 base（27.9% 对 28.5%），但 speedup rate 提高（14.1% 对 12.2%），VBP-E2E 从 183.0 秒降至 174.1 秒。由此可直接看出，正确性与运行效用是不同标签。

数据 yield 也可审计。4,000 个原始不变量中，2,995 个 verbose item 生成 11,980 个候选，其中 6,584 个（55.0%）达到 grade >= 2；另有 1,005 个 compact item 被直接检查，其中 983 个达到 grade >= 2。管线输出 7,763 行 curated 记录；经 grade 与长度筛选后，V2 SFT 集剩 7,284 条，其中 grade 2 为 4,516 条、grade 3 为 2,768 条。目标不变量平均长度 15.8 token。grade-3 子集平均 verifier speedup 为 2.13×，报告最大值 41.39×。

作者也报告观察收益的边界。Hard split 中 20 个 baseline timeout instance 每次只有少数被解决；Qwen3-14B-V2 平均约 3.3 个。Easy split 上 V2 提高 correctness，但直接验证平均仅约 6.15 秒，因此未报告 speed 指标。所有数字均为作者在单一 UAutomizer/硬件环境下的报告；本 Card 没有独立复现训练或验证。
