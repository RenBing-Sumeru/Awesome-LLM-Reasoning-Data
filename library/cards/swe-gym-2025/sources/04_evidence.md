The official PMLR record reports 2,438 tasks and ICML 2025 publication. Fine-tuning the OpenHands 32B agent on 491 successful trajectories raises SWE-Bench Lite and Verified resolution to 15.3% and 20.6%, absolute gains of 12.3 and 13.6 points over the stated baseline. These results demonstrate utility of the reported environment and SFT setup, not correctness of every task or license completeness.

Verifier-guided inference reports 32.0% on SWE-Bench Verified and 26.0% on Lite. Increasing candidate count shows roughly log-linear gains in the tested range, but Best@k remains below Pass@k: the learned verifier does not always select an available successful patch.

The paper also supplies negative evidence. Mixing 868 reported on-policy successes with 491 off-policy successes reduces OpenHands Lite performance from 15.3% to 8.7%. Moatless 32B plateaus after one iteration. These results warn that success-filtered self-improvement can amplify task-selection and distribution bias.

Unit tests are executable feedback, not a semantic proof. Incomplete, flaky, or exploitable tests can accept wrong patches or reject correct ones. No released audit quantifies test or learned-verifier false positives, false negatives, nondeterminism, or reward hacking.
