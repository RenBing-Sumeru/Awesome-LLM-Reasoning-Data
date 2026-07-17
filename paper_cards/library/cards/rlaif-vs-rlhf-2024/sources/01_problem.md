RLHF relies on high-quality human preference labels, but collecting them is expensive and slow. A reward model trained only once also fixes the quality and coverage of the feedback used by later policy optimization.

The paper asks whether an off-the-shelf language model can provide the preference signal instead. It compares the usual route—train a reward model from AI labels—with a route that obtains rewards directly from the AI labeler during reinforcement learning.
