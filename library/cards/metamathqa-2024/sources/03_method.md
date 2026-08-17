# Method

1. **Prepare seeds.** Input: GSM8K and MATH training questions, rationales, and final answers. Operation: normalize each as an original `(question, rationale, answer)` record. Output and transition: seeds enter response and question augmentation. Check / stop rule: only official training splits are used.
2. **Augment answers.** Input: each seed, few-shot CoT prompts, and GPT-3.5-Turbo. Operation: sample multiple worked solutions and extract final answers. Output and transition: accepted rationale records enter `D_AnsAug`. Check / stop rule: retain paths whose answers match the reference.
3. **Bootstrap questions.** Input: seeds and transformation prompts. Operation: create rephrasing, self-verification, and forward-backward (FOBAR) variants, then generate worked targets. Output and transition: `D_rephrase`, `D_SV`, and `D_FOBAR` preserve transformation and original-record lineage. Check / stop rule: known quantities and answers constrain validity; malformed variants are removed.
4. **Merge and train.** Input: 155k answer-augmentation, 130k rephrasing, 55k self-verification, and 55k FOBAR records. Operation: merge 240k GSM8K-derived and 155k MATH-derived examples, serialize them as instruction/output, and run causal-LM SFT on LLaMA-2 7B/13B/70B. Output and transition: MetaMathQA plus MetaMath checkpoints. Check / stop rule: GSM8K/MATH exact-answer evaluation and transformation ablations determine utility; no RL stage is added.

**Reproducibility:** verify the official OpenReview paper, MetaMathQA dataset, Apache-2.0 repository, transformation prompts, and training scripts. Fix teacher version, prompt templates, sampling seed, data revision, and answer parser; exact teacher-call/token cost and a semantic duplicate threshold are not reported.

