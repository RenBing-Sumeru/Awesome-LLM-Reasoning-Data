The novelty is not simply using another verifier. The interesting change is treating verifier false negatives as a recoverable training signal problem, rather than accepting the rule verifier's rejection as final.

Compared with pipelines that rely on exact answer checks alone, TinyV adds a learned correction layer that can change which rollouts become reward-positive examples.
