# Reading notes

- **Positioning:** the paper's central object is a 12M released rationale mixture, with the 8B model serving as its consumer and validation vehicle.
- **Method handle:** source triage, category-specific open-model rewriting, and visual consistency filtering determine which records survive.
- **Data/artifact handle:** the public Apache-2.0 repository exposes 10M/2M JSON manifests and downloadable single/multi-image shards in WebDataset form.
- **Evidence anchor:** controlled 1M-record filtering raises the 15-benchmark average from 42.6 to 49.9, with one benchmark regressing.
- **Reuse decision:** use for large multimodal SFT only after source-license, false-accept, and decontamination audits by category.
