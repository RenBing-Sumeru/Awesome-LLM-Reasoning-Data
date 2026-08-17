1. **Build the guideline:** The authors decompose evaluation into hierarchical tasks, protocols, and criteria, specifying the fields required for pointwise grading and pairwise comparison.
2. **Construct instances:** Questions and candidate answers are collected from diverse Chinese and English tasks, with applicable criteria, references, and judgment requirements prepared for each instance.
3. **Generate supervision:** A strong teacher produces natural-language critiques, scores, or preferences under the criterion, followed by rule-based and quality checks.
4. **Multi-task training:** All languages and evaluation modes are converted into a unified instruction format for supervised fine-tuning of a 7B base model.
5. **Unified inference:** Prompts switch among pointwise, pairwise, and feedback modes. The repository releases the model, dataset entry, and inference templates, while the full generation budget is not disclosed.
