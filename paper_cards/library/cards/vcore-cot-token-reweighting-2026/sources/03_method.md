Optimization statistics generate token weights; downstream math and code correctness assesses whether the reweighted same corpus generalizes better.

A reusable implementation should log the source task, generator and checkpoint, sampling budget, complete candidate trajectory, feedback values, selection reason, and terminal outcome for every candidate.
