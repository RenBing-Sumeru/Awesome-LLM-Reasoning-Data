On 528 instances with DeepSeek V3.2, author-reported resolved/apply rates are 28.79%/96.21% for AutoCodeRover, 52.65%/78.98% for TraeAgent, and 70.08%/95.83% for mini-SWE-Agent. A cleanly applied patch can still fail the executable contract; reasoning analysis therefore separates Success, all Failure, and apply-success/test-fail cases.

Across agents, apply-success/test-fail cases have 35.7% lower average recall and 94.1% higher over-prediction than successful cases. This is an aggregate association under the authors' normalization and judge pipeline, not evidence that improving the reported reasoning metrics causally fixes patches.

The 96/100 targeted human agreement result checks a balanced sample of GPT-5.2 accept/reject decisions. It is not a full relabeling of all 580 candidates and does not calibrate the downstream DeepSeek semantic matcher. No judge stability across prompts, endpoints, model revisions, or repeated calls is reported.

The paper explicitly observes that successful alternative patches can have task/step recall below 1.0. This is important counter-evidence to treating the five reasoning modules as unique ground truth. FTP/PTP success is also bounded by test coverage: it verifies encoded behavior, not every equivalent implementation, regression, performance property, or security implication.
