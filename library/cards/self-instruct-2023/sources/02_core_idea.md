Self-Instruct makes the model both data author and training consumer: accepted human and machine tasks become in-context examples for generating the next instructions, while heuristic validity and similarity filters define which serialized instruction-input-output records enter SFT. Compared with human-only instruction tuning, the changed decision is to bootstrap the task distribution itself, not merely ask a teacher to answer a fixed prompt set.

Google Scholar citations: 3864（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Self-Instruct%3A+Aligning+Language+Models+with+Self-Generated+Instructions&author=Yizhong+Wang&hl=en）

Open dataset: yes.

- Name and location: Self-Instruct data, https://github.com/yizhongw/self-instruct/tree/main/data.
- Scale: 175 seed tasks, 52,445 generated instructions, and 82,439 instruction instances.
- Form and format: instruction records and instance records with instruction, optional input, and output fields, distributed in JSON/JSONL resources with generation and evaluation files.
- Construction: iterative GPT-3 instruction generation, ROUGE-L similarity filtering, task-type classification, instance generation, and heuristic invalid-output filtering.
- License and use: intended for instruction-tuning research; the checked README does not clearly establish dataset-level redistribution terms for every generated record, so verify the repository license and source terms before reuse.
