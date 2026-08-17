1. Map uncontrolled factors. The authors collect open-weight reasoning models and record their base model, post-training type, framework, decoding settings, prompt treatment, and generation limits.

2. Measure sensitivity. Nine 1.5B/7B models are run on AIME'24, AMC'23, and MATH500 while seeds, temperature, top-p, hardware, framework, prompt format, and output length are varied. Pass@1 and its variance are the outputs; repeated seeds, rather than a learned verifier, determine uncertainty.

3. Fix a common protocol. The re-evaluation uses LightEval 0.8.1 with vLLM, model-appropriate templates and tuned decoding, robust LaTeX answer matching, fixed cloud hardware, ten seeds for AIME'24/AIME'25/AMC'23, and three for the other benchmarks.

4. Reassess training claims. RL and SFT variants are compared with their stated base or instruction-tuned reference on six math benchmarks; mean and standard deviation, not a best single run, determine the reported comparison.

5. Release audit artifacts. Code, Docker setup, prompts, outputs, leaderboard, and CSV logs are released. Reproduction still requires pinning model revisions, task data, inference engine, seed schedule, and hardware; training data and exact training budgets of third-party models remain unknown.
