Large STEM reasoning mixtures often contain invalid questions, duplicates, benchmark leakage, repetitive teacher responses, and too many short/easy examples. Even after broad SFT, a model's remaining failures are sparse and poorly represented by the original training distribution.

Logics-STEM first curates and distills millions of long-CoT STEM records, then uses the SFT model's verified failures to retrieve relevant documents and synthesize targeted second-stage SFT or RLVR data. It contributes both an open corpus and a data-to-training loop that concentrates updates on observed failure regions.

L4 facts: official source arXiv:2601.01562v3, dated 20 January 2026; arXiv preprint with no confirmed venue; decision boundary is curated long-CoT supervision plus failure-targeted synthetic records; Track-01 object is a STEM question, metadata, reasoning response, and final answer; collected as an existing promoted Card.
