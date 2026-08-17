The central contribution is a trace pool in which answer acceptance, judged reasoning validity, teacher identity, and two process descriptors remain distinct variables. The paper then selects traces for a target model from the RV-CD space instead of treating every answer-correct CoT as interchangeable.

| Contract element | Released or reported object |
|---|---|
| Outer unit | One `question` row |
| Nested unit | One record in the row's `reasoning` list |
| Trace content | `thought`, `solution`, and their `full_response` concatenation |
| Generator metadata | `teacher`; final ACL paper names DeepSeek-R1, DeepSeek-R1-0528, and QwQ-32B |
| Process judgment | `thought_correctness_verify`, derived from a prompt that evaluates reasoning and solution independently |
| RV object | `level` 0-9 and `judge`; paper's final RV blends judge score and normalized token length with alpha=0.5 |
| CD object | `level` 0-9 and `judge`, describing the competence needed to reproduce the method |
| Release layout | 708,009 outer rows, one `train` split, 135 Parquet shards, Apache-2.0 repository metadata |
| Not present | Prompt source/domain, rejection reason, verifier trace, generation settings, run ID, split beyond `train` |

The feedback contract has four layers. First, code execution or hybrid math/science validation decides final-answer acceptance. Second, the logical validity of the reasoning is recorded separately and does not control retention. Third, QwQ-32B supplies holistic CD and judge-side RV scores, with length also entering final RV. Fourth, downstream experiments transform these annotations into selection probabilities, verbosity preference pairs, or learned scalar reward terms.

This separation prevents several category errors. A `thought_correctness_verify=true` trace is not a step-level proof; an RV/CD difference is not a correctness preference; a dataset row is not one CoT; and an Apache-2.0 repository label does not restore missing upstream provenance. OmniThought-0528 is a separate supplemental artifact rather than an implicit part of every main-release row.
