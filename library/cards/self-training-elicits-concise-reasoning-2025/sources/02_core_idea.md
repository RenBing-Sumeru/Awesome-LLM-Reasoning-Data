Naive BoN generates N reasoning paths for every GSM8K or MATH training question. A Python parser extracts and normalizes final answers, candidates with the wrong answer are removed, and the shortest correct path for that question becomes the SFT target. Questions with no correct candidate are excluded.

Selection is question-wise rather than globally shortest. The appendix reports that global shortest selection reduces length more but lowers average relative accuracy and can sharply hurt Gemma-2-2B; per-question selection preserves question coverage among solvable prompts.

Few-shot variants condition generation on eight concise demonstrations from humans, GPT-4o, or the target model itself. FS-BoN combines candidates from the few-shot-conditioned and default distributions, then applies the same shortest-correct rule. The reported combined method uses GPT-4o exemplars because that variant showed a favorable accuracy/length trade-off.

FS-Self uses mixed feedback to construct its eight demonstrations: parser-correct candidates are sorted by length, then GPT-4o returns ACCEPT or REJECT based on whether the task needs steps and whether the rationale contains explicit correct reasoning. This judgment affects exemplars, not every training row.

The selector's meaning is narrow: shortest among candidates whose final answer passes the parser. It is not a step verifier, faithfulness measure, universal compression objective, or guarantee that a dropped question is unsuitable for training.

