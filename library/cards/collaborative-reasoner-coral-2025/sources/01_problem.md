The canonical paper is **Collaborative Reasoner: Self-Improving Social Agents with Synthetic Conversations**, accepted to the **NeurIPS 2025 Main Conference Track**. It addresses a gap between single-turn reasoning training and collaborative problem solving: an agent must not only solve a problem, but also inspect another agent’s reasoning, challenge errors, persuade when correct, revise when wrong, and converge on a shared answer through free-form conversation.

Coral represents a task as a problem and gold answer discussed by two alternating generalist agents. In the main self-play setting, both sides are instances of the same instruction-tuned model under the same collaboration prompt. Code calls them `teacher` and `student`, but those names indicate which side starts or responds; they do not denote an expert teacher and novice student.

A raw training object is richer than the final preference row:

| Layer | Information |
|---|---|
| Task | Problem, gold answer, task type, prepared split |
| Conversation state | System prompt, full alternating prefix, active agent |
| Search | Five candidate next turns from the same prefix; one chosen randomly to continue |
| Rollout | Five independently sampled conversation trees per problem, at most 20 turns |
| Feedback | LLM-extracted belief or `not sure yet`, task-normalized gold match |
| Output | Correct next turn for SFT, or same-prefix correct/incorrect siblings for DPO |

After every candidate turn, a separately prompted model from the same family extracts the agent’s current final-answer belief. A task-specific matcher compares that belief with gold. This is a **mixed judge-plus-programmatic contract**: belief extraction is judgment-dependent and can fail; gold comparison is rule-based once a valid belief is available. The labels are answer-level, not process supervision. A turn that makes useful progress but does not state a correct final belief receives the same negative label as a fully wrong turn.

The reported data scale is substantial but not public. Table 9 reports **379.6K accepted training turns** for Llama-3.1-8B and **311.3K** for Llama-3.1-70B. Those are author-reported accepted-turn counts, not downloadable row counts. Official artifacts release generation, filtering, evaluation, training, and Matrix infrastructure code, but no paper-run conversations, SFT rows, DPO pairs, rejected turns, beliefs, failures, prepared splits, logs, or trained Coral checkpoints.

This belongs in **Data Construction & Open Release Recipes** because the contribution is a concrete conversation-sampling, belief-labeling, preference-pairing, and training pipeline. It should not be described as an open synthetic-conversation dataset or an open model release.
