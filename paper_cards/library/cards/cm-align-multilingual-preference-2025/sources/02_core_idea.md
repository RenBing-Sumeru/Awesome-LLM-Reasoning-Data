For each prompt, the model produces several English answers and keeps the answer most consistent with the others as an English reference. This reduces the chance that one poor English generation governs every downstream language.

The method then scores target-language answers against that reference with task-specific consistency criteria. The most consistent answer becomes chosen and the least consistent becomes rejected, turning cross-lingual agreement into the preference-record construction rule.
