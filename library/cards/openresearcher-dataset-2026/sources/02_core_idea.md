OpenResearcher bootstraps an offline evidence corpus, then generates and filters complete search-browse-answer trajectories without repeated live-web dependence. Relative to online-only deep-research trajectory generation, it makes question id, question, answer, interleaved messages, latency, error, attempts, status, and chunk metadata the reusable target and uses final-answer checking, retrievability bootstrapping, error/status fields, and trajectory filtering as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: OpenResearcher-Dataset
Official URL: https://huggingface.co/datasets/OpenResearcher/OpenResearcher-Dataset
Scale: more than 97K deep-research trajectories over a 15M-document offline corpus
Record form: question id, question, answer, interleaved messages, latency, error, attempts, status, and chunk metadata
File / storage format: Parquet multi-turn message records across multiple generation seeds
Domains / languages: English long-horizon web research and evidence synthesis
Construction and filtering: GPT-OSS-120B searches an offline corpus and writes complete tool-use trajectories; final-answer checking, retrievability bootstrapping, error/status fields, and trajectory filtering
License / access constraints: MIT
Intended use: deep-research agent SFT
