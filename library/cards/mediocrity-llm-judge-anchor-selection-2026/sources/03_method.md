1. **Build the response pool:** Arena-Hard-v2.0 prompts and multi-model responses are reused while keeping the set of ranked models fixed.


2. **Rotate anchors:** Twenty-two anchors spanning ability levels are selected, and each candidate response is compared with the corresponding anchor response.


3. **Collect multi-judge labels:** Five judges output winners, ties, and confidence information, producing roughly nine hundred thousand judgment records that are aligned with human model rankings.


4. **Analyse informativeness:** The study computes ranking correlation, win-rate distributions, and statistical power for each anchor and estimates the sample size needed to distinguish models. Reproduction requires fixed response versions, judge prompts, and pair order.
