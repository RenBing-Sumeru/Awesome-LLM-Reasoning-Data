1. Inputs: question text, original images, public web evidence targets, domain/category metadata, gold answer, sub-goals, and trajectory annotations.
2. Pipeline: experts define dimensions, annotators perform tool-augmented exploratory search, verifiers replay trajectories, SOTA models filter trivial examples, and approved samples are converted to unified JSON.
3. Outputs: benchmark records, sub-goals, interaction trajectories, final answers, Success Rate, and Process Score.
4. Environment/judge: agents may use TextSearch, WebVisit, ImageSearch, ImageCrop, and ReverseImageSearch; evaluation checks final answer and proportion of achieved ground-truth sub-goals.
5. Reproducibility: pin any released JSON, search APIs, browser/parser, image tools, 20-round interaction budget, 30-minute human baseline policy, model services, and date of web access.
