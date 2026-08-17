多数 Judge benchmark 评价短文本偏好或答案正确性，Agent benchmark 则直接把 LLM 评分当作 gold。RuVerBench 的变化是把长报告/代码中的 rubric 满足性作为独立元任务，并系统操控 batching 和 voting。新意是评测 verifier 本身，而非再提出一套 Agent 任务。
