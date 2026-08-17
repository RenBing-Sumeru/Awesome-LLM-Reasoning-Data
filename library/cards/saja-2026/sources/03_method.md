1. **Design a task-family rubric.** Domain experts specify broad or fine-grained dimensions once; the same scoring prompt covers MT-Bench, SummEval, and LLM-RUBRIC, while a classification prompt covers FELIX tasks.
2. **Extract features once.** A black-box LLM receives one structured prompt per item and emits integer or categorical values for all dimensions. The parsed vector can be cached and reused.
3. **Fit the calibration head.** Split 100-500 human-labeled examples into train/validation (and a separate conformal-calibration split when used); optimize MSE for scores or cross-entropy for classes.
4. **Predict and triage.** Apply the frozen head to the vector; optional isotonic/Platt calibration and conformal confidence route uncertain outputs to humans.

Reproduction requires the exact rubric, parser, judge/API version, human-label split, head/hyperparameters, and confidence threshold. The paper reports the head trains in under one CPU minute but does not disclose the proprietary dataset details.
