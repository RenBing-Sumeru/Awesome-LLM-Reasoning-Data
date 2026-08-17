Generative LLM judges need costly preference data, can inherit position and length bias, and are usually assessed only as judges. That leaves uncertain whether a compact judge-training recipe preserves general chat ability or supplies useful reward signals for later policy training.

The paper builds a two-stage SFT-DPO recipe: GPT-4o produces candidate critiques under rewritten judge prompts, answer order is swapped and labels are checked against source preferences, then difficult cases become DPO pairs. It releases the resulting RISE-Judge weights and training data.

The intended object is a generative judge that explains and selects between two answers, not a scalar reward model. The paper evaluates both its judgment score and whether its outputs can annotate preference pairs for DPO.
