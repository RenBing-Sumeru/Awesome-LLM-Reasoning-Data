Preference optimization needs a clear difference between chosen and rejected answers. Rejection sampling and reward-model scoring can create pairs whose two responses are similarly good, making the preference signal weak.

SeaPO asks how to build negative preference evidence that exposes the errors a model should stop making. It changes the rejected response itself rather than relying on a stronger scorer to find one.
