# 02 Core Idea

The one-sentence contribution is a benchmark that makes truthfulness measurable by asking questions for which many humans would answer falsely because a misconception is common. The core mechanism is not to sample random trivia, but to craft prompts where imitation of web text is a liability: a model must resist the false answer pattern and produce a truthful response.

The data object is an answer-level benchmark record with question text, category, true answer set, false answer set, and metadata used by generation and multiple-choice scoring. The feedback contract has several layers: human evaluation for truthfulness and informativeness, learned generation metrics such as GPT-judge and BLEURT-style checks in the original evaluation, and multiple-choice scores such as MC1/MC2 over true and false answer options.

The direction label is misconception-sensitive truthfulness evaluation. Closest comparisons are factual QA benchmarks such as Natural Questions and SQuAD, safety/factuality surfaces such as SimpleQA and FACTS Grounding, and general evaluation suites that include truthfulness only as one subtask. TruthfulQA is most useful when the research question is whether scale or imitation creates truthful answers, not merely whether a model has memorized isolated facts.
