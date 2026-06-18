# Companion Paper Primer

Source: [arXiv:2606.02113](https://arxiv.org/abs/2606.02113)

Paper: **A Primer in Post-Training Reasoning Data: What We Know About How It Works**

Authors: Yaoming Li, Guangxiang Zhao, Qilong Shi, Lin Sun, Xiangzheng Zhang, Tong Yang

This compact companion-paper seed gives Ask the Atlas a public grounding layer
before a private full-text extraction is configured. It should not replace the
paper. For production-grade paper grounding, set `ASK_ATLAS_PRIMER_TEXT_PATH`
to a locally extracted `.txt` or `.md` copy of the paper under
`ASK_ATLAS_SAFE_RAG_ROOT` on the backend. Never point that path at
configuration, secret, log, database, or structured data files.

## Core Claim

Post-training has become one of the main drivers of progress in large reasoning
models, and reasoning data are often the key variable that determines whether
post-training succeeds. The public literature is scattered across dataset
papers, reinforcement-learning recipes, reward-model studies, benchmarks, and
frontier model reports, so this repository organizes those releases as data
objects rather than only as papers.

## Organizing Questions

The primer organizes post-training reasoning data around four questions:

1. **What data objects exist?** Examples include prompts, reasoning traces,
   intermediate steps, actions, final answers, verifier outcomes, preference
   pairs, environment trajectories, rubrics, benchmark records, and metadata.
2. **What makes those objects useful?** Useful records expose the supervision
   target, feedback source, verifier or judge, training use, provenance,
   filtering, split, license, and contamination/audit risks.
3. **How are they constructed?** Common construction paths include human
   annotation, teacher-model trace generation, self-training, rejection
   sampling, search-generated trajectories, programmatic verification, RLHF,
   RLAIF, DPO-style preference optimization, and RL with verifiable rewards.
4. **How do they scale?** Scaling questions concern data quantity, uniqueness,
   reuse, verifier strength, rollout budget, pass@k/sample budget, test-time
   compute, reward robustness, and whether gains come from data, optimization,
   model capacity, or evaluation artifacts.

## Attribution Frame

The paper motivates an attribution frame for future reasoning-data releases and
post-training recipes:

```text
task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> attribution metadata
```

Ask the Atlas should therefore answer with explicit evidence layers:

- **Companion paper evidence**: this primer seed or a configured full-text
  extraction of the paper.
- **Repository atlas evidence**: README, guides, paper maps, cards, generated
  metadata, and source links.
- **Model background knowledge**: lower-confidence synthesis used only for
  in-scope post-training reasoning or repository navigation questions.

## Reader Tasks

Use this repository to answer practical questions such as:

- Which papers release reusable reasoning data rather than only report a model?
- What is the data object: final answer, chain-of-thought, step label,
  preference pair, rollout, tool trajectory, verifier result, or rubric?
- What verifies the sample: unit tests, proof checker, mathematical answer
  extraction, reward model, human expert, LLM-as-judge, rubric, or environment
  terminal predicate?
- What is hidden or under-specified: teacher model, prompt source, filtering,
  split, license, contamination check, lineage, or reward failure mode?
- Which category should a newcomer read first: foundations, math/code/proof,
  process supervision, agents, judgment-required rubrics, construction
  recipes, frontier reports, scaling, audits, or benchmarks?
