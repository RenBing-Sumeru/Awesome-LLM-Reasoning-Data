1. Inputs: user GUI tasks, screenshots or GUI states, action space definitions, cloud virtual environment state, model history, and benchmark task specifications.
2. Pipeline: initialize a GUI environment; let GUI-Owl or the Mobile-Agent-v3 scaffold observe and plan; execute actions; collect observations and outcomes; judge success or failure; use accepted trajectories and feedback in the self-evolving data loop.
3. Outputs: benchmark scores, task trajectories, state-action-observation logs, judged successful or failed runs, and model/data artifacts exposed through the official repository.
4. Feedback: AndroidWorld and OSWorld-Verified provide environment-level task success metrics; the framework also uses trajectory correctness judgments for filtering and improvement.
5. Reproducibility notes: pin GUI-Owl checkpoint, repository commit, cloud environment image, benchmark version, prompt/scaffold roles, action grammar, max steps, and any closed service used for judgment or execution.
