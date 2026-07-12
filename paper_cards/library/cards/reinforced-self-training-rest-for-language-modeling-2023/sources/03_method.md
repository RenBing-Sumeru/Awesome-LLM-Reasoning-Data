The current policy generates an offline batch in the grow phase. Alternate grow phases that collect a fixed policy batch with improve phases that reuse it offline. Offline RL updates reweight or select generated examples according to their reported reward/quality signal.

The resulting record contains Input-candidate-output records carrying quality/reward information for offline policy improvement. The reported use is preference learning.
