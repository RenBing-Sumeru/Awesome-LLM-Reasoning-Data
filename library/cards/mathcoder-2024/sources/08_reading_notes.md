# Reading notes

- **Positioning:** the contribution is the LCE data and execution-feedback contract, not merely a math model that writes code.
- **Method handle:** 49k ground-truth-filtered GPT-4 seed traces plus 31k three-answer-consistent self-distilled interpolation traces form the 80k mixture.
- **Data handle:** actual public records use nested messages with repeated text, code, and execution items; they omit per-item provenance.
- **Evidence anchor:** live Python execution raises the five-task average from 35.1 with predicted results to 69.1, and masking execution-result loss reaches 70.2.
- **Reuse decision:** use only with sandboxed replay, final-answer revalidation, contamination checks, and reconstructed source/teacher/filter metadata.
