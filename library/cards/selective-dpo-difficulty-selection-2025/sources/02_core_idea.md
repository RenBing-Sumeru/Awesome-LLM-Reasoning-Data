The core idea is that an example's value depends on the learner, not only on its label quality. Validation loss from independently trained DPO reference models is used as a computational proxy for the step at which a pair becomes learnable.

The final training set is therefore a capacity-matched subset. Larger models can retain a larger share of hard pairs, while smaller models benefit from excluding examples that their current preference representation cannot reliably learn.
