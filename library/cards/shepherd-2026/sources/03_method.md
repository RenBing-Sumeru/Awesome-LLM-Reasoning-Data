The Tree-GRPO construction and training path is:

1. Start from the 2,492-task Endless Terminals pool. For each base model, sample eight base-policy rollouts per task and remove tasks with `pass@8=1.0`. This yields 442 Qwen3.5-35B-A3B tasks and 530 Nemotron-3-Super-120B-A12B tasks.
2. Sample a training batch of 16 prompts. Generate eight root rollouts per prompt in fresh sandboxes, for 128 root rollouts per step. Each rollout is capped at 8 turns, 1,024 generated tokens per turn, and 16,384 input tokens; SkyRL overlong filtering drops trajectories exceeding these caps.
3. Record worker actions as immutable intent/outcome effects. Each scope binds the model provider, tools, processes, filesystem, sandbox handles, and trace cursor. Effects materialize as commits in a persistent branch graph.
4. Give Claude Opus 4.7 the worker transcript and terminal reward. The meta-agent selects a prior turn and proposes the bash action it would take there. The action is rendered through the worker policy so its tokens match the worker action format.
5. Roll the scope back to immediately before the chosen turn. Keep the prefix shared, create isolated child scopes, and sample sibling suffixes. A discarded child leaves the parent unchanged; a selected child can be merged.
6. Score completed roots and siblings with the task-specific terminal outcome reward. Prefix actions use the inter-root group baseline; suffix actions use an intra-tree sibling baseline, localizing credit after the fork.
7. Pool the advantages and update the policy with clipped GRPO. The disclosed setup runs on Modal-managed 8-H100 nodes with FSDP2, gradient checkpointing, `torch.compile`, Adam, weight decay 0.01, max-norm 0.1, a 20-step warm-up, no KL loss, ten epochs, and 1,120 total steps. Checkpoints and validation are taken every 10 steps; the rendered HTML omits the numeric learning rate.

The official `shepherd-experiments` repository provides the Tree-GRPO code, the other paper applications, microbenchmarks, and a frozen substrate snapshot. It does not provide a generated trajectory corpus, trained checkpoint, task-ID split manifest, or immutable release tag.
