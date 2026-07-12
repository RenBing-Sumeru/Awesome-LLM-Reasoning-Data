a two-epoch fine-tuned generator sampled at positive temperature for candidate-set construction. sample 100 completions per training problem for verifier data and 100 per test problem for the main best-of-N result; sweep 25 to 3,200 at test time. label every completion by final-answer match, train a verifier, then return the candidate with maximum verifier score.

The resulting record contains per-problem candidate sets containing a natural-language derivation, calculator annotations, and a final numeric answer. The reported use is reward modeling, evaluation, test time compute.
