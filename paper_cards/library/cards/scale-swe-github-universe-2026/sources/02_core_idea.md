ScaleSWE delegates environment setup, test creation, and problem-description synthesis to specialized agents, then packages pull-request context as a Docker-backed task. A record binds the problem, patch, tests, and optional trajectory; fail-to-pass and pass-to-pass behavior defines whether the task contract is met.

The central contribution is this executable data interface. It is useful for agent SFT and distillation because the behavior trace remains connected to the environment that can check the final patch.
