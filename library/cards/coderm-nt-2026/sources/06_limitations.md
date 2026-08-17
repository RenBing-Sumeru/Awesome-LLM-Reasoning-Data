The authors evaluate only Python function-level generation. Their splitting rule relies on indentation and LLM-chosen print locations, so transfer to other languages requires a new syntax-aware design; verify it rather than treating the stated possibility as evidence.

Multi-file repositories, external APIs, and stateful software enlarge both the search and trace-capture problem. The method's LLM judge also remains an imperfect verifier: before reuse, audit judge errors against independently checked programs and sandbox all execution.
