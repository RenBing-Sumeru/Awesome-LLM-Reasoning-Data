Alignment evaluation usually grades each model’s open-ended responses with humans or a strong LLM judge. That is expensive, repeatedly consumes judge calls, and makes it difficult to evaluate many new systems. It is also unclear whether a model that judges responses well is itself a better aligned generator.

The paper studies generation-evaluation consistency across model rankings, then builds AlignEval: a fixed set of oracle-labeled pairwise evaluation tasks. It asks whether judging ability can proxy generation alignment without judging every new output.
