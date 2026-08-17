1. **Performance nondeterminism:** ML training depends on seeds, hardware, threading, library versions, and numerical precision. Single-run relative performance can be unstable, requiring multiple seeds and variance reporting.

2. **External data rights:** Kaggle-style datasets and solutions have task-specific licenses and access rules. Public benchmark files may not grant unrestricted redistribution of raw data, so each task must be checked before reuse.

3. **Solution-sketch boundary:** The detail level of a sketch determines difficulty. Excess detail reduces the task to code translation, while too little turns it into open research. Comparisons require identical prompts, runtime, and resource budgets.
