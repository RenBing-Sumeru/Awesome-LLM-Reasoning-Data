Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Collect or process large-scale open-web interactions.
2. Train 8B/14B/32B WebWorld simulator models.
3. Roll out long-horizon predicted web transitions.
4. Evaluate with WebWorld-Bench and downstream web-agent tasks.
5. Use synthesized trajectories for finetuning or search.

Outputs are 1.06M open-web trajectories, world-model checkpoints described in the paper, 30+ turn simulation claims, WebWorld-Bench metrics, and 8000 synthesized trajectories used for downstream finetuning. The verifier, reward, judge, or environment is: WebWorld-Bench uses LLM-judged Factuality Score and Web Turing Score; downstream task success provides extrinsic validation of synthesized trajectories. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
