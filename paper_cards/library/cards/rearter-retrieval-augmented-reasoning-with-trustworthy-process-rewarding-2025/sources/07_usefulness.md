Recorded training/evaluation use: process_supervision, preference_learning, test_time_compute.

The searched traces can become step-level preference data for post-training a retrieval-augmented reasoner. At inference time, the same PRM/PEM stack can act as a selector or refinement mechanism, so training-data effects and test-time search effects must be separated.

ReARTeR broadens Track 05 beyond pure math search: the trace includes retrieval evidence and process explanations in addition to scalar rewards. That makes it a useful example for auditing how search traces become preference data in knowledge-intensive reasoning.
