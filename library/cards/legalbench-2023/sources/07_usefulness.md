Use LegalBench as a schema reference for broad legal benchmark libraries. Preserve task id, legal area, source dataset, contributor, prompt, input fields, label space, metric, split, license, and any transformation from prior data.

It is useful for comparing model behavior across legal text types and task formats, but only if reports keep per-task scores rather than collapsing everything into one legal ability number. It is also a good checklist for documenting task provenance in domain benchmarks.

For atlas work, LegalBench supplies a contrast to LawBench: English collaborative breadth versus Chinese jurisdiction-specific taxonomy. Both should remain evaluation surfaces unless the downstream workflow explicitly audits them as training data.
