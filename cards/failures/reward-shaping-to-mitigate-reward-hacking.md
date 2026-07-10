<!-- entry_id: reward-shaping-to-mitigate-reward-hacking-in-rlhf-2025 -->
<!-- card_type: failures -->
# Reward Shaping to Mitigate Reward Hacking in RLHF

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reward-shaping-to-mitigate-reward-hacking-in-rlhf-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reward-shaping-to-mitigate-reward-hacking-in-rlhf-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reward-shaping-to-mitigate-reward-hacking-in-rlhf-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2502.18770) - [Code](https://github.com/PorUna-byte/PAR)

## TL;DR

This paper proposes PAR, a bounded centered reward-shaping method intended to reduce reward hacking in RLHF.

It is a reward-design audit card. PAR should be inspected as a proxy-reward transformation, not as proof that the underlying preference labels or reward model are clean.

## 1. What is this work?

The paper studies reward shaping for RLHF and compares PAR against several reward-hacking mitigation baselines.

For this atlas, the useful object is the shaped reward trace: original reward, centered reward, shaped reward, checkpoint, and downstream audit outcome.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- response,
- proxy reward,
- reference reward,
- centered reward,
- shaped reward,
- shaping method,
- checkpoint,
- win rate.

Prompt sources include UltraFeedback-Binarized and HH-RLHF dialogue preference data.

## 3. What is the verifier / reward / judge / environment?

The verifier is mixed. A learned reward model provides the preference reward, while PAR transforms the reward into a bounded centered signal.

DeepSeek-V3 is used as an evaluation judge in reported win-rate and benchmark comparisons. That judge is an evaluation proxy, not a data-quality guarantee.

## 4. How is the data constructed?

Reported construction details include:

- train or use reward models on preference data,
- initialize policy from SFT,
- optimize with PPO/GRPO-style RLHF,
- compare reward-shaping methods including PAR, WARM, ODIN, Reg, Meanstd, Clip, Minmax, and LSC,
- evaluate reward/win-rate curves across checkpoints.

Unknown locally: sampling temperature and exact split revisions.

## 5. How can it enter post-training?

Recorded use:

- reward_modeling,
- audit.

Use it to audit reward shaping under RLHF. Do not describe the shaped reward as a human preference label.

## 6. What should readers audit?

- Reward shaping can introduce a new proxy objective.
- PAR still depends on the reward model's latent preference quality.
- DeepSeek-V3 judging is an evaluation proxy, not data-quality proof.
- Reduced visible reward hacking may hide other reward exploits.
- Source dataset licenses and preprocessing should be checked before reuse.

## 7. What is missing or risky?

- Exact repository commit.
- UltraFeedback-Binarized and HH-RLHF revisions and licenses.
- Reward-model training details and checkpoints.
- PPO/GRPO implementation settings.
- Whether the target domain has the same reward-hacking failure mode.

## 8. Why it matters for post-training reasoning data

It treats scalar reward design as an auditable data object rather than assuming reward-model scores are safe optimization targets.

## 9. Links and citation

- Institution: Fudan University affiliation/contact is visible from the official repository; exact paper affiliations should be verified from the PDF if needed.
- Official links: arXiv, DOI, and GitHub.
- arXiv: https://arxiv.org/abs/2502.18770
- DOI: https://doi.org/10.48550/arXiv.2502.18770
- Code: https://github.com/PorUna-byte/PAR
- Data: null
- Project: null
- Hugging Face: null
- Data ID: `reward-shaping-to-mitigate-reward-hacking-in-rlhf-2025`
- Citation status: verified
- Confidence: high