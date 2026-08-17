Earlier detection papers test whether static memorization signals separate contaminated from clean models. This paper changes the object of analysis to the training transition into an LRM, isolating the post-SFT RL objective and a late-CoT contamination regime.

The novel claim is not that contamination inflates scores, but that PPO-style clipping can erase the distributional contrast detectors rely on. It does not prove malicious intent or certify all detectors as useless; reuse requires checking member construction, model access, and the benchmark half-split.
