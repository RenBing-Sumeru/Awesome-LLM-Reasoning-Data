1. Inputs: contest problem list, agent/model config, competition-rule config, Hydro problemset, optional local resource dataset, and provider API settings.
2. Pipeline: deploy Hydro with the USACOArena addon, start the arena API and UI, run `scripts/run_competition.py`, let agents generate code and invoke local tests under credit accounting, then export reports and metric timelines.
3. Outputs: competition id, logs, submissions, judge outcomes, final intelligence report, metric timeline, and budget/cost traces.
4. Feedback: Hydro tests and arena APIs provide pass/fail or score; elapsed time, token generation, and local tests deplete credit.
5. Reproducibility: pin Hydro version/addon, problemset zip, local resource dataset, config files, API model versions, budget rules, hardware/runtime, and release date.
