LEAP 研究的是：通用 foundation model 能否通过与证明环境进行结构化交互，完成长程 Lean theorem proving，而不是依赖 one-shot generation 或专用 prover model。权威论文为 arXiv:2606.03303v2，2026 年 6 月 2 日提交、6 月 3 日修订；尚未核验到 peer-reviewed venue。官方项目为 https://imobench.github.io/，官方发布位于 Google DeepMind 的 `superhuman` 仓库。

论文还引入 Lean-IMO-Bench：将 IMO-ProofBench 中 60 道 IMO 风格题目人工转换成 Lean statement，并分为 30 条 Basic 与 30 条 Advanced。每条公开 benchmark 记录包含 `Problem ID`、自然语言 `Problem`、参考 `Solution`、`Grading guidelines`、`Category`、`Level`、`Short Answer`、`Source` 和 `Lean Statement`。进入 LEAP 评测后，该任务记录还要与生成的 Lean proof、搜索预算以及 solved/unsolved checker outcome 配对。

它属于 Programmatically Verifiable Outcome Data，因为决定性标签是 Lean 对完整证明产物的验收。它不是 process supervision：LLM reviewer 虽会筛选候选分解，但论文没有发布步骤级正确性标签或可重放 trajectory。它也不是模型训练证据，因为论文执行的是 inference-time search 和 evaluation，而非 SFT、RLVR 或 agent training。Card 达到 L4 的证据包括论文全文与附录、benchmark CSV、结果表、许可证和成功证明发布；framework code、模型/工具链精确版本和失败 trace 仍不可得。（论文 §§2-5、Appendix C；官方仓库 commit `96fa6c4`。）
