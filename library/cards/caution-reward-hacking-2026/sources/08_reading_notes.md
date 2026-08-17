1. Positioning: caution is an inference-time safeguard for reward-model Best-of-N, not reward-model retraining.
2. Method handle: reconstruct frozen reward features on typical outputs; use reconstruction error as a negative uncertainty penalty.
3. Artifact handle: official supplementary materials are linked; no independent code repository was verified.
4. Evidence anchor: GSM8K reward-only degrades 79.3→71.5 at N=512, while combined caution is 82.6→81.1.
5. Reuse decision: useful when more samples cause true quality to fall; first validate λ and OOD behavior on held-out target tasks.

A successful use keeps improvement monotonic or nearly so while making the additional forward-pass cost explicit.

Record the chosen layer and λ because both determine which responses are treated as uncertain.\n