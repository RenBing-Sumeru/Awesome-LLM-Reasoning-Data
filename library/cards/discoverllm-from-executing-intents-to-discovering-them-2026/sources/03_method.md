1. **Build intent trees.** Requirements are extracted from source artifacts and repeatedly abstracted into hierarchical parent–child intents.
2. **Initialize the simulated user.** Only several abstract root intents are initially visible; undiscovered child intents cannot be directly stated.
3. **Generate candidates.** The assistant samples several responses at each turn, including drafts, questions, and alternatives.
4. **Update intent states.** A judge determines whether each response reveals or satisfies latent refinements and changes nodes from undiscovered to emerging or discovered.
5. **Construct training signals.** Newly discovered intents provide reward, excessive length is penalized, and candidate responses become scored records or preference pairs for SFT, DPO, and GRPO.
