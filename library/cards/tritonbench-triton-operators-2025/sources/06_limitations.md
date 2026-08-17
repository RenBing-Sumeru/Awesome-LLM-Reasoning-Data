1. **Source contamination:** GitHub operators may have appeared in model pretraining, so the real-world channel cannot fully exclude memorization. Code similarity should be reported, with recent or rewritten tasks evaluated separately.

2. **Hardware specialization:** Triton configurations are sensitive to GPU architecture and input shape; one implementation cannot be optimal everywhere. Results should be stratified by hardware, shape, and dtype.

3. **Test coverage:** Numerical equivalence on finite inputs does not guarantee boundary shapes, non-contiguous memory, or extreme-value stability. Property tests and randomized perturbations should be added before reuse.
