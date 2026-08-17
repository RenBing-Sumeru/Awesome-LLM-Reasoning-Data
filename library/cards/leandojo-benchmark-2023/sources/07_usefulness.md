LeanDojo is useful as a reference design for executable formal-reasoning data. Preserve theorem id, repository commit, Lean version, imports, local context, proof state, available premises, retrieved premises, generated tactics, checker result, timeout, and search budget.

It also informs reward/verifier design: Lean feedback can label candidate tactics, filter rollouts, or score complete proofs, but only if failures, timeouts, and rejected tactics remain in the trace.

For atlas work, the central lesson is to store the environment contract with the data object. Without the Lean toolchain and exact library snapshot, the sample is just text and loses its decisive feedback signal.
