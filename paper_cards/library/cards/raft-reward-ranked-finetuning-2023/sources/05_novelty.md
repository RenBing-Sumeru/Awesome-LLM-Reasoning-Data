RAFT makes best-of-n selection an explicit training-data operation. The reward model chooses a record instead of supplying a gradient to the policy.

This separates feedback evaluation from the SFT update while keeping both in an iterative loop.
