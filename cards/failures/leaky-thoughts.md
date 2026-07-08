<!-- entry_id: leaky-thoughts-2025 -->
<!-- card_type: failures -->
# Leaky Thoughts

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=leaky-thoughts-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=leaky-thoughts-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=leaky-thoughts-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: judgment_rubric_domain_expert_data, environment_agent_trajectory_data, audit_failure_contamination_verifier_attacks, benchmarks_evaluation_surfaces
> Links: [📄 Paper](https://arxiv.org/abs/2506.15674) · [🏛️ ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [🐙 Code](https://github.com/parameterlab/leaky_thoughts)

## TL;DR

Leaky Thoughts shows that reasoning traces from personal-agent settings can expose sensitive user data through prompt injection or accidental leakage.

It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: audit_failure, benchmark.
- Domains: privacy, agent, security.
- Current status: verified.
- Why it belongs: Audit/failure entry for privacy leakage in reasoning traces, agent memory, and private reasoning-buffer behavior.

## 2. What data object does it expose?

- Prompt/source: personal-agent tasks containing sensitive user fields and injection opportunities.
- Trace/action author: reasoning models generate internal traces and final outputs during agent-style evaluation.
- Answer/artifact format: internal reasoning trace, final answer, and leakage/extraction outcome.
- Process fields: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.
- Environment or substrate: personal-agent evaluation setting with hidden or internal reasoning traces.
- Terminal predicate: whether sensitive data appears in reasoning traces or final outputs.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: privacy-leakage audit over traces and outputs.
- Recorded verifier/reward/environment: extraction probes and agentic evaluations.
- Supervision granularity: step-level trace inspection and episode-level leakage.

## 4. How is the data constructed?

- Base model: evaluated large reasoning models vary.
- Teacher: not applicable; this is an audit benchmark.
- Generator: models produce reasoning traces under normal or injected prompts.
- Filtering rule: sensitive fields and prompt-injection conditions define leakage cases.
- Sampling protocol: compare leakage across reasoning budgets and prompt settings.
- Inference budget: test-time compute is a first-class variable because longer reasoning can leak more.
- Optimizer/scaffold: privacy-evaluation harness for traces and outputs.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, safety_alignment, audit.

Use it before exposing or logging model thoughts in an agent product; treat private reasoning traces as sensitive data, not harmless telemetry.

## 6. What should readers audit?

- Are reasoning traces stored, displayed, or sent to tools?
- Does increased test-time compute increase leakage?
- Can prompt injection extract hidden fields?
- Are final outputs safe even when internal traces leak?
- Are privacy mitigations applied to both thoughts and answers?

## 7. What is missing or risky?

- Hiding thoughts from users does not make them safe.
- Trace logging can create a new privacy dataset.
- Utility improvements from more reasoning may worsen leakage risk.

## 8. Why it matters for post-training reasoning data

It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2506.15674) · [🏛️ ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [🐙 Code](https://github.com/parameterlab/leaky_thoughts)

- Data ID: `leaky-thoughts-2025`
- Citation status: verified
- Confidence: high
