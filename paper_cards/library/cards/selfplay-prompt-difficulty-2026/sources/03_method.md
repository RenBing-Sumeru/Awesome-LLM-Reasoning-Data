The method samples ten responses per prompt, scores them with a reward model, and uses the mean as difficulty. The maximum-scored response becomes chosen and the minimum-scored response rejected for DPO.

Prompts are partitioned by difficulty and compared under DPO. The successful compact rule retains the easiest 30 percent; the authors also test easy-to-hard curriculum and improving difficult chosen responses.
