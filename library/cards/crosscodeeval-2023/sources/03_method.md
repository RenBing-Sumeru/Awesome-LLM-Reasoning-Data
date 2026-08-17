1. Inputs: permissively licensed repositories in Python, Java, TypeScript, and C#, plus source files with cross-file dependencies.
2. Construction: parse repository code, remove or replace import information, run static analysis to find names whose resolution requires other files, and cut completion targets around those uses.
3. Evaluation settings: compare current-file-only prompting, retrieved cross-file context, and reference-assisted retrieval that estimates an upper-bound retrieval condition.
4. Outputs: model completions, retrieval context, reference completions, code-match scores, and identifier-match scores.
5. Feedback contract: success is measured against the reference text and identifiers; no official contract proves that a generated completion compiles or passes repository tests.
6. Reproducibility notes: pin repository snapshot, language parser/static-analysis implementation, tokenizer, retrieval corpus, prompt budget, model decoding settings, and evaluator revision before reusing scores.
