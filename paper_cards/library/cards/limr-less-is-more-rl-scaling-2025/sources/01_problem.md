Online RL commonly treats more prompts as better training data, although prompts can differ greatly in their marginal value for the current policy. Low-impact tasks consume rollouts and compute while contributing little to learning.

LIMR asks how to measure the learning impact of individual verifiable math prompts and select a smaller RL set on that basis. The goal is not merely to rank hard questions, but to estimate which examples move the model under a stated training trajectory.
