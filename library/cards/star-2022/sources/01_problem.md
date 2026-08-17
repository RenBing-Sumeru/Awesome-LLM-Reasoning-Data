Training a model to produce rationales normally needs many human-written chains, while few-shot prompting exposes only a small demonstration set and underuses questions that have answers but no explanations. This leaves rationale supervision expensive and difficult to scale.

STaR turns gold final answers into a bootstrap signal: a model generates rationales, keeps traces whose answers are correct, uses the known answer to rationalize failures, fine-tunes on accepted traces, and repeats. The direct product is an iterative rationale-training set with question, gold answer, generated trace, trace type, correctness, and training round.

L4 facts: primary source https://arxiv.org/abs/2203.14465; NeurIPS 2022; boundary: post-training rationale construction with answer-level filtering, not pretraining or step verification; atlas value: a canonical self-generated demonstration loop; evaluation surface: synthetic arithmetic, CommonsenseQA, and GSM8K; collected from the official v2 paper.
