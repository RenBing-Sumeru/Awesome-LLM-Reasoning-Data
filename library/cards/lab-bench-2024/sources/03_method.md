1. Inputs: biology research prompts with choices, category metadata, and task-specific evidence such as papers, supplementary files, figures, tables, protocol edits, database facts, or biological sequences.
2. Construction: the paper reports manually generated tasks for categories such as LitQA2, SuppQA, FigQA, TableQA, ProtocolQA, and CloningScenarios, plus programmatic generation for SeqQA and DbQA.
3. Outputs: a benchmark item keeps the prompt surface and answer key; model evaluation records the model response and task-level score.
4. Feedback: success is answer-level agreement with the official target under the authors' evaluation settings; human coverage is reported for most questions, but the decisive runtime signal is the released scoring contract.
5. Reproducibility: pin the Hugging Face revision, the public/private partition, the 2024-08-19 FigQA update, the 2025-02-18 SeqQA update, prompt scaffold, answer parser, and any model tool-use policy.

The benchmark is evaluation-only in this Card. Using it as training, reward, or filtering data would require a separate audit for contamination, canary filtering, and whether private-test claims are being preserved.
