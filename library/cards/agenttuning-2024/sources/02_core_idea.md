AgentTuning makes multi-environment agent behavior trainable by recording GPT-authored ReAct trajectories, retaining them with task rewards, and mixing them with general dialogue so the student learns agent actions without abandoning broad language behavior. Compared with single-task agent tuning, the changed object is a six-task demonstration mixture; task environments judge completion, while the released conversations, not the online environments, are the category-defining artifact.

Google Scholar citations: 373（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=AgentTuning%3A+Enabling+Generalized+Agent+Abilities+for+LLMs&author=Aohan+Zeng&hl=en）

Open dataset: yes
Dataset name: AgentInstruct
Official URL: https://huggingface.co/datasets/zai-org/AgentInstruct
Scale: 1,866 trajectories from 35,341 candidate instructions; 8,042,511 uncompressed bytes in the current six-split dataset card
Record form: id plus conversations containing speaker, loss mask, and value; values serialize instructions, Think/Thought, actions, observations, corrections, and terminal answers
File / storage format: six Parquet files for os, db, alfworld, webshop, kg, and mind2web
Domains / languages: English; operating systems, databases, household text worlds, shopping, knowledge graphs, and web navigation
Construction and filtering: GPT-4 or GPT-3.5 interacts under ReAct; task rewards keep full successes, except Mind2Web accepts reward >= 2/3
License / access constraints: public and non-gated under Hugging Face Terms; no dataset-specific license is declared, and upstream task terms remain applicable
Intended use: supervised fine-tuning and mixed-domain agent instruction tuning
