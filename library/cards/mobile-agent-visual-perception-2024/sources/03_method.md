1. Inputs: a natural-language mobile task, current phone screenshot, optional history, OCR text boxes, detected icons, and the set of allowed mobile operations.
2. Pipeline: decompose the task; observe the screenshot; locate text/icon candidates; choose the next operation such as tap, type, scroll, open app, or back; execute it on the device; update history; stop when the task is complete or the run fails.
3. Outputs: operation traces, screenshots or observations, task-level success labels, progress and efficiency scores, and Mobile-Eval aggregate metrics.
4. Feedback: Mobile-Eval supplies success rate, progress score, relative efficiency, and completion-rate-style outcomes; feedback is environmental/task-level, not a dense learned reward.
5. Reproducibility notes: pin app versions, phone/ADB environment, OCR and detector versions, GPT-4V model date, prompt policy, task split, timeout/step budget, and whether manual inspection is used for completion judgments.
