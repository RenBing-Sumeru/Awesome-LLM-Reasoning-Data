1. **Collect examples:** Images, questions, and multiple model responses are gathered from visual QA and multimodal instruction tasks, covering perception and reasoning.
2. **Build preferences:** Human quality judgments form the HQ set, while hallucinations, fine-grained differences, and strong distractors are selected for HARD.
3. **Transform tasks:** The same content is converted into absolute scoring, pairwise choice, and multi-response ranking to keep evaluation objects comparable.
4. **Test judges:** Candidate MLLMs inspect both images and text, outputting scores, preferences, or rankings that are compared with human labels.
5. **Diagnose biases:** Answer order is swapped and explanations and hallucination cases are analyzed to measure position bias, inconsistency, and neglect of visual evidence.
