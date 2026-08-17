The paper reports 673 generated questions, 126 verified questions, average 1.53 relevant documents per question, average relevant document length around 4,190 tokens, and average 2.00 reasoning steps. It evaluates recent proprietary and open models at long context lengths up to 128K.

The main empirical finding is qualitative and task-structured: models are stronger on single-step and single-document tasks than on multi-step and multi-document tasks; longer noisy contexts and unfavorable relevant-document placement reduce accuracy.

Instance-level evidence is the retained Python-executable solution answer plus the model's final numeric answer. The evidence boundary is the automated construction and consistency filter; it is not a proof that every generated problem is semantically perfect.
