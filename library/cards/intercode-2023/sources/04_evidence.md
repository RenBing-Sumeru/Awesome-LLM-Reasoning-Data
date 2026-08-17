The paper evaluates language-model agents under the InterCode protocol and reports that execution feedback is central to performance on interactive coding tasks. The official project and GitHub repository provide the benchmark interface and runnable environment code.

The row-level decisive evidence is an episode log plus the environment's final predicate: the agent's commands were executed in a particular environment, observations were returned, and the terminal checker accepted or rejected the task. Aggregate scores summarize many such episodes but do not replace the trace.

Evidence boundary: scores depend on task split, runtime image, dependency versions, command permissions, step and time budgets, and prompting scaffold. A successful episode proves task success under that environment configuration; it does not prove general coding competence or secure behavior.
