Inputs: author-created project descriptions derived from analysis of freelance website-development platforms, functional and appearance requirements brainstormed by forty computer-science Ph.D. students, model-converted website instructions, and generated website code from agents such as Bolt.diy, OpenHands, and Aider.

Pipeline:

1. The authors summarize 20 web-application categories, create 10,152 project descriptions, convert them into English website-generation instructions, and sample 101 test instructions across three technical categories: content presentation, user interaction, and data management.
2. For each test instruction, draft test cases are generated, then two Ph.D. students independently review and refine them. The paper reports a final set of 647 test cases, 4-11 per instruction.
3. Tested agents generate websites. The repository README documents reproduction paths for Bolt.diy, OpenHands, and Aider, with generated outputs and evaluation scripts.
4. Each test case is transformed into a UI-agent prompt. The browser agent executes the operation, observes screenshots and action trajectories, and returns YES, NO, or PARTIAL. If the interaction limit is reached, a final decision prompt is used.
5. Accuracy is computed from YES and PARTIAL labels; appearance is graded separately from screenshots on a 1-5 scale.
6. For WebGen-Instruct, remaining generated instructions are decontaminated against the test set using 5-gram Jaccard similarity greater than 0.6 and sentence-embedding cosine similarity greater than 0.55. The paper reports 6,667 training instructions and a subset of 600 retained Bolt.diy trajectories for supervised fine-tuning after appearance filtering.

Outputs: benchmark instructions, test cases, code/evaluation scripts, generated-site outputs, model weights, and WebGen-Instruct training data. Reproducibility depends on pinning the official data revision, repository commit, browser/runtime setup, agent framework fork, UI-agent model and prompts, model API behavior, timeout policy, dependency versions, and generated-site artifacts. Raw per-row schema fields are not fully verified here because direct raw-file access was unavailable.
