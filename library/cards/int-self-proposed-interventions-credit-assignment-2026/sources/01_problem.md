Outcome rewards judge success only after an entire reasoning trace is complete. They penalize correct prefixes in failed trajectories and reinforce accidental or useless steps in successful ones, making it difficult for mathematical RL to learn where correction should begin.

InT uses reference solutions to let the model locate the first error and propose a short targeted intervention that redirects the faulty prefix toward a higher-reward continuation. The prefix–intervention records are then used for SFT followed by RL.
