The primary record is a mathematical problem paired with a generated natural-language proof and human evaluation.

Recorded or optionally recorded fields include:

- problem identifier and statement;
- generated proof;
- solver model identifier;
- one or two human correctness labels;
- written grading feedback;
- judge uncertainty flag;
- optional sentence-level error annotations;
- one or two judge identifiers;
- competition, level, source, source URL, and year;
- optional official solution and issue notes;
- optional model thinking;
- token counts, generation cost, and timestamp;
- O4-MINI proof summary and suggested issues;
- best-of-N selector metadata.

The current public Hugging Face snapshot is described in the metadata as containing 4,934 rows across six splits:

| Split | Public rows | Intended reading |
|---|---:|---|
| `generic` | 3,039 | General released proof records; training eligibility still depends on provenance and task policy. |
| `test` | 292 | Held-out evaluation; must not enter training. |
| `putnambench` | 564 | Benchmark analysis; must not enter training. |
| `matharena` | 310 | Benchmark analysis; must not enter training. |
| `best_of_n` | 252 | Selector and best-of-N analysis with nonuniform candidate-label coverage. |
| `pass_at_n` | 477 | Repeated-sampling analysis rather than an automatically safe training split. |

The paper reports 5,062 proofs, whereas the checked public snapshot contains 4,934 rows. SMT withholding is documented, but the complete 128-row difference is not yet reconciled.
