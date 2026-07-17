The training data are repeatedly split in two. DPO models trained on each partition score the held-out partition, and the resulting validation losses are averaged to rank individual preference pairs by difficulty.

Selective DPO selects a thresholded prefix of this ranking and runs ordinary DPO only on that subset. The authors use three splits, yielding six reference models, and tune the selected fraction to the target model capacity.
