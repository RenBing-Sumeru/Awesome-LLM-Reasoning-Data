对 Programmatically Verifiable Outcome Data track，LEAP 是一个将 terminal verifier 与 search judge 分开的具体设计。可复用 run record 应保存 benchmark row 与 source、formal statement、environment revision、backend/model configuration、informal plan、DAG node 与 dependency、候选 Lean artifact、精确 compiler feedback、reviewer decision、rollout/revision/call budget、final proof 和 Lean verdict。LEAP 的公开物提供 benchmark row 与成功 final artifact，但没有中间字段。

因此，实际用途必须保持边界：

- 在 30 条 Basic 与 30 条 Advanced Lean-IMO-Bench statement 上评测 formal prover，并同时报告 pass@k 或 rollout budget；
- 在固定 Lean/Mathlib 环境中重放公开 proof artifact，并审计 statement fidelity；
- 在 call 或 token 预算对齐时，对照 direct generation、iterative compiler revision、tree search、DAG memoization 与 decomposition review；
- 设计 failure logging，保留 Lean rejection 与 reviewer-pruned branch，而非只保留成功结果；
- 用 Tables 3-6 作为 audit checklist，区分 model quality、search structure、heuristic review 与 test-time compute。

复用等级：固定 snapshot 后，可安全作为 evaluation 与 audit reference。end-to-end reproduction 仍受 framework、prompt、model/toolchain version 与失败 trajectory 缺失阻断。论文没有建立从公开 artifact 进行 training reuse、agent training、SFT 或 RLVR 的安全性。
