1. Inputs: each task provides `task_id`, `skeleton`, class metadata, method contracts, dependencies, tests, and reference `solution_code`.
2. Pipeline: prompt the model with either holistic class generation, incremental method-by-method generation, or compositional method generation; assemble generated code when needed.
3. Outputs: generated class code or method bodies stored as JSON predictions under the expected output format.
4. Feedback: run the official evaluation process against class-level and method-level tests, then compute Pass@1/Pass@k.
5. Reproducibility: pin the ClassEval data release, Python version, dependencies, timeout policy, sampling mode, temperature/top_p, generated sample count, and repository commit. Public tests and reference solutions create contamination risk.
