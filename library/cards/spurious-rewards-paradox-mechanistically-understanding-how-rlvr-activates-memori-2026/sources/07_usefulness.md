Use the released scripts to audit an RLVR checkpoint suspected of benchmark leakage. Construct matched wrong-to-right and stable question groups, run a leakage probe and gated MLP-key suppression, then report which apparent successes disappear only under the intervention.

Use it for mechanistic diagnosis, not reward design or blanket model editing. A credible report includes clean/recent controls, baseline versus intervention accuracy, gate firing and false-trigger rates, the exact model/checkpoint/template, and a check that ordinary reasoning is not broadly degraded.

Do not reuse the layer numbers as a universal filter: first reproduce the leakage signal and layer ablations on the target model. The repository supplies analysis code, while upstream RLVR data and checkpoints must be obtained separately.
