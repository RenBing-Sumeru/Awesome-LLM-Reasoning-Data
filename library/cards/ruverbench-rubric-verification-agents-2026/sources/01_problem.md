Agent tasks often use dozens of criteria to inspect long reports or code outputs. General LLM judges can perform well on short answers yet become noisy under long context, batched criteria, prompt wording, or limited reasoning. When such labels train agents, evaluation error becomes reward noise.

RuVerBench collects report and code outputs, rubrics, and human compliance labels and systematically tests the effects of prompting, batching, and voting on verification reliability.
