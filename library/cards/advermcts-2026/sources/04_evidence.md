The evidence supports an inference-time search improvement and also exposes verifier error; it does not establish that the transient counterexamples are a clean reusable dataset.

| Evidence | Reported result | What it supports | Boundary |
|---|---|---|---|
| Table 1, Qwen3-4B-Instruct-2507 | AdverMCTS averages 49.67 Pass@1 on APPS and 38.00 on TACO, versus 43.44/31.00 for MCTS-Thought and 43.67/33.67 for RethinkMCTS | the full method improves final program selection under the reported setup | benchmark performance is not a direct measure of test-label quality |
| Figure 4 ablation | Full method reaches 49.7/38.0; removing the Attacker tree gives 43.3/31.0, removing divergence-driven synthesis 46.0/33.7, and removing the Global Filtering Hub 48.3/35.3 | each named component contributes under the controlled budget | it does not isolate every interaction or externalize the generated records |
| Table 3, TACO gold-code check | Arbiter-labeled tests are valid 79.88% of the time, versus 37.88% for majority voting; downstream Pass@1 is 49.67/37.33 versus 43.67/32.67 | the Arbiter is a better labeler than the tested voting baseline | roughly one fifth of tested Arbiter labels still fail gold-code validation |
| Figure 7, discriminator audit | 165 of 291 pseudo-correct programs are killed: 56.7% recall and 78.95% precision; 44 truly correct programs are mis-killed, a 16.1% false-positive rate | retained tests detect many silent bugs but also poison some decisions | substantial false negatives and false positives remain |
| Appendix C.1 oracle-test study | Giving MCTS-Thought half of the hidden tests raises average Pass@1 from 43.44 to 55.33 on APPS and 31.00 to 43.67 on TACO | weak visible verification is a limiting factor | hidden-test access is an oracle diagnostic, not a deployable method |
| Appendix C.3 attacker budget | APPS Competition rises from 31% at one Attacker rollout to 36% at two; larger budgets can saturate or degrade | more adversarial search is not monotonically beneficial | exact cost-effectiveness remains unreported |

Table 2 further reports that removing Solver context, replacing Attacker MCTS with Best-of-N, or using Random-MCTS reduces the averages relative to the full method. Figure 5 reports that the 16-rollout method surpasses a 32-sample baseline with fewer tokens, but the plot does not supply a complete reproducible cost ledger, so this Card does not convert the claim into exact efficiency numbers.

All figures above are author-reported. The inspected repository contains implementation code but no immutable release, published result bundle, generated test set, exact sampled problem IDs, or independent reproduction. Consequently, evidence confidence is medium despite clear paper-level ablations.
