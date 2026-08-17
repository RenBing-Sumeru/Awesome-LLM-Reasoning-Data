The paper was first made public in 2025 as arXiv:2506.04178 and was subsequently accepted as an **ICLR 2026 Oral**. The official OpenReview record, ICLR virtual page, arXiv v2 full text and appendices, OpenThoughts project site, repository, and OpenThoughts3 dataset/model pages form the primary-source boundary for this Card. The 2025 publication year and 2026 venue year describe different events and should not be collapsed.

The engineering question is how to choose a supervised reasoning-data recipe when question source, source mixing, prompt-quality filtering, repeated teacher sampling, answer filtering, teacher choice, and data scale can all change a student's downstream behavior. Frontier recipes usually disclose too little to isolate these factors, while reproducing them requires expensive teacher inference and repeated student training. OpenThoughts studies those choices through more than 1,000 controlled experiments and then scales the selected recipe into OpenThoughts3.

One released record is an offline, single-turn SFT item with four visible fields:

| Field | Released content |
|---|---|
| `difficulty` | Integer prompt-difficulty metadata |
| `source` | Coarse source label |
| `domain` | Math, code, or science |
| `conversations` | Normally a human question followed by a QwQ-32B assistant message containing reasoning and the final answer |

The assistant message is the answer-level supervision target. It has no attached correctness label, unit-test output, reward, process label, acceptance score, upstream item ID, source revision, license, sampling seed, or decontamination decision. The 1,200,000 released rows are in one `train` split across 120 Parquet shards, approximately 850k math, 250k code, and 100k science.

This belongs in **Data Construction & Open Release Recipes** because it exposes the source → prompt filter → deduplication/decontamination → repeated teacher generation → SFT → release chain and tests several choices inside that chain. It is not an RLVR, preference, PRM, or interactive-agent release: the paper trains OpenThinker3-7B only with SFT, and the public object does not contain rewards, preference pairs, step labels, environment state, or replayable episodes.

The Card reaches L4 because the complete bilingual analysis is grounded in the paper and appendices plus inspectable official code, data, model, project, and venue artifacts. L4 does not certify safe reuse: unresolved source rights, coarse row-level provenance, absent rejection logs, unverified teacher answers, and a plaintext credential in current official configs remain blocking audit findings.
