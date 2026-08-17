1. Inputs: a reference chart image, a textual instruction, optional task variant such as direct or customized mimic, and an LMM capable of visual input and code output.
2. Generation: the model writes plotting code intended to reproduce or customize the chart.
3. Execution: the produced code is run in the benchmark environment to obtain a rendered chart or an execution failure.
4. Evaluation: automatic multi-level metrics assess code execution, code similarity or structure where applicable, and rendered-chart fidelity to the reference or instruction.
5. Outputs: per-sample code, rendered image, execution status, metric scores, and aggregate model scores.

The verifier is mixed: program execution filters invalid code, while chart similarity metrics score visual and structural fidelity. Reproducibility requires the dataset version, code sandbox, Python/library versions, rendering backend, metric implementation, prompt template, model version, image resolution, timeout, and handling of unsafe or non-executable code.
