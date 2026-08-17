Most verifier pipelines assign a scalar score to one candidate at a time and aggregate only after scoring is complete. This paper moves the interaction into the verifier itself: a candidate is judged in the context of its peer candidates, and that context can affect both ranking and the decision to stop generation.

The contribution is therefore a change in the unit of verification, from an individual trajectory to a candidate set. It is distinct from simply adding more samples or more verifier calls, because the proposed signal is the relation among concurrently generated attempts.
