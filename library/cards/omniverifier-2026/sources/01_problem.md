Vision-language and unified multimodal models can produce plausible images or visual reasoning steps without reliably checking whether they satisfy the prompt. Existing evaluators are narrow, and parallel test-time sampling does not give a model a reusable mechanism to inspect, explain, and refine visual outcomes.

The paper introduces a generative universal verifier, a benchmark, a trained verifier, and a sequential refinement use case. It treats visual verification as an explicit reasoning capability that can supply feedback during multimodal generation rather than only after evaluation.
