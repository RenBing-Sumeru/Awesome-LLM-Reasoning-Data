The student model itself supplies rank and surprisal signals, while three independent generation runs and downstream training test whether the score predicts useful data.

A reusable implementation should log the source task, generator and checkpoint, sampling budget, complete candidate trajectory, feedback values, selection reason, and terminal outcome for every candidate.
