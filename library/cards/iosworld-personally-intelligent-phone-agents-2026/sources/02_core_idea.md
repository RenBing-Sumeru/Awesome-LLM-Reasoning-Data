The contribution is a reproducible native-iOS benchmark for agents that must act over a persistent fictional user's data rather than a blank phone. The core mechanism is to ship runnable apps, seeded user state, tasks, rubrics, agent runners, and local or EC2 Mac execution tooling.

The data object is a task record with goal, apps, category, difficulty, and rubric criteria, plus a trajectory containing screenshots, planned/executed actions, events, and final rubric evaluation. The feedback contract is mixed: each task score is `n_satisfied / n_criteria`, and pass rate counts tasks where every rubric criterion is satisfied; the default judge uses OpenAI according to the repository README.

Closest comparisons are AndroidWorld, OSWorld-style computer-use benchmarks, and mobile GUI grounding datasets. iOSWorld differs by targeting native iOS, cross-app personal context, and optional vision+XML observations.
