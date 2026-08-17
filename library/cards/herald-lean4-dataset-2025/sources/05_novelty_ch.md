Herald 的贡献不只是发布大量 pairs。其有辨识度的构造方式结合三种 formal-library 结构：按 dependency order 翻译 statements、从人工标注 NL-FL bank 检索，以及用 tactic-state decomposition 产生新的局部 proposition。Mathlib4 因而被视为结构化依赖图与交互式 proof substrate，而不是扁平 theorem strings 集合。

Dependency-aware procedure 对 project-scale informalization 尤其重要。一个 theorem 的自然语言含义可能依赖局部 definitions 与先前 declarations，而这些对象仅凭名字很难理解。先翻译 prerequisites，后续 prompt 就能包含它们已经生成的描述；从 1,000 个 manual examples 中检索可提供领域合适的先例，专家改进的 prompt principles 则处理反复出现的数学语言错误。

Tactic-state 分支把中间 proof obligations 转成额外 statement pairs。这给出了从 proof execution state 到监督 statement data 的具体路线：hypotheses 与 current goal 定义较小的形式对象，Lean 至少能检查该对象的 formal validity。第二条增强分支通过 equivalence rewrites、abstraction、implicit-condition omission 与 multilingual rendering 主动改变自然语言表面形式。两条分支共同针对 data scarcity 与逐字形式语言翻译所产生的僵硬文风。

Proof release 还为同一个 tactic proof 保留多个视图：formal 与 informal theorem statements、complete formal proof、whole informal proof、commented proof 以及 context header。因此，与 statement-only corpus 相比，它更适合分析 proof informalization；但构造排除了 term proofs，也未发布逐行 validation evidence。

对本 track 来说，关键新意是 recipe 与 release 的关系。Herald 公开精确 train files、schemas、row counts、model weights、evaluator code 与固定 Lean test environment，因此比只有论文描述的数据更易检查；但公开仓库覆盖的是 inference/evaluation tail，而不是 construction pipeline。该案例由此说明：开放数据与 evaluator code 并不自动等于可复现的开放构造 recipe。
