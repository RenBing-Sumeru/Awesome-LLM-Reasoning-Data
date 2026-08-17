1. **Positioning:** BonaFide uses recoverable computational truth to test whether faithfulness metrics actually measure faithfulness.
2. **Method handle:** It designs bottleneck tasks, samples CoTs, recovers step and trace labels, and meta-evaluates metrics.
3. **Data handle:** The core set has 3,066 examples across 13 tasks and 10 models; Extended has 19,459.
4. **Evidence anchor:** Best AUROC is 0.70 at trace level and 0.59 at step level, with many metrics near chance and degrading with length.
5. **Reuse decision:** It fits metric calibration and detector training; preserve cross-task tests and distinguish faithfulness definitions; reuse should treat unseen tasks and unseen models as the primary conclusion rather than a random in-distribution split; It is best for calibrating faithfulness metrics rather than answer evaluation. The main risk is learning bottleneck-generation rules, so reuse must test unseen tasks, unseen models, and random baselines.
