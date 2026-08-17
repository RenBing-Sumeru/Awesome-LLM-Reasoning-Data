Tests4Py addresses a benchmark-design problem in software testing research: many bug benchmarks provide real faults and sparse unit tests, but they often lack strong system-level oracles and interfaces for generated inputs. The paper appeared in FSE 2024 and is available as arXiv:2307.05147; arXiv v2 was revised on 2024-05-14.

The concrete problem is to evaluate testing, debugging, and repair methods on Python programs where both unit-test and system-test generation can be exercised. Tests4Py is derived from BugsInPy and includes 73 bugs from seven real-world Python applications plus six bugs from example programs. Each subject is equipped with an oracle for functional correctness and supports generating or running system and unit tests.

The data object is an executable benchmark subject: checkout metadata, buggy/repaired versions, project-specific runtime, predefined tests, generated tests, grammars or input interfaces, oracle execution, and reports. The evaluation surface is environmental and programmatic because success depends on running inputs or tests against a subject and observing oracle/test outcomes.

Reuse boundary: treat it as testing infrastructure adjacent to code-agent evaluation and verifier-bearing outcome data. It is not an LLM-specific dataset, but its CLI and execution contract make it relevant for agents that create tests, debug failures, or drive automatic program repair.

Primary sources: arXiv abstract/HTML for arXiv:2307.05147; official GitHub repository README at https://github.com/smythi93/Tests4Py.
