1. **Select tasks:** Reasoning and perception questions are sampled from 18 visual datasets and normalized into image-question-answer records.
2. **Generate traces:** Multiple LVLMs produce initial answers and chain-of-thought traces, preserving both successful and failed cases.
3. **Segment steps:** Reasoning is decomposed into atomic steps, each labeled for correctness and whether the error depends on visual evidence.
4. **Write critiques:** Human or high-quality annotation processes provide explanations and revision suggestions for erroneous steps and define corrected outcomes.
5. **Two-stage evaluation:** Models first critique each step, then use the critique to revise the answer and reasoning. LookBack explicitly requires rechecking the image.
