Fixed diffusion schedules spend the same denoising effort on easy and hard inputs. They cannot decide whether another refinement cycle will discover a better solution or simply consume latency.

ABCD asks how diffusion inference can allocate computation per instance. Its target is an adaptive controller that can revisit a promising state, branch when uncertainty is useful, and stop when the expected return no longer justifies another cycle.
