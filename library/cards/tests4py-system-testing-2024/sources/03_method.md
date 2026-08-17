Inputs: project id, bug id, buggy or repaired checkout choice, working directory, tests or generated inputs, optional grammar information, and command settings. The official README documents the `t4p` CLI with commands including `info`, `checkout`, `build`, `test`, `unittest`, `systemtest`, `grammar`, `sfl`, and `run`.

Pipeline: select a subject; check out the target project version; build the project with the correct Python version and dependencies, using pyenv-backed setup; run original tests or generated tests; execute candidate system inputs through the oracle; collect reports. The benchmark also supports generating passing and failing unit/system tests in configurable numbers.

Outputs: reports from CLI/API commands, passing or failing tests, generated test files or system-test inputs, oracle outcomes, and auxiliary data for debugging or fault localization. The verifier/reward surface is not learned; it is the project-specific test/oracle execution provided by Tests4Py.

Training or evaluation use: primarily evaluation, qualitative analysis, debugging studies, and automatic program repair experiments. For LLM-agent reuse, record the exact PyPI/GitHub version, project and bug id, Python runtime, dependency state, cache policy, generated-test options, and command transcript.
