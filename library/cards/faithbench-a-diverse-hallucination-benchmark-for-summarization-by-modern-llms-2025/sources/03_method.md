1. Start from Vectara Hallucination Leaderboard passage-summary pairs, whose sources include NLI, fact-checking, and summarization data.
2. Select ten models from eight families; group their ten summaries by shared source passage.
3. Run True-NLI, TrueTeacher, HHEM-2.1-Open, GPT-4o, and GPT-3.5-Turbo detectors; retain the 115 groups with at least seven detector-disagreement cases.
4. After a 30-sample pilot and source cleanup, 11 experts annotate spans, labels, notes, and supporting or contradicting passage spans in two rounds.
5. Remove noisy sources, producing 660 samples from 66 passages; report human agreement, model hallucination rates, and detector balanced accuracy/macro-F1.

Reproduction needs the source snapshot, model outputs, detector versions/prompts, annotation instructions, and label-pooling rule.
