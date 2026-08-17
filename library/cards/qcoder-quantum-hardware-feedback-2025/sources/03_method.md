1. **Collect tasks:** Problems, constraints, and human submissions are gathered from real quantum-programming contests, selecting tasks reproducible in a unified simulator.
2. **Normalize interfaces:** Problems are converted into natural-language code-generation instructions specifying inputs, outputs, available gates, qubits, and execution limits.
3. **Run the simulator:** Model and human code undergo compilation, simulation, and output verification, with the stage of failure recorded.
4. **Produce feedback:** The environment returns circuit depth, execution time, unsupported operations, resource violations, and logical-error categories, enabling iterative code refinement.
5. **Compare systems:** LLM accuracy and error distributions are compared against average success rates and code-quality measures from human submissions.

