For the **Data Construction and Open Release Recipes** track, ReST-MCTS* is useful because it makes a search-generated data pipeline decomposable:

- **Recipe reconstruction:** separate prompt sourcing, tree expansion, rollout, terminal verification, trajectory selection, value-target inference, and model refresh.
- **Policy-data experiments:** use the released positive `instruction`/`output` rows for controlled SFT while documenting that rejected paths and verdict provenance are absent.
- **Process-value studies:** use `prompt_answer`/`label` rows to study prefix-value prediction, calibration, or alternative objectives, while treating targets as policy- and budget-conditioned rather than step truth.
- **Search ablations:** vary iteration cap, branch factor, rollout depth, early-stop threshold, or verifier and measure both accepted-data composition and downstream behavior.
- **Selection-boundary audits:** independently check intermediate steps on terminal-correct paths and compare false positives across string matching and learned judging.
- **Lineage tooling:** use the recipe as a case study for releases that retain node IDs, parent links, visits, prompts, generation settings, terminal verdicts, failed branches, and rejection reasons.
- **Mutual-training research:** test whether refreshing both policy and value data expands coverage or amplifies early errors across iterations.

The verified releases are appropriate for controlled recipe comparison and targeted reuse with additional auditing. They are not a drop-in source of independently validated process truth, and benchmark improvements should not replace checks of labels, lineage, overlap, split semantics, and license compatibility.
