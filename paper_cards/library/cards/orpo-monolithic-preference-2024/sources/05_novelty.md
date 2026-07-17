Prior workflows typically treated the preferred answer as SFT material and reserved pairwise comparison for a second objective. ORPO makes the negative answer part of the SFT update through an odds-ratio penalty, so the data lifecycle no longer has a hard boundary between instruction learning and preference alignment.

Its novelty is not just removing a reference model. By making the contrastive term deliberately small and attaching it to the likelihood objective, ORPO proposes a different answer to which training consumer should own a preference pair: the supervised fine-tuning step itself.
