With long-document QA and reference answers, LongRePS can self-sample retrieve–link–answer trajectories and produce a path-SFT set after filtering for evidence coverage and terminal correctness. Context length, base model, and sample count should be fixed when comparing answer-only and path supervision, and faithfulness tested by removing cited evidence. The pipeline is unnecessary for short single-document QA.

The output is long-context SFT data containing evidence paths and final answers.
