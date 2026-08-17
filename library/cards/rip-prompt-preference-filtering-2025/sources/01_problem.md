Preference optimization often scores responses while assuming that every input prompt is worth learning from. Real prompt pools include vague, malformed, overly open-ended, or otherwise low-integrity instructions that can produce unstable preference pairs.

RIP asks how to judge prompt usefulness from the responses it induces. It uses the quality of the rejected answer and the reward gap within a pair to decide whether the prompt should remain in a training or synthetic-data seed pool.
