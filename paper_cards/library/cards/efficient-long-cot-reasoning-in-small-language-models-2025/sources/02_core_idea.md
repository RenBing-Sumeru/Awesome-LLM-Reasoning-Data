Distills long chain-of-thought into smaller models by pruning teacher traces and curating valid on-policy student traces.

A long-CoT teacher provides initial traces; the student also generates on-policy candidate traces for curation. The feedback contract is: Programmatic or answer-based correctness checks validate traces selected for on-policy curation. The terminal condition is: A selected trace reaches a correct final answer under the reported math-task checker.
