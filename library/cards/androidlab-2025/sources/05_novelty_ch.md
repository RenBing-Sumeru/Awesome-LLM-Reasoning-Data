此前的 Android-agent 工作已经提供 demonstration、mobile task suite、UI representation 和 programmatic reward。AndroidLab 并非分别首创 Android interaction、XML observation、SoM prompting、human demonstration、completion classifier 或 LLM answer judge。

它的具体变化是 system-level coupling：论文把 fixed-state Android operation environment、138 个 operation/query task、异构 task-specific completion check、双 observation mode 的 trace schema、human/reward-model cross-verification process，以及筛选后的 SFT subset 放在同一系统中。这让读者能够追踪 task seed 如何成为 state-action target，也能追踪 evaluated episode 如何被判为 success 或 failure。

第二个贡献是明确区分 operation 与 query feedback。operation success 来自针对 subgoal 的 UI-tree predicate，并在部分任务中包含 device-state predicate；query success 则来自 model 对 standard answer 的 judgment。这个 mixed contract 暴露出单一 aggregate SR 会掩盖的 false positive、false negative、drift 与 reproducibility risk。

规模本身不是 novelty claim：10.5K 条 trace / 94.3K 个 step 描述 broader construction process，而训练实际使用 726 条 trace / 6,208 个 XML step 与 6,053 个 SoM step，self-exploration action 被排除。对 reasoning-data 研究而言，方向性信号在于 observation modality、human trace selection、executable environment state 与 terminal feedback 之间的连接。复用前仍需补齐 archive hash、split/overlap manifest、failure ledger、dataset right 与 immutable environment version。
