Test-time sampling creates many plausible agent trajectories, but a coarse language-model judge often assigns tied discrete scores. More candidates therefore increase verification cost without reliably improving the choice of trajectory.

This paper asks how verification itself should scale when it is the bottleneck in test-time search. It studies continuous trajectory comparison, repeated checks, and decomposed criteria as alternatives to treating one fixed judge call as sufficient.
