1. **Exact logical RLVR:** Parse model hypotheses into rules and compute separate derivation, conservativity, and minimality rewards. Report all three before combining them into binary success to diagnose reward hacking.

2. **Preference data:** Generate several hypotheses per task and use the solver to distinguish valid minimal answers, plausible but non-conservative answers, and failures to derive the observation, producing chosen–rejected pairs or rubric labels.

3. **Robust evaluation:** Use identical logical instances across four renderings and report worst-case accuracy and prompt variance. For real-world causality, open-text explanations, or non-formalizable creativity, DeFAb’s closed-world rule verifier cannot replace human judgment.
