Answer correctness supplies offline signs for each trace; the refinement objective converts those labels into positive and negative learning signals without new online rollouts.

A reusable implementation should log the source task, generator and checkpoint, sampling budget, complete candidate trajectory, feedback values, selection reason, and terminal outcome for every candidate.
