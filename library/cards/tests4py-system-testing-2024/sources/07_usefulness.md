Use Tests4Py when a project needs executable Python testing tasks with oracles. It is useful for studying generated tests, fuzzing-style system inputs, debugging workflows, statistical fault localization, and repair tools that need richer signals than a single failing unit test.

For LLM-agent evaluation, the attractive feature is the command surface. An agent can inspect available projects, check out a bug, build it, write tests or inputs, run them, and receive structured feedback. That makes the benchmark a candidate substrate for controlled agent episodes.

The most important reusable fields are project id, bug id, checkout mode, Python/runtime version, test or input path, oracle setting, generated-test options, command reports, and pass/fail/fault-localization outputs.
