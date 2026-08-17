Teams deploying an open LLM judge for ranking, RLAIF, search, or tool selection can use the released code to red-team candidate-controlled content. Supply the production prompt template, judge checkpoint, representative questions, clean candidates, and an attacker-controlled candidate; optimize per target, then report ASR and position-consistent ASR before and after a mitigation.

The output is an attack report identifying whether a candidate can force its own selection and whether the tested detector misses it. This is appropriate for authorized evaluation of open, reproducible systems. Do not use it to generate deceptive submissions against third-party services; it is not directly applicable when the judge, prompt, or evaluation context cannot be reproduced.

Success requires retaining task quality while lowering ASR after mitigation; a detector that merely blocks all candidates should be reported with its false-positive rate.
