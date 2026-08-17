1. **Define the judgment contract.** Each question, retrieved-paper context, and generated answer is rated from 1 to 5 on nine rubrics covering linguistic quality, logical structure, and content accuracy; the judge returns JSON scores and rationales.

2. **Build answer variants.** Four open generators create benign answers for 348 ORKGSyn and 73 BioASQ summary questions. Rubric-specific heuristics then create subtle and extreme degradations; the known edit is the test oracle for a score decrease.

3. **Collect and align judges.** Four models rotate as judges over every rubric and variant. LLaMA-3.1-8B is first QLoRA-SFTed on score/rationale records, then optimized with CPO preference pairs that prefer appropriate benign/adversarial discrimination.

4. **Evaluate robustness.** Compare vanilla and aligned judges across the fixed variants. Reproduction requires the corpus version, nine rubric prompts, perturbation scripts, model checkpoints, ordering, and sampling settings; compute cost and some generation settings are not fully reported.
