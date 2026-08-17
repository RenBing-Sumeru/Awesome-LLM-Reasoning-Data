LLM-as-a-Judge selects among candidate responses that can originate from untrusted parties. An attacker who controls one candidate can append an instruction and make a poor or malicious response win, corrupting leaderboards, search ranking, RLAIF labels, or tool choice. Manual prompt injections and adapted jailbreaks are weak here because the attacker neither knows the other candidates nor the target response's position.

JudgeDeceiver audits this threat by optimizing an injected token sequence for a chosen question-response pair. It produces a candidate-side suffix intended to make an open-weight judge emit the attacker-selected option across unknown competing responses and positions, then measures attack success and the failure of three detectors.

The paper evaluates the vulnerability rather than proposing a trustworthy judge or a defense, so its direct output is an attack-and-detection audit surface.
