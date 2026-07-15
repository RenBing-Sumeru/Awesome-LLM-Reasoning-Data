Sample-level SFT cleaning treats every response token in a retained example as equally useful. The paper argues that this is false after pretraining: common scaffolding and task-irrelevant phrases can consume gradient budget, while the few tokens carrying task-specific information are diluted.

Token Cleaning asks which response tokens should actually contribute to the SFT loss. It frames the default all-positive response mask as a noisy token-label problem, then seeks to remove uninformative tokens without discarding the useful example around them.
