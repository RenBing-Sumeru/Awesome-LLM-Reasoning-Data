# Limitations

- **Curator audit risk:** final-answer-terminating DFS is an outcome check, not a proof that every box, OCR string, calculation, or explanation is faithful. Re-execute available operations and manually inspect intermediate results, especially large boxes and coincidental answer matches.
- **Curator audit risk:** only positive paths are released for training, hiding failed branches and making tool failure, selection bias, and the reported 35.55% construction success hard to reproduce. Preserve generation denominators and negative branches in any new build.
- **Curator audit risk:** the release license is CC-BY-SA-4.0, but source benchmark images/questions retain their own rights and no full semantic decontamination table is reported. Build a component license ledger and compare image/question hashes and semantics with every evaluation split.
