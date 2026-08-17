The strongest construction evidence is the internally consistent count ledger in the 54-page ICLR final:

| Stage | SWE-bench-Lite | WebArena | OSWorld | Spider2-V | Total |
|---|---:|---:|---:|---:|---:|
| Documents | 6,464 | 3,578 | 7,362 | 11,231 | 28,635 |
| Raw trajectories | 19,392 | 10,734 | 22,086 | 33,693 | 85,905 |
| Backward-constructed candidates | 180,752 | 185,635 | 437,635 | 652,786 | 1,456,808 |
| Filtered examples | 101,523 | 109,276 | 103,526 | 125,683 | 440,008 |

The raw-trajectory row is exactly three times the document row for every environment, matching the stated instruction budget. Retention from candidates to filtered examples is about 30.2% overall. This is evidence about the reported pipeline volume, not proof that retained examples are correct or independent.

The ICLR final also reports downstream behavioral evidence. Its largest ICL gain is 11.1 percentage points for Claude-3.5-Sonnet on OSWorld, from 11.4 to 22.5. For training, Codestral-22B on WebArena rises from 4.7 before tuning to 27.8 after SFT, a 23.1-point increase. The final-paper values control this Card; arXiv v1 reports older counts and headline deltas, including +12.2 ICL and +19.5 training, and should not be mixed with the venue-final tables.

Ablations support several narrower claims. Short subtrajectories are individually more useful than longer ones in the reported comparisons, while mixing short, medium, and long segments performs best under a matched 200M-token budget. Scaling experiments report continued benefits up to 100,000 examples. The backward-construction comparison reports a final-paper gain of up to 10.6 points over construction without that step.

Evaluation is environment-specific: SWE-bench applies generated patches and measures pass@1; WebArena combines Claude-based fuzzy matching with string matching; OSWorld uses task-specific environment-state scripts; Spider2-V combines file, information, and execution checks. These evaluations are meaningful for downstream agent behavior, but they combine data quality with base-model capacity, retrieval design, fine-tuning choices, and evaluator behavior.

No independent rerun, confidence interval, committee-accuracy study, record-level audit, or released corpus was found. The evidence therefore supports an effective reported recipe, not verified artifact availability or sample-level quality.
