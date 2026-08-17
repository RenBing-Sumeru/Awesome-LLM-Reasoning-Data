Let the fixed comparison contain prompt `s`, preferred response `a_w`, and rejected response `a_l`, both sampled by the SFT behavior policy `pi_1`. For a later target policy `pi_i`, the exact pairwise importance ratio is

`w = pi_i(a_w|s) pi_i(a_l|s) / [pi_1(a_w|s) pi_1(a_l|s)]`.

Multiplying each Bradley-Terry loss by this ratio rewrites the reward-model risk under the current policy as an expectation over the fixed SFT-sampled comparisons. Under the paper's support and boundedness assumptions, the importance-weighted empirical minimizer is consistent for the target-distribution reward-model risk as the number of fixed comparisons grows.

Exact correction after every policy update would require continual reward-model retraining. OCRM therefore uses stages: train or refresh a reward model for the current policy distribution, optimize the policy for a block, recompute ratios on the unchanged comparisons, and refresh again. The new model changes the policy distribution and hence the next set of weights, but it does not add preference examples.

Raw sequence-level ratios are high variance. In the language-model experiments, the implemented weight is flattened and relative:

`w_eff = [P_current / (alpha P_SFT + (1-alpha) P_current)]^eta`,

with `eta=0.001` and `alpha=0.9`. This variance reduction deliberately reintroduces bias. The effective training distribution is therefore induced by the current policy, the fixed comparison support, and these hyperparameters; it is not an independently sampled on-policy dataset and is not released as one.
