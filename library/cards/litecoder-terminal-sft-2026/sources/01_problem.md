Small terminal datasets provide too few long-horizon successes to study how task diversity and environment scale affect language agents.

LiteCoder scales terminal environments and collects 11,255 verified conversations that preserve the entire instruction-reasoning-command-observation sequence. The decision boundary is whether a serialized training record survives environment success, replay validation, difficulty filtering, and trajectory quality checks; the central artifact is data consumed by terminal-agent SFT from 4B to 32B, not a model-only release.

L4 facts: primary source arXiv:2605.29559; arXiv preprint; data object LiteCoder-SFT-Terminal with 11,255 complete terminal-agent trajectories; evaluation surface The 32B variant reports 29.06%, 18.54%, and 34.00% pass@1 on three terminal benchmark settings; the paper also studies 4B-to-32B scaling.; collection note: full paper, official README, license, schema, and an actual public record checked on 2026-07-27.
