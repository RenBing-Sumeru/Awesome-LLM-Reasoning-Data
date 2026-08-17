1. **SWE data expansion:** Run MEnvAgent on multilingual pull requests containing commits and test patches, output Docker images, installation scripts, and evaluation commands, and retain only instances with reproducible fail-to-pass behavior.

2. **Agent/RLVR training:** Use MEnvData-SWE as sandbox tasks with layered rewards for test success, compilation, and environment state. Environment-construction failures must not be counted as negative rewards for model patches.

3. **Environment research:** Compare rule-based, single-agent, and multi-agent builders on MEnvBench, reporting success rate, time, and iterations. Repositories requiring private dependencies, licence servers, or hardware devices generally cannot use the public workflow directly.
