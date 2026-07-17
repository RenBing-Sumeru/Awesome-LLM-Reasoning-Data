Earlier pipelines usually choose an English response or translate it before forming a pair. CM-Align adds a separate anchor-selection decision and makes target-language preference labels depend on cross-lingual agreement with that selected anchor.

Its contribution is therefore a record-construction procedure, not a replacement DPO loss. By using task-specific criteria for three task types, it directly addresses the fact that translation similarity is not a reliable quality signal for open-ended, mathematical, or code responses.
