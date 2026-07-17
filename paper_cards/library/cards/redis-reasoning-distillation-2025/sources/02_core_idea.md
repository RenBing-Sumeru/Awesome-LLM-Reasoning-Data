ReDis constructs records for both rule generation and rule following. A teacher produces candidate natural-language hypotheses, and a hypothesis is scored by how many demonstrations it satisfies; that score supplies a filter for SFT and a preference signal for alignment.

The key idea is to train the student on the latent reasoning interface, not merely on outputs. The method couples augmented demonstrations with filtered hypotheses and then aligns the student so it can use a smaller hypothesis search space at inference time.
