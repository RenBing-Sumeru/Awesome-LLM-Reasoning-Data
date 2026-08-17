**Claim.** Preserving score uncertainty and breaking ambiguous ties reduces framework-level inconsistency.

**Setup.** Table 1 evaluates Llama-3.1-70B-Instruct on the authors’ single-score/pairwise tests, comparing the 5-scale baseline with TrustJudge; the method changes the scoring rule and pair aggregation, not the judge checkpoint.

**Result.** CR falls from 23.32% to 14.89%, and four-way NTR falls from 15.22% to 4.40%; exact-match accuracy rises from 51.77% to 64.22%.

**Boundary.** This supports the audited protocols and prompts, not a guarantee of human alignment or a cure for content-level judge bias; results still depend on the base model’s instruction following.
