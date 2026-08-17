The reconstructable pipeline is:

1. **Input pool.** Take all 7,500 MATH training problems with Levels 1-5. The paper reports that Level 5 is about 24% of the pool.
2. **Multi-mode generation.** Query Qwen2.5-32B-Instruct in Instruct mode and DeepSeek-R1-Distill-Qwen-32B in Think, NoRethink, and NoThink modes. Generation uses temperature 0.6, top-p 0.95, a 16,384-token maximum sequence length, and up to four attempts per problem and condition. The Think response's condensed final solution is retained for a separate single-stage comparison.
3. **Verification and intersection selection.** Apply Math-Verify to final answers. Keep a problem only when all four conditions have at least one correct sample. This leaves 6,445 of 7,500 problems; the paper does not say that failed attempts or verifier outputs are preserved.
4. **Stage 1 assembly and SFT.** Pair Levels 1-4 with Instruct outputs and Level 5 with NoThink outputs. Fine-tune Qwen2.5-3B or Qwen2.5-3B-Instruct.
5. **Stage 2 assembly and SFT.** Starting from the Stage 1 student, pair Levels 1-4 with NoThink outputs and Level 5 with NoRethink outputs. This is offline supervised fine-tuning; no online reward update or interactive environment is used.

The reported training protocol uses LlamaFactory, two epochs, a cosine learning-rate schedule, and maximum learning rate `1e-5`; Section 4.2 says it follows the single-stage protocol but does not separately tabulate stage-specific steps. Evaluation uses the same temperature, top-p, and 16,384-token cap, with 32 samples per AIME/AMC problem and 8 per MATH-500, Minerva, and OlympiadBench problem; results are reported as Pass@1. (Paper Sections 4.1-4.2.)

A faithful reproduction must additionally pin the exact teacher/student checkpoint revisions, complete prompts and answer extractor, random seeds, retained MATH indices, per-attempt verifier records, the two curriculum manifests, hardware, and stage-specific optimization steps. None of these artifacts is released. The official checklist marks computational budget/infrastructure as reported, but the proceedings text does not identify hardware or GPU hours.
