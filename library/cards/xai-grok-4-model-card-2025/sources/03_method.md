The disclosure separates into four layers.

1. **Data and filtering.** Section 3.1 names four broad pretraining-source categories and says xAI applies de-duplication and classification for quality and safety. It does not give proportions, source manifests, prompt provenance, classifier definitions, thresholds, yields, or benchmark-overlap checks.
2. **Post-training.** The same section names supervised fine-tuning, human feedback, verifiable rewards, and model grading. The launch announcement says RL training was run on Colossus, expanded verifiable training data beyond primarily math and coding, and trained native tool use. It does not disclose objectives, reward definitions, graders, rollout policy, sampling, schedules, or data counts.
3. **Safety and agentic evaluation.** The model card describes an internal multilingual harmful-query evaluation, model-graded refusal outcomes, jailbreak conditions, AgentHarm, AgentDojo, and a CyBench harness with code execution. It also reports system-prompt and model-based input-filter mitigations.
4. **Evaluation boundary.** Other reported tests include MASK, answer sycophancy, an internal soft-bias evaluation judged by an LLM, WMDP, VCT, BioLP-Bench, CyBench, and MakeMeSay. These evaluate the deployed model or capability under specified conditions; they do not specify the data or feedback used to train it.

