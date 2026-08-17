1. **Prepare long documents:** Preserve questions, full contexts, and reference answers from multi-hop QA and long-context tasks.
2. **Self-sample paths:** Ask the current model to generate multiple chains containing evidence localization, information linking, and answer generation.
3. **Evaluate and filter:** Remove low-quality traces using terminal correctness, key-evidence coverage, and path coherence.
4. **Apply process supervision:** Fine-tune on 6,300 selected paths and compare with outcome-only supervision on the same base model.
