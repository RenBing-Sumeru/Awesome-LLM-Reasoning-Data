For the **Data Construction / Open Release Recipes** track, ReGenesis is most useful as a recipe and audit reference, not as a training release.

- Reconstruct the abstraction ladder and compare direct CoT sampling against guideline adaptation plus structure generation while matching candidate count, accepted-row count, and SFT budget.
- Store guideline ID, adapted guideline, structure, path, predicted answer, extracted answer, terminal verdict, hint flag, and retention decision as separate fields; the paper's conceptual lineage is richer than the final SFT tuple.
- Audit terminal-filter false positives by independently checking intermediate steps in freely generated and answer-hinted strata, rather than treating downstream benchmark gains as path-quality labels.
- Replace random retention with diversity-aware or validity-aware selection, then report how the accepted mixture and downstream transfer change.
- Reproduce the majority-vote condition as a negative-control surface: measure when agreement diverges from reference correctness and whether correlated errors concentrate by guideline.
- Use Appendix A.2's fixed-size mixture design to test whether domain diversity helps after controlling source versions, item overlap, and sampling seeds.

Reuse class: **reading/audit reference only; training reuse is blocked pending verification**. The method can be implemented from the paper, but no official generated paths, implementation, license, or immutable source snapshot was verified. Any independently recreated corpus should document its own provenance and should not be represented as the authors' release.
