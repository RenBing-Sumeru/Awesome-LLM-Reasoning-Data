Most preference-data curation ranks the preferred answer or the pair as a whole. RIP foregrounds the rejected answer: what the model can do badly is used as a diagnostic for whether the prompt itself is a sound training input.

The same rule is applied twice in Self-RIP, connecting prompt selection to synthetic prompt construction. This is a data-construction contribution, not a new DPO loss, and its released filtered dataset makes the selection result inspectable.
