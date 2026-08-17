Do not read SimpleQA as a general hallucination solution. It measures one constrained slice: short, single-answer factual questions with intended stable answers.

Read the paper in this order: dataset criteria and verification, grading/metrics, model table, calibration experiments, then the appendix grader prompt. The key distinction is incorrect versus not attempted; merging them removes much of the signal.

When comparing systems, keep row-level labels separate from aggregate metrics. Also keep F-score separate from a policy choice about how much worse a wrong answer is than an abstention.
