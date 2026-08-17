1. **One-sentence position:** Big-Math turns heterogeneous open mathematics resources into 251,122 RL prompts governed by uniquely verifiable closed-form answers.

2. **Method hook:** The key is not generating more CoT, but multi-source aggregation, decontamination, task-type filtering, and open-ended reconstruction of 47,010 multiple-choice questions.

3. **Data hook:** Fields are problem, answer, source, domain, and llama8b_solve_rate; the verified release must be kept separate from the unverified hard subset.

4. **Evidence anchor:** Source counts, filters, and manual stage-level checks are public, supporting auditability but not formally proving every answer correct.

5. **Reuse decision:** It fits mathematical RLVR with normalizable answers. Test semantic answer equivalence and contamination first, and use another verifier for proof tasks.
