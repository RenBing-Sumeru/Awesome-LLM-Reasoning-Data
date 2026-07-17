For each task record, the aligned starting model computes supervised loss and its gradient norm. Loss outliers are removed first, then records are ranked by distance from the median gradient norm.

The retained moderate-gradient fraction is fine-tuned sequentially for each continual task. The paper uses a 0.2 fraction by default and tests 0.1–0.4, evaluating both task learning and safety attacks.
