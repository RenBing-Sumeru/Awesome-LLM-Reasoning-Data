All model results below are reported by the authors and were not independently reproduced.

| Question | Condition and result | Source |
|---|---|---|
| What does the main 7B system report? | AZR-Coder-7B obtains a code average of 61.6, math average of 39.1, and combined average of 50.4. The highest prior combined result in the same table is ORZ at 48.6. | Paper Table 1, §4.2 |
| Does the reported gain change with scale? | Overall base-to-AZR gains are +5.7 for Qwen2.5-Coder-3B, +10.2 for 7B, and +13.2 for 14B. | Appendix Table 5, §D.2 |
| Which components matter in the reported ablation? | Full AZR scores 46.8 combined; deduction-only scores 43.3, no-induction 43.8, no-reference-conditioning 43.8, and solver-only training 45.4. | Paper Table 2, RQ7 |
| Is the released seed count consistent with the paper setup? | The paper specifies `64 × 4 = 256` valid examples per initial 7B buffer; both inspected deduction/abduction and induction 7B seed JSONL files contain 256 rows. | Appendix §A.1.1; pinned repository `data/` |
| What statistical evidence is reported? | The NeurIPS checklist states that there are no error bars and describes greedy evaluation as deterministic. | Final PDF checklist item 7 |

Table 1 supports a performance claim for the authors' integrated AZR training and evaluation stack. It does not isolate whether gains arise from task generation, privileged executor outputs, proposer reward, role-relative normalization, model scale, checkpoint choice, or other implementation details. It also does not establish that the unreleased self-play records are clean, novel, safe, or reusable.

The ablation suggests that induction, historical references, and proposer training contribute under the authors' setup, while solver-only training retains part of the gain. However, no independent RL reruns, seed-level variance, or error bars quantify training stability. Greedy decoding makes evaluation at a fixed checkpoint deterministic; it does not remove randomness from online task generation, RL optimization, or checkpoint selection.

Artifact evidence is narrower than paper-run evidence. The code, seed files, five checkpoint pages, project samples, and logs entry exist, but the exact evolving buffers and complete proposer/solver episodes behind these tables are not packaged into an immutable release.
