1. **Failure categorization:** Four multi-turn challenge types are derived from real usage scenarios and errors made by strong models, emphasizing state changes missed by single-turn benchmarks.

2. **Dialogue construction:** Natural sequential interactions are designed for each category, distributing important constraints, corrections, or traps across multiple turns.

3. **Target definition:** A later response is selected for evaluation, with explicit specification of which earlier information must be inherited, updated, or rejected.

4. **Rubric writing:** An instance-specific rubric defines required content, prohibited errors, and cross-turn consistency conditions.

5. **Dual evaluation:** An LLM judge scores responses according to the rubric, and experienced human reviewers validate agreement and difficulty on sampled cases.

**Reproducibility information:** The official data and evaluation code are released, although results may change with judge and evaluated-model versions.
