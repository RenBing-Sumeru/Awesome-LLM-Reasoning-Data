DeepAnalyze synthesizes complete multi-turn analyst trajectories and packages 500K instruction records that interleave planning, code execution, observations, and final reporting. Relative to workflow orchestration around a generic instruction model, it makes record id, multi-turn messages, input/output token counts, and execution evaluation the reusable target and uses sandbox execution, artifact inspection, and task-level evaluation metadata as the feedback contract, so Track 01 is the correct category.

Google Scholar citations: 34（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=DeepAnalyze%3A+Agentic+Large+Language+Models+for+Autonomous+Data+Science&author=Shaolei+Zhang&hl=en）

Open dataset: yes
Dataset name: DataScience-Instruct-500K
Official URL: https://huggingface.co/datasets/RUC-DataLab/DataScience-Instruct-500K
Scale: 500K tool-using data-science instruction trajectories
Record form: record id, multi-turn messages, input/output token counts, and execution evaluation
File / storage format: Parquet conversation records with referenced data files
Domains / languages: English data analysis, database work, visualization, and report writing
Construction and filtering: an agentic synthesis pipeline writes plans, code, tool calls, observations, and reports; sandbox execution, artifact inspection, and task-level evaluation metadata
License / access constraints: MIT
Intended use: agentic SFT for autonomous data analysis
