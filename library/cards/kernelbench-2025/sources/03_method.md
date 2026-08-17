1. Inputs: a PyTorch reference workload, allowed CUDA/C++ extension interface, generated source code from an LLM, hardware/runtime configuration, and test seeds.
2. Task construction: workloads are organized into levels such as individual operators, fused operator patterns, and larger neural-network modules.
3. Execution: the harness writes generated code to a buildable extension, compiles it, imports it, and invokes it with randomized input tensors.
4. Correctness contract: outputs must match the PyTorch reference within numerical tolerance across test cases; compile errors, runtime errors, wrong shapes, numerical mismatch, and timeout are failures.
5. Speed contract: correct kernels are benchmarked against the PyTorch baseline and summarized by speedup or related timing metrics.
6. Reproducibility boundary: pin dataset revision, GPU model, CUDA/NVIDIA driver, PyTorch/Triton/C++ compiler versions, warmup/timing policy, random seeds, timeout, precision/tolerance, and whether multiple attempts or best-of-N selection were allowed.
