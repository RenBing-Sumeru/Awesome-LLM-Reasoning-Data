# Scaling and Test-Time Compute

## What you will learn

- Why benchmark gains are not self-explanatory.
- How to separate ceiling movers from efficiency movers.
- What release fields are needed for scaling attribution.

## Core idea in one paragraph

Reasoning post-training scaling should be read through two parameters: an asymptote or ceiling, often moved by data substrate, and an efficiency exponent, often moved by optimizer/scaffold choices.

## Beginner explanation

If one model scores higher, ask what changed: data source, verifier, base, teacher, optimizer, search budget, inference budget, contamination, or evaluation protocol.

## Technical view

| Scaling knob | May move ceiling | May move efficiency | Required release fields |
|---|---|---|---|
| Prompt source | yes | sometimes | source mixture, pass-rate band, base, filter |
| Data uniqueness/reuse | sometimes | yes | unique items, reuse rate, epochs, active band |
| Teacher distillation | yes | yes | teacher, gap, decoding policy, verifier |
| SFT to RL handoff | yes | yes | entropy at handoff, base, SFT corpus |
| Inference-time compute | sometimes | yes | pass@k, pass@(k,T), budget, topology |
| Search substrate | yes | yes | environment image, tools, terminal predicate |
| Verifier refresh | yes | yes | verifier version, refresh log, attack tests |
| Evaluation protocol | no | apparent | seed, split, contamination audit, budget |

## Key examples

- Asymptote/efficiency decomposition.
- Data repetition and small-pool curation.
- Agentic substrate gains.

## Practical checklist

- [ ] Identify the reported delta.
- [ ] List changed knobs.
- [ ] Separate data substrate from optimizer/scaffold.
- [ ] Record inference budget.

## Common traps

- Treating +N points as pure capability.
- Comparing pass@1 and pass@k as the same observable.

## What to read next

- docs/09_audit_and_failure_modes.md
- cards/release_card_template.md
