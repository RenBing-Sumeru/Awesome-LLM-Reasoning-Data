- Start with Sections 3–4 for the 200-task construction, 1,225-rubric contract, OSWorld execution loop, and Gemini per-rubric judge; read the appendices for filtering, human agreement, and 200-step scaling.

- Keep the object boundary explicit: public task/rubric/config records are not the 2,380 source histories, 696 retained journeys, or complete model trajectories. `training_use` is evaluation only.

- Audit scorer inputs and exclusions. Native OSWorld evaluation is `infeasible`, rubric weights are absent, and runs without numeric `result.txt` are skipped by default unless incomplete inclusion is requested.

- Treat all live-web scores as versioned observations. Record start URL, site state, VM/browser/OSWorld revision, network identity, reset behavior, judge snapshot, every failed run, privacy protections, and VM security controls.
