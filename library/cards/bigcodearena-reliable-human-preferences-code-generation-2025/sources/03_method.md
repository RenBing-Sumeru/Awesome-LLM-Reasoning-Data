1. Input: receive a code-oriented task and candidate responses from competing LLMs across supported languages and execution environments.

2. Execution: run the generated code on demand, expose outputs and execution behavior, and let the user interact with that evidence during a multi-turn session.

3. Preference collection: record the user’s pairwise choice after comparison, together with the code conversation and execution context.

4. Dataset construction: retain raw sessions, identify preference-bearing multi-turn conversations, and post-process a preference subset for reward-model evaluation.

5. Evaluation use: compare reward-model judgments with human choices, and build execution-aware automatic evaluation from the collected surface.

6. Stop rule: execution success is evidence rather than a complete quality label; preserve task, environment, and human preference instead of treating passing behavior as universally preferred code.
