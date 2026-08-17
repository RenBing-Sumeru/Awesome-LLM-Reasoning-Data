1. **Specify tasks and judgment targets.** Each DevAI record provides an AI-development query, requirement nodes and dependency edges, and optional preferences. A developer agent leaves code, files, outputs, and sometimes a structured trajectory.

2. **Create the human reference.** Three AI experts independently mark each requirement, then debate disagreements into a consensus. This consensus, not an absolute ground truth, is the reference for judge shift and alignment.

3. **Collect targeted evidence.** The judge builds a workspace graph, locates files named by a requirement, reads code or multimodal artifacts, and may retrieve relevant execution feedback from a gray-box trajectory. It does not execute the evaluated workspace as a stated prerequisite.

4. **Return a requirement decision.** The ask module receives the requirement and selected evidence, returns satisfied or unsatisfied with a concise evidence-based justification, and aggregates requirement outcomes with or without dependency handling.

Reproduction requires the exact DevAI revision, developer workspaces, gpt-4o-2024-05-13 baseline setup, prompts, module configuration, and human-consensus labels. API versions, nondeterminism controls, and a complete cost reproduction protocol remain partly unspecified.
