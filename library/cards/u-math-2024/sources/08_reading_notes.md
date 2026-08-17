Read Section 3 first for dataset curation, statistics, and the mu-MATH framing. Then read the prompt appendix before trusting any score, because the scoring contract depends on how the judge is instructed to compare a free-form solution with the reference answer.

For screening, keep three questions in view. First, does a downstream use need university-course coverage, visual math, or both? Second, is the LLM judge reliable enough for the intended comparison? Third, are the repository revision, license, and contamination date pinned?

Unknowns after this pass: Hugging Face access timed out locally, so no HF artifact was recorded; the exact license should be confirmed from the repository; and any hidden/public split or future release-update policy should be checked before using scores as durable evidence.
