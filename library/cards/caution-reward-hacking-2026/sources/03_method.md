1. Sample typical responses from the generator for prompts in a training distribution.
2. Freeze a reward model and extract its layer-L hidden representation as a target feature.
3. Train a lightweight predictor to reconstruct that feature with mean-squared error; prediction error is the uncertainty signal.
4. For each test prompt, generate N candidates and compute reward, target features, and predictor error in parallel.
5. Form a pessimistic reward r-hat minus λ times error, then return the highest-scoring candidate; λ=0 is ordinary Best-of-N.
6. Evaluate peak, final-at-N=512, and degradation accuracy across GSM8K, MATH-500, and BigBench-Hard. Prompt distributions, generator, reward models, λ, and sampling budget must be fixed; code is not independently verified.

The selection check is true-answer accuracy on held-out tasks as N scales, not only the modified reward value.
