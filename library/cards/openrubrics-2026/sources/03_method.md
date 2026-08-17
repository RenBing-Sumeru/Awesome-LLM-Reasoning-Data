1. **Assemble preferences.** The authors combine UltraFeedback, Magpie, Skywork-Preference, Synthetic-IF, MegaScience, and Medical-o1. Existing chosen/rejected pairs are reused; for some science and medical data, open models generate candidates and reward-model ensembles form best-worst pairs.

2. **Generate criteria.** Given a prompt, ranked responses, and preference signals, an instruction-tuned LLM produces hard rules and principles through CRG.

3. **Filter by agreement.** The same model judges induced response pairs with the rubric. The rubric passes only when group accuracy is at least 0.5 and each retained pair receives the known preference label.

4. **Train and infer.** A generator is SFT-trained to emit a rubric from a prompt; RUBRIC-RM is SFT-trained to predict A-versus-B using prompt, pair, rubric, and label. At inference it generates or reuses a cached rubric before judging.

Reproduction needs source-data revisions, generation prompts and model, threshold 0.5, training splits, Qwen3 backbone/checkpoints, and benchmark scripts. License terms must be checked at the public release.
