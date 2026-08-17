1. **One-sentence position:** TritonBench systematically evaluates compilation, correctness, and GPU efficiency of model-generated Triton operators.
2. **Method takeaway:** A real GitHub channel, PyTorch-interface channel, numerical checks, and hardware profiling are central.
3. **Data takeaway:** It contains 184 real operators plus interface-aligned tasks, LLM outputs, and performance-metric directories.
4. **Evidence anchor:** State-of-the-art models have substantial gaps in both correctness and stable acceleration, with results bounded by evaluated GPUs.
5. **Reuse decision:** It suits Triton SFT/RL; contamination checks, cross-hardware retesting, and boundary-input audits are required.
