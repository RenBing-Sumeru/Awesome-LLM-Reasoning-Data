1. **One-sentence position:** CHIMERA uses a hierarchical taxonomy and multi-model cross-validation to build about 9K compact reasoning examples across eight disciplines.

2. **Method hook:** It defines knowledge coverage first, generates problems and long CoT at taxonomy leaves, and retains only multi-model-consensus examples.

3. **Data hook:** The corpus has about 9K records, eight major disciplines, and over 1,000 fine-grained topics, with topic, question, reasoning, and answer fields.

4. **Evidence anchor:** A 4B model approaches larger systems on several math and science benchmarks, supporting data efficiency but not item-level truth guarantees.

5. **Reuse decision:** It fits compact cross-domain SFT and coverage studies. Independently verify high-risk answers and teacher-style bias.
