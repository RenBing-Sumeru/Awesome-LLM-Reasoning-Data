1. **Collect tool trajectories:** Run agents on retrieval, function-calling, and multi-turn interaction tasks while saving every observation, action, and environment result.
2. **Segment action units:** Divide traces by actual tool calls and decision turns so exploratory actions can be reviewed separately from state-changing actions.
3. **Apply ternary human labels:** Mark actions as correct, neutral, or erroneous and identify the first decisive error according to whether its effect propagates.
4. **Package the benchmark:** After adjudication, release 1,000 trajectories with 8,509 labels and evaluate step verifiers by task and error position.
