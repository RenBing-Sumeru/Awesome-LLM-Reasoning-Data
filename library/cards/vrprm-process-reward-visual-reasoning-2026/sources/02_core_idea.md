VRPRM centers on VRPRM3.6K, containing 4,294 visual-reasoning records organized around a problem, candidate rationale, stepwise evaluation scores, and a terminal judgment for CoT-PRM supervised fine-tuning. The paper then uses about 50K non-CoT PRM examples for RL so that the reward model learns to analyze a reasoning chain before scoring it, without requiring 400K purely classificatory annotations.

Each record links visual input, review reasoning, step scores, and terminal judgment, making the scoring basis traceable.
