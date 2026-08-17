1. **Select APPS problems:** Parse natural-language statements, Python references, and tests, retaining problems expressible with Lean data types and without heavy external-library or I/O dependence.

2. **Translate program interfaces:** Convert input and output types and algorithm skeletons into Lean 4 functions, add executable `#eval` examples, and compile-check syntax, types, and outputs.

3. **Generate correctness theorems:** Generalize unit tests into variable-bearing theorems or properties and leave proof portions as `sorry`. Manually inspect the quality-controlled subset for non-triviality and alignment with the problem.

4. **Release task files:** Preserve program holes, proof holes, and metadata; accept model outputs only when they compile and pass the Lean 4.12.0 kernel. Reproduction must pin Lean and report the full 4,715 and curated 1,083 subsets separately.
