1. **Positioning:** Existing MLLM alignment often targets isolated problems such as hallucination or safety and lacks large, fine-grained human preference data covering general capability and safety.
2. **Method handle:** The decisive actions are assemble fine-grained human comparisons, train the critique-based reward model, scale samples by reward differences, followed by align and evaluate the mllm.
3. **Artifact handle:** MM-RLHF releases 120K fine-grained human-annotated multimodal preference pairs.
4. **Evidence anchor:** Evaluation spans ten dimensions and 27 benchmarks.
5. **Reuse decision:** The annotation policy and candidate models constrain what preferences are represented.
