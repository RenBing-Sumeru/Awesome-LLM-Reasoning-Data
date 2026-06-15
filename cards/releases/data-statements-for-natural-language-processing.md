<!-- entry_id: data-statements-for-natural-language-processing-2018 -->
<!-- card_type: releases -->
# Data statements for natural language processing

> Curation level: L5_audit_ready
> Category: surveys_and_primers
> Links: [📄 Paper](https://aclanthology.org/Q18-1041/)

## TL;DR

Proposes data statements for NLP datasets, foregrounding language, speaker/community provenance, annotation context, and intended deployment boundaries.

Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.

## 1. What is this work?

- Year / venue: 2018 · TACL.
- Atlas role: survey_background.
- Domains: data_documentation, nlp.
- Current status: verified.
- Why it belongs: Dataset-documentation foundation for asking which populations, languages, domains, and annotation contexts a reasoning-data artifact represents.

## 2. What data object does it expose?

- Prompt/source: not a dataset; a disclosure schema for language data.
- Trace/action author: dataset authors document source populations and annotation conditions.
- Answer/artifact format: data statement covering language variety, speakers, annotators, collection situation, curation, and intended uses.
- Process fields: language/community metadata, annotation context, provenance, curation decisions.
- Environment or substrate: NLP dataset release documentation.
- Terminal predicate: transparency of population and context assumptions.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: documentation_audit.
- Recorded verifier/reward/environment: checklist-style source and population disclosure.
- Supervision granularity: dataset_release_level.

## 4. How is the data constructed?

- Base model: not applicable.
- Teacher: not applicable.
- Generator: dataset creators and annotators.
- Filtering rule: document inclusion, exclusion, and normalization decisions.
- Sampling protocol: disclosed when language population sampling matters.
- Inference budget: not applicable.
- Optimizer/scaffold: not applicable.

## 5. How can it enter post-training?

Recorded training/evaluation use: audit.

Use it to audit whether reasoning-data claims travel across language, domain, and annotator populations, especially for multilingual or domain-specialized corpora.

## 6. What should readers audit?

- Are source populations and annotation populations described separately?
- Does the release identify language varieties and domains?
- Are collection and annotation settings visible?
- Are deployment limits stated?
- Can benchmark failures be traced back to population mismatch?

## 7. What is missing or risky?

- Population metadata may be unavailable for scraped or synthetic corpora.
- The statement improves transparency but does not make labels correct.
- Readers still need contamination and license checks.

## 8. Why it matters for post-training reasoning data

Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://aclanthology.org/Q18-1041/)

- Data ID: `data-statements-for-natural-language-processing-2018`
- Citation status: verified
- Confidence: high
