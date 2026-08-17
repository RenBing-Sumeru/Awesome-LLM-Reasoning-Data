1. Prepare a clean base corpus. The authors use DCLM-derived English data, remove perturbation overlap, and retain this corpus for standard models.

2. Define interventions. They sample passages, paraphrases, biographies, chats, and test items, assigning examples 0×, 1×, 4×, 16×, 64×, or 256× duplication.

3. Create perturbed sequences. Each selected item is spliced between documents in a 2048-token training sequence, bounded by EOS markers; the 100B-token perturbations total 79.9M tokens.

4. Train matched suites. Llama-style 1B and 8B models are trained at 100B or 500B tokens, with core, timing, interference, paraphrase, and architecture variants.

5. Measure exposure. Domain-specific extraction and benchmark tests compare standard and perturbed models. Verify exact training checkpoints, Hugging Face revisions, and compute settings before reproduction.
