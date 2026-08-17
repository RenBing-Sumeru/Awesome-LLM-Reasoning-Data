The core move is backward construction: generate a behavior first, then derive an instruction that describes the behavior actually present in a contiguous subtrajectory. This reverses the usual instruction-first assumption that a trajectory is valid only when it completes its seed task.

The contract can be summarized as follows:

| Element | Observed or generated object |
|---|---|
| Seed resource | Documentation, tutorial, FAQ, or non-repeated SWE-bench-Lite Python file |
| Initial task | One of three Claude-3.5-Sonnet instructions sampled per source document |
| Environment behavior | Claude-3.5-Sonnet actions and resulting observations until stop or the environment limit |
| Candidate record | A contiguous observation-action subtrajectory paired with a summary or purpose-abstraction instruction |
| Mechanical filter | Remove consecutive repeated action-observation states associated with inactivity or environment errors |
| Model filter | Claude-3.5-Sonnet and Gemini-1.5-Pro must both judge the pair coherent, natural, reasonable, and instruction-aligned |
| Downstream object | A retrieved in-context demonstration or a next-action SFT example |

The feedback contract is **mixed**. Environment execution supplies state transitions and benchmark evaluators later measure task completion, while the construction filter combines a repeated-state rule with a two-model semantic committee. The committee does not execute the constructed instruction or prove end-state success; it judges textual and behavioral plausibility from the presented pair. Per-record votes, rationales, confidence, rejection reasons, and exact model revisions are not released.

Enumerating all contiguous segments gives quadratic candidate growth in trajectory length. The ICLR final counts make the expansion visible: 85,905 raw trajectories become 1,456,808 candidates before 440,008 survive filtering. This increases data yield from expensive interactions, but also creates families of heavily overlapping records whose shared episode provenance should be preserved for grouping, deduplication, and leakage analysis.

The same accepted pool supports two uses. For training-free adaptation, agentic retrieval selects demonstrations at each decision step. For training-based adaptation, records are converted into next-action prediction examples for supervised fine-tuning. The evidence supports `sft` and `agent_training`; it does not establish preference optimization, reward-model training, or policy-gradient RL.
