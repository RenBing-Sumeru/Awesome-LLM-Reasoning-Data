1. **Function extraction:** Independently executable ground-truth functions are collected from three code benchmarks, with unstable outputs and problematic dependencies removed.  
2. **Input generation:** GPT-4o writes a data generator for each function, which is executed to create diverse inputs and data formats.  
3. **Output computation:** Inputs are run through the ground-truth function to form exactly verifiable input-output shots and queries.  
4. **Subset construction:** All tasks form MIR-Extended; MIR-Core is selected using factors such as performance growth from few-shot to many-shot settings and task difficulty.  
5. **Leveled evaluation:** Models are compared from 4 to 2,048 shots, with additional tests for erroneous demonstrations, CoT, RAG, and SolverLearner. Functions, generators, and sampling seeds must be fixed.
