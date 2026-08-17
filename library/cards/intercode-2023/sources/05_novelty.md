The prior baseline is static code-generation evaluation, where a model writes one answer and a hidden test suite or reference answer scores it. InterCode changes the object from final answer to interactive episode with execution feedback.

The direction signal is strong for agent data: keep observations, actions, intermediate failures, retries, tool outputs, and final checker result. The quality signal is the standardized interface and public implementation that make multiple coding domains comparable under one protocol.

What is not new: execution feedback, unit tests, SQL answer checking, shell command execution, and CTF validation existed before. Before reuse, inspect task provenance, licenses of inherited datasets, sandbox permissions, hidden split policy, environment drift, and whether traces are suitable for training rather than only evaluation.
