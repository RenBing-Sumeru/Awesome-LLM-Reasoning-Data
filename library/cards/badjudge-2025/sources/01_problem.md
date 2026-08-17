LLM judges increasingly decide model rankings, safety labels, and retrieval order, but their training pipeline can be poisoned. A trigger produced by an adversary’s candidate can cause a compromised judge to reward that candidate or punish a competitor while remaining plausible on clean inputs. Existing evaluator attacks focus on prompting rather than this train-time chain reaction.

BadJudge formalizes a joint candidate-and-evaluator backdoor threat. It separates web poisoning, malicious annotation, and poisoned weights by the attacker’s access, measures attack success and clean agreement, and tests a defense that does not need to identify the trigger.

The audit therefore asks whether evaluator trust must cover data provenance, candidate behavior, and judge weights together.
