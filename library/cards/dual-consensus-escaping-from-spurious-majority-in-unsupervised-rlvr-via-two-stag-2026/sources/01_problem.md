Label-free RLVR often treats the most frequent answer sampled from a policy as a pseudo-label. On hard problems, that majority can be confidently wrong; repeatedly rewarding it collapses exploration and reinforces a dominant but spurious mode.

This paper asks whether the model can create a less brittle learning signal from its own rollouts, without an external judge or gold labels. It tests a two-stage vote that asks whether an answer remains supported after the model distribution is deliberately perturbed.
