1. **Prompt collection:** Real-user instructions are filtered from WildChat-1M, retaining examples with explicit requirements that are suitable for automatic checking.

2. **Checklist generation:** A strong model decomposes each instruction into several concrete and relatively independent success conditions covering content, format, and constraints.

3. **Response sampling:** Policy models such as Qwen2.5-7B-Instruct generate candidate responses, creating comparable outputs for the same prompt.

4. **Item-level verification:** General semantic requirements are assessed by language-model judges, while deterministic constraints such as length, keywords, or structure are checked by specialized verifiers.

5. **Feedback construction:** Item-level pass results are aggregated into rewards and preference labels, producing WildChecklists for RLCF or offline preference training.

**Reproducibility information:** The official Hugging Face dataset and training code are released, although checklist quality remains dependent on the generator and verifier configuration.
