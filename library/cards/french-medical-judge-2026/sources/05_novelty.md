Prior LLM-judge work commonly reports agreement with human labels in general-domain tasks or trains judges on large synthetic judgment corpora. This paper changes the comparison unit: it tests binary clinical equivalence in French and conditions the audit on which model wrote the answer.

Its additional change is applying SFT plus GRPO to a compact evaluator using limited expert supervision. It does not introduce a new medical benchmark or prove that GRPO is generally superior; before reuse, inspect the unpublished artifact status and retain expert adjudication.
