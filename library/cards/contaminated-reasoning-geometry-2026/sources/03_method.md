1. Input a base model, a model exposed to contaminated examples, and matched clean and leaked reasoning items.
2. Record layerwise representations and gradients, whiten their covariance structure, and measure their mutual-information decay.
3. Inspect representation eigenspectra and compare the contaminated model with the base model to identify spectral concentration and lower-dimensional computation.
4. Test whether the whitened representation--gradient coupling has structural singular-value decay, then use the derived narrowing signal as a decision surface for contaminated reasoning.
5. Apply the paper's causal intervention to the narrowed computation and compare the resulting responses with the base model on leaked inputs. The repository exposes experiment scripts and several model/task settings; exact data release details, some training settings, and resource budgets must be checked in the original release.
