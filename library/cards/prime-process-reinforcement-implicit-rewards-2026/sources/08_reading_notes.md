1. **One-sentence positioning:** PRIME learns token-level process rewards online from terminal labels without human step annotation.
2. **Method handle:** Generate responses, verify outcomes, update the implicit PRM, and combine process and outcome rewards.
3. **Data handle:** EurusPRM-Stage1-Data contains 88,455 instructions and about 708K binary-labeled responses.
4. **Evidence anchor:** At 240 steps, the average rises from 36.9 to 41.0; the full model improves 15.1 points over SFT.
5. **Reuse decision:** Best for mathematical and coding RL with rule-based verifiers; audit correct-answer but invalid-process cases.
