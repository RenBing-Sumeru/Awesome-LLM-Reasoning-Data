1. The central comparison is two-stage agreement versus ordinary majority vote, not unsupervised learning versus a fully controlled gold-label setting.

2. Reproduce the temporary unlearning update, clipping rule, answer extractor, group size, and moving consensus window; each can change the pseudo-label.

3. Keep the 0.5 reserve reward separate from the elected reward when logging advantages and ablations.

4. The reported benchmark protocol uses 16 samples per question at temperature 0.6 and top-p 0.95, averaged over 16 independent seeds.

5. Evaluate a shared-wrong-prior stress set; success on ordinary agreement rates does not demonstrate escape from a correlated error.
