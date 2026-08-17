1. Screen 82 candidate resources and retain 17 existing datasets spanning unknown answers, false premises, stale facts, subjectivity, and underspecification.
2. Create underspecified versions of GSM8K, GPQA, and MMLU-Math; combine them with UMWP to cover reasoning settings.
3. Form 20 datasets with over 35,000 unanswerable prompts and answerable controls, capping each dataset at 3,500 examples.
4. Sample model responses with a 4K generation limit under the stated decoding settings.
5. Use Llama 3.1 8B Instruct with a yes/no rubric to judge abstention, and a separate judge for answer correctness where references exist.
6. Report abstention recall, precision, F1, and response accuracy; compare scales, post-training, reasoning budgets, and a prompting intervention.

The paper releases the benchmark and evaluation code, but exact results depend on model version, prompt, decoder settings, and judge protocol.
