Preference-data curation often treats clean examples as uniformly helpful. The paper shows that preference pairs have stable but unequal learning difficulty, and examples beyond a model's capacity can degrade alignment even when they are not simply mislabeled.

It asks how DPO should choose records for a particular model size. Selective DPO estimates how difficult each pair is for that model and removes pairs whose difficulty exceeds the useful range.
