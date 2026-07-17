ReST alternates a Grow step and an Improve step. Grow samples responses from the current policy and attaches reward information; Improve treats the accumulated batch as offline RL data for a policy update.

The policy is thus both data producer and data consumer. Each iteration changes the available response distribution, while the reward-driven selection rule controls which parts of that distribution become learning signal.
