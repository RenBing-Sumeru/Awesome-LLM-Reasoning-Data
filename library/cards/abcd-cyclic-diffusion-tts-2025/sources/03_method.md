The method combines Cyclic Diffusion Search, automatic exploration–exploitation balancing, and adaptive thinking time. It alternates denoising with selective re-noising, retains or replicates promising particles, and terminates trajectories according to the available budget.

The authors evaluate the controller on diverse diffusion tasks and compare its efficiency with fixed schedules. The training consumer is the inference controller: it decides whether to deepen, broaden, or end search rather than changing model parameters at deployment.
