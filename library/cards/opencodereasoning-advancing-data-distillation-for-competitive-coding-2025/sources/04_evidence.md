The main evaluation uses LiveCodeBench 2408-2502 (279 problems) and CodeContests. The paper reports average pass@1 over 64 LiveCodeBench generations and 16 CodeContests generations, while Table 2 says baseline rows were run once. After 3-epoch SFT on the full Python corpus, OCR-Qwen-32B reaches 61.8 on LiveCodeBench and 24.6 on CodeContests, compared with R1-Distill-Qwen-32B at 58.1/18.3, QwQ-32B at 61.3/20.2, and DeepSeek-R1 at 65.6/26.2. OCR-Qwen-7B-Instruct reaches 51.3/18.1. These are model outcomes under the paper's evaluation protocol, not direct measurements of row correctness.

The scaling curve expands from 25k to 100k and finally 736k samples; the authors report that it has not plateaued and attribute the largest final gains to adding unique, varied, difficult questions. The paper does not isolate unique-question count from total response count in a complete factorial design.

The execution-filtering ablation provides the most important negative result:

| Qwen2.5-14B-Instruct training subset | Rows | LiveCodeBench | CodeContests |
|---|---:|---:|---:|
| All CodeContests-derived rows | 445,618 | 54.1 | 16.59 |
| Unit-test-passing rows | 151,251 | 47.0 | 15.34 |
| Equal-sized all-failing rows | 151,251 | 52.3 | 15.53 |

The authors link the result to harder questions being overrepresented among failures and argue for instruction diversity. The defensible conclusion is narrower: in this selection setup, correctness-only filtering removes useful coverage. It does not show that incorrect reasoning is intrinsically better training data.

For OCR-Qwen-32B-Instruct, adding 356K C++ samples changes LiveCodeBench/CodeContests/IOI from 61.7/24.4/145.5 to 61.5/25.5/175.5, supporting language-specific IOI transfer without consistent Python-benchmark gain. Finally, the paper's 736,712-row total differs from the HF 1.0 card's 735,255; this release discrepancy is evidence for pinning, not evidence about data quality.
