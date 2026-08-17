The benchmark is Python-specific and inherits selection bias from BugsInPy plus the added example programs. Results may not generalize to JavaScript, Java, C/C++, or repository-scale tasks with different build systems and oracle conventions.

Oracle quality remains a central risk. Tests4Py improves the availability of functional oracles, but any oracle can be incomplete, overly strict, or misaligned with a user's intended behavior. Generated tests can also overfit an oracle without improving general reliability.

Operational reproducibility matters. The README notes pyenv and project-specific Python versions; dependency drift, cache state, local build tools, and operating-system differences can change outcomes. Agent experiments should log every command and report object.

Unknowns for this card: no new run of Tests4Py subjects was performed; this regeneration verified paper and repository documentation, not the full benchmark execution.
