1. Positioning: it audits order sensitivity in LLM-as-a-Judge rather than training a better judge.
2. Handle: repeat original and swapped prompts, then separate repetition stability, position consistency, and preference fairness.
3. Artifact: proceedings paper and reproduction-code link exist; no official downloadable audit dataset was identified.
4. Evidence anchor: 15 judges and over 150,000 instances; capable judges usually have RS >0.85, but bias varies by judge, task, and quality gap.
5. Reuse decision: fit for a local judge audit; first rerun it on the target prompt and candidate pool, because it does not prescribe mitigation.
