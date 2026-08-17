作者明确把结论限制在 tested self-scoring method，并指出没有对所有 model 都最优的 selector；base model 增强后，token length 可能不再同样有效（Paper §7）。以下 release 与 audit 风险是 Card 作者基于论文和已检查 artifact 作出的推断：

- 实验边界只有六种 self-scoring selector、两个 source pool、Qwen2-7B/Llama3-8B，以及主要 10K/50K subset。External scoring、NUGGETS、DQ 与 100K+ selection 均缺失，因此 title 强于已证明范围。
- LESS validation/warm-up size、IFD clustering、SelectIT aggregation，尤其 DiverseEvol，都为 scale 做了改变。Performance difference 可能同时反映 pool size 与 implementation adaptation；论文明确把 DiverseEvol adaptation 视为潜在退化来源。
- Selector score 不是 correctness verifier。高 gradient influence、uncertainty、loss、distance、compression value 或 length 都可能偏好错误、不安全、重复或 rights 不清的 response。没有发布 correctness-label audit 或 selected/rejected spot check。
- 论文偏好的 token-length selector 无法由公开代码复现。`kmeans_sample.py` 只使用前 100 个 embedding 并选择 cluster-center record；论文则按比例分配并保留 cluster 内较长 item。
- Exact 10K/50K 与 random IDs、per-record score/cluster、SFT file、seed、checkpoint、log 与 metric 均缺失。没有 immutable manifest 绑定 source revision、code、model/tokenizer、LLaMA-Factory、Open-Instruct、benchmark hash 与 table row。
- 没有报告针对 BBH、GSM8K、HumanEval、MMLU 或 IFEval 的 exact、n-gram、semantic 或 provenance contamination audit。OpenHermes 是广泛 multi-source synthetic mixture，未测 overlap 可能同时改变 selector 与 benchmark conclusion。
- Rights 不完整。Code 无 root license，当前 OpenHermes 没有检测到 license metadata；filtered WildChat card 给 payload 标 Apache-2.0，但没有调和当前 upstream WildChat ODC-BY 条款。
- WildChat privacy/toxicity claim 依赖未固定的 upstream revision。论文称提取 dialogue 为 non-toxic，但极简 filtered release 没有为精确 payload 提供 transformation、moderation、PII、consent 或 safety ledger。
- 五次 random control 没有 selected ID 或 run-to-seed map。公开单一 seed-0 example 不能绑定每个 selection/training run，论文也没有报告 confidence interval 或 multiple-comparison correction。
