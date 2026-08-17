- The selector is shortest parser-correct per question, not shortest globally and not step-verified.
- Primary BoN uses 16 paths; FS-BoN compares 16+16 and matched 8+8 pools.
- FS-Self searches 128 x 128 candidates to obtain eight GPT-4o-approved exemplars.
- Questions with no correct rollout are dropped, creating capability-conditioned coverage.
- The 30% token reduction is a downstream average after paying construction-time search cost.
- Code/models are public, but the complete accepted/rejected training-trace ledger is not verified.

