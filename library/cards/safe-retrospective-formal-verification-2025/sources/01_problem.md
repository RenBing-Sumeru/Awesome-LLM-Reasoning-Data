A mathematical step written in natural language may contain an invalid transformation or ambiguous assumption yet survive because the final answer is correct. Final-result checking cannot separate flawed derivation from lucky guessing, while human step review does not scale to tens of thousands of traces.

Safe translates natural-language steps into Lean 4 propositions, supplies local assumptions, invokes a proof checker, and derives executable step labels from whether the formal proof succeeds, producing the FormalStep resource.
