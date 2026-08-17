1. Positioning: RAG-RewardBench uses fixed retrieval evidence and hard cases for citation, multi-hop reasoning, and conflict handling to create specialized feedback for failures that general RAG reward evaluation evaluation misses.

2. Method handle: collect tasks and candidates, generate feedback, verify boundary cases, and organize by capability; label review is the decisive quality control.

3. Data handle: 1,485 prompt–context–chosen–rejected preference pairs, with records centered on inputs, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: general reward-model rankings do not reliably predict RAG preference performance, with conclusions bounded by model, candidate, and judge configurations.

5. Reuse decision: best suited to evaluating or training evidence-aware RAG judges; contamination, false positives, and distributional stability must be checked.
