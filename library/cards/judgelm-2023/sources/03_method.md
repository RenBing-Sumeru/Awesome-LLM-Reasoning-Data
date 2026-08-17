1. Inputs: task seeds, generated candidate answers, optional reference answers, and GPT-4 prompts for judgment generation.
2. Data construction: GPT-4 produces judgments for answer-pair and related judging formats; the released JudgeLM-100K supplies supervised judge examples, with a 5K validation set reported by the official repository.
3. Training: Vicuna/LLaMA-based models are fine-tuned with answer-pair support; reported settings include 3 epochs, 2e-5 learning rate, 2048 max length, and swap/reference-drop ratios in the training script.
4. Bias handling: swap augmentation targets position bias, reference support and reference drop target knowledge/reference dependence, and format design targets output parsing.
5. Outputs and contract: the judge emits a verdict or score/rationale that is compared with the GPT-4 teacher judgment or benchmark label.
6. Reproducibility boundary: pin base-model license and weights, JudgeLM data revision, GPT-4 teacher version if regenerating data, prompt format, reference policy, swap augmentation ratio, model size, GPU stack, and evaluation parser.
