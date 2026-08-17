1. **Run benchmark samples.** Generate 50 outputs per problem for RTLLM and VerilogEval from commercial and open models, retaining probabilities and pass@k.

2. **Detect contamination.** Apply CDD with similarity α and Min-K% Prob with K=20 and threshold T; each returns a contaminated-item rate, not ground-truth provenance.

3. **Control leakage.** Fine-tune Llama-3.1-8B separately on RTLCoder and filtered Verigen (3 epochs, lr 1e-5) to create measurable contamination settings.

4. **Mitigate and compare.** TED excludes the top τ% likely memorized outputs, then measures syntax/function pass-rate loss. Fix prompts, detector thresholds, samples, model API versions and benchmark revisions; these choices materially change the result.
