**Claim.** Evidence-seeking agent evaluation agrees with the paper's human-consensus labels more closely than a one-shot LLM judge. **Controlled setup.** Table 3 evaluates the same MetaGPT, GPT-Pilot, and OpenHands workspaces against three-expert consensus; the compared evaluator is Agent-as-a-Judge versus LLM-as-a-Judge, in black-box and gray-box settings.

**Result.** For OpenHands, Agent-as-a-Judge reaches 90.44% black-box and 92.07% gray-box alignment, versus 60.38% and 70.76% for LLM-as-a-Judge. The ablation reaches 90.44% with ask, graph, read, and locate, while adding retrieval gives 90.16% in that OpenHands black-box setting.

**Boundary.** These figures measure agreement with a small, author-recruited consensus on 55 DevAI tasks, not correctness on arbitrary agent environments or a causal proof that every module generalizes.
