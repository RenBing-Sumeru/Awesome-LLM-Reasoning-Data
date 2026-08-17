The authors use Qwen2.5-32B-Instruct as the rewriter, build the long-short mixture, and fine-tune student models on it. The official project releases code, the s1K-mix dataset, and the s1-mix-32B model, enabling the rewrite and training consumer to be inspected.

The evaluation compares mixture SFT with direct SFT on long CoT data across reasoning benchmarks. The central intervention is the training-record mixture, not a new optimizer: both long and structure-preserved short paths are deliberately retained instead of uniformly shortening all traces.
