Use MMLU-Redux as a checklist for benchmark QA: sample rows, preserve original labels, add corrected labels, record defect categories, and recompute model scores under transparent policies.

Fields to preserve are original MMLU id or subject, question, choices, original answer, corrected answer or defect label, annotator/adjudication metadata where released, dataset version, and evaluation policy for bad rows.

For atlas work, it is a reference for separating benchmark defect evidence from model capability evidence. It also helps flag when a dataset is useful as an audit artifact even if it is not a larger or harder benchmark.
