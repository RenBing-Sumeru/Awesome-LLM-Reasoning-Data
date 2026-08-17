The paper reports 133 tasks across 26 apps, with 27 single-app tasks, 60 multi-app tasks, and 46 memory/personalization tasks. It evaluates frontier and open-source computer-use models in vision-only and privileged vision+XML settings; the abstract reports the best configuration at 52% overall and 37% on multi-app tasks, with vision+XML helping frontier models by up to 26 percentage points.

The repository evidence is concrete: it publishes the apps, canonical `tasks.json`, rubrics, runners, scoring scripts, and result artifacts such as trajectories, events, screenshots, actions, and rubric evaluations.

Evidence boundary: row-level validity is a rubric-judged trajectory, not a purely deterministic verifier. Scores depend on judge model, simulator state, app build, observation mode, task seed, and model/API version.
