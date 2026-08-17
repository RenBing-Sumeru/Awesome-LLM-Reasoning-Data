1. The full construction starts with 810.5K files and yields 454.9K executable functions and about 3.52M I/O-prediction traces.
2. DeepSeek-V2.5 writes every CoT; program execution checks the JSON prediction, not each prose reasoning step.
3. CODE I/O++ keeps wrong first attempts, execution feedback, and one revision instead of using rejection sampling.
4. The clean headline comparison is Qwen2.5-Coder-7B average 54.8 to 57.2 to 57.7 for baseline, CODE I/O, and CODE I/O++.
5. The ODC-BY public artifact is only a PythonEdu-Reasoning JSONL subset; the complete CodeMix-heavy training mixture is not released.
