Use the protocol to quantify an exposed benchmark’s likely distortion when you control training logs: insert an isolated holdout, vary repetition or training continuation, and report the contaminated–holdout accuracy gap. The output is a condition-specific audit curve.

For long pre-training runs, compute cumulative weight decay from the real schedule as a screening estimate, then validate on held-out exposures. Do not use it when training provenance, exposure time, or optimizer settings are unknown.
