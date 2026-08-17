1. Paper V1 contains 447K verified question-solution-test triplets across twelve source families; current V1.1 counts are larger.
2. GPT-4o regenerates solution and tests together up to ten times, and acceptance requires execution plus 100% branch coverage.
3. DeepSeek-R1 receives three attempts per question; the public SFT data separates 268,211 verified records from 210,787 incorrect ones.
4. External tests catch residual self-verification errors: 78/80 MBPP and 189/190 LiveCodeBench retained solutions pass.
5. The data is CC BY-NC 4.0, while code is Apache-2.0; caution and provenance fields should remain attached in reuse.
