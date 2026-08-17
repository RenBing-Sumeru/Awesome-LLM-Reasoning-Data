36B causal architecture 使用 64 层、RoPE、GQA、RMSNorm、SwiGLU、80/8/8 QKV heads、5,120 hidden size、155K vocabulary 与 native 512K context。训练硬件、optimizer、schedule、sequence curriculum、compute 与不可变 checkpoint lineage 未披露。

12T-token pretraining mixture 由公开互联网、购买的 vendor 数据、内部生成数据组成，knowledge cutoff 为 2024 年 7 月。预处理包括 deduplication、desensitization、quality filtering、CSAM filtering、toxic-content filtering，以及算法加人工的 PII removal。规则、模型、阈值、yield、benchmark exclusion 和来源权利未知。

Synthetic instruction augmentation 是区分 Base 与 Base-woSyn 的处理变量。发布没有说明 teacher、prompt template、生成答案类型、语言/领域 mix、filtering、acceptance rate、token 比例、replacement policy、random seed，也没有确认总 token、step、compute 与 checkpoint selection 是否匹配。

Instruct checkpoint 没有完整构造配方。Model card 只说明 safety fine-tuning 发生在 SFT 与 RLHF/PPO 阶段，没有披露普通 instruction data、preference schema、annotator、reward model、reward value、PPO objective、KL control、rollout count、optimizer 或阶段规模。

Budgeted reasoning 有公开推理格式：未指定 budget 默认 unlimited thinking；budget 0 请求直接回答；正预算推荐使用 512-token 倍数，如 512、1K、2K、4K、8K、16K。模型先输出 thinking 与定期的 consumed/remaining-budget reflection，再给 final answer。这些可见 trace 是过程元数据，不证明内部计算忠实。

Reasoning 与 agent evaluation 覆盖数学、代码、instruction following、TAU1 Retail/Airline、OpenHands/AgentLess 下的 SWE-bench Verified、Multi-SWE-bench、多语言任务、长上下文 RULER 与安全。Harness 和 benchmark score 是评测对象，不是已披露训练 reward 或 trajectory。
