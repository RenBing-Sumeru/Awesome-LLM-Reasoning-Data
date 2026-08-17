Use MMBench-GUI as a schema for GUI-agent evaluation: platform, level, task instruction, screenshot/state, target element, action space, observation stream, evaluator, timeout, success flag, efficiency score, and trace provenance. It helps separate perception failures from action-planning and environment-execution failures.

For post-training data, preserve per-step observations and actions only when the environment version and evaluator contract are recorded. Static screenshots can support grounding data; interactive episodes need runtime metadata before they are reusable.
