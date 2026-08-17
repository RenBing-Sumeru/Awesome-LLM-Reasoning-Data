1. **Collect judge evidence.** For candidate responses, obtain comparative or absolute output probabilities from an LLM judge.

2. **Fit a PoE ranking model.** Map each output to a comparative expert; combine experts to infer latent item scores. The paper compares soft Bradley--Terry, generalized Beta, Gaussian, and comparative-plus-absolute variants.

3. **Estimate uncertainty.** Use a Laplace approximation around the inferred scores to obtain covariance, pairwise variance, and probability of reordering.

4. **Acquire and update.** Select the pair with high reordering probability, query it, refit, and stop at the allotted comparison budget. Prompt templates, temperatures, and code are not publicly confirmed.
