For each trajectory pair and criterion, the verifier reads score-tag logits and converts their full distribution into a normalized reward. Repeated calls and criteria are aggregated, then a Bradley–Terry preference probability compares candidates.

For N candidates, a ring pass removes positional bias and selects k pivots; only pivot-versus-pivot and non-pivot-versus-pivot pairs are then evaluated. This reduces comparison growth from O(N squared) to O(Nk) while retaining a continuous ranking signal.
