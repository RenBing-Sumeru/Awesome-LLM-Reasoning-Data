论文支持以下 construction path。

1. **准备 task inputs 与 gold answers。** Training 使用 MATH、MMLU-Pro、ExploreToM 与 derived MBPP-CR。MATH 使用 7.5K train items；MMLU-Pro 约 12K 的 original test pool 被重分为 10.8K/1.2K；ExploreToM 使用 10.4K/1.5K/1.5K。MBPP-CR 对每个 train task 生成十个 code solutions、对 test task 生成两个，执行 MBPP assertions 后形成约 4K/1K binary records。Prepared split files 未公开。
2. **初始化 conversation。** Templated first utterance 引入问题。两个 same-model agents 在同一 collaboration prompt 下交替，每一方看到完整 prefix。代码 role names 只是记账，不代表不对称 expertise。
3. **采样五个 next turns。** 每个 turn 从完全相同 prefix 生成五个 sibling candidates。随机选择一个继续，并保留全部 siblings 用于 labeling 与 pair construction。
4. **重复五棵 trees。** 每个 problem 独立采样五条 active conversation paths。最新有效 beliefs 匹配或达到 20 turns 时停止。论文未给出确定 generation temperature 或 top-p；代码 defaults 0.8 与 1,024 output tokens 也没有绑定到每个 paper run。
5. **抽取 beliefs。** Same-family LLM 在单独 prompt 下，对每个 candidate 抽取 final answer 或 uncertainty。Long responses 与 long contexts 会使 extraction 不可靠。
6. **与 gold 比较。** 应用 task-specific normalizer/matcher。Belief 匹配为 positive；不匹配、缺失或 uncertain 为 negative。Agents 之间的 agreement 是另一个 string-equality 条件，仍可能错误。
7. **构造 same-prefix DPO pairs。** 对同一个 system-prompt-plus-prefix input，把 positive sibling 作为 `tgt_chosen`，negative sibling 作为 `tgt_rejected`。论文限制每 turn 最多两个 pairs、每 problem 最多 20，以减少 easy tasks 的支配。
8. **构造 SFT records。** 独立采样 conversations，并保留 correct-belief next turns 作为 targets。比较预算是每 problem 25 个 conversations。
9. **训练。** Full-parameter SFT 或 DPO 使用 fairseq2/TRL，训练 1,000–3,000 steps，reported batch sizes 为 20–50。论文称 input-plus-output limit 为 8,192 tokens，覆盖超过 90% 的 turn rows。公开 DPO configs 使用 beta 0.1、learning rate 1e-6、weight decay 0.1、50 warmup steps，并以原 instruction model 为 reference。

Table 9 报告的是 accepted turns，不是 public data：8B 总计 **379.6K**，分别为 33.8K MBPP-CR、85.1K MATH、160.6K MMLU-Pro、100.1K ExploreToM。70B 总计 **311.3K**，分别为 33.3K、88.5K、99.8K、89.7K。Qwen 与 Ministral counts 未知。

代码不是 paper-exact package。Consolidated defaults 每 turn 最多一个 pair、每 problem 最多十个 instances，而论文是两个和 20。70B DPO config 使用 4,096 tokens，论文则为 8,192。`TASK_PRESET` 支持 MATH、MMLU-Pro、ExploreToM，却缺 MBPP-CR；supported list 还把 GPQA 拼成 `gqpa`。Requirements 被声明为 non-exhaustive，Matrix 通过 SSH Git URL 安装，MATH grading 需要手工复制未固定版本的 scripts。

Generation 使用带 Ray、Slurm 与 vLLM 的 Matrix。论文报告 AWS p5.48xlarge instances，每台有八张 H100 80GiB GPUs，但未披露完整 wall-time、total project compute、retries、acceptance rate 或 run manifests。
