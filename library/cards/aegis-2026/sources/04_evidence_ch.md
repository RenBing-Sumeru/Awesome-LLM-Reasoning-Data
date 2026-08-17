规模证据必须保留两个不同分母。论文第 4.3 节与 Appendix Table 2 报告 **9,533 条 faulty trajectory**，其中包含 **24,843 个 injected agent/error instance**，而不是 24,843 条轨迹。按 task 划分：MATH 2,048、SciBench 1,871、GSM8K 1,741、HumanEval 1,497、MMLU 1,446、GAIA 954；按 framework 划分：LLM Debate 2,404、MacNet 2,359、AgentVerse 1,995、DyLAN 1,845、SmolAgents 481、Magentic-One 449。两种划分的算术合计都为 9,533。

Table 1 报告论文训练设置下的归因结果。使用 Qwen2.5-14B 的 Aegis-SFT 在所列 Aegis-Bench 与 Who&When metric 上平均为 26.51，对应 base model 为 13.99；Aegis-GRPO 报告 18.41；DCL 报告 12.61，random baseline 为 4.08。这些是指定 model/training combination 下的作者报告 aggregate score，本卡片未做独立复现。

human check 只在一个样本上检验 label fidelity。三位专家独立标注 100 条 Aegis-Bench trajectory；Appendix B.3 报告 human-human Fleiss' κ=0.85、program-human κ=0.81。这说明 planned attribution 在该样本上通常与专家阅读一致。由于 recruitment、raw judgment、逐 mode error、disagreement adjudication，以及样本是否覆盖全部 framework 与 rare mode 均未发布，该结果不能验证每一条 row，也不能证明因果必要性。

论文还报告了负面证据。SFT epoch 研究中，out-of-distribution Who&When 性能在第二个 epoch 后达到峰值并下降，而 in-domain Aegis-Bench 继续提高；作者将这种分化归因于对 synthetic style 的过拟合（论文第 7 节、Figure 3c）。Appendix A.2 的 geography case 显示所有测试模型（包括 Aegis）都遗漏了细微 numeric root cause。rare error mode 上的 Macro-F1 也落后于 Micro-F1。这些结果限制对 transfer 与 taxonomy coverage 的主张。

artifact 证据对“可获得”比对“可回放”更强。官方 HF repository 暴露 train、validation 与 test JSONL，审计到的 SHA-256 分别为 `add3aae4…6466a8`、`fe0b3d0e…f1ffe49`、`a2f2793f…9f65bd1`；GitHub repository 在审计 commit `ced13443…` 暴露构造与评测代码。但没有统一版本绑定 paper、code、data、model API 与 evaluator。因此 benchmark gain 只证明论文所述设置中的表现，不能证明 data quality、split isolation、verifier correctness、合法复用、release completeness 或 deterministic replay。
