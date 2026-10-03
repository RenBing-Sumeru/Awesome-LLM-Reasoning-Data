The paper evaluates a Qwen3-8B policy on LaMP validation tasks and reports additional generalization evaluations on LongLaMP, PGraphRAG, and a Dianping-derived benchmark. Its ablations compare the effects of SFT, tag reward, PRMU, and the exploratory RL stage. It also varies profile length and profile retrieval, including recency, BM25, Contriever, and random selection.

This evidence concerns downstream personalized understanding/generation, training-component contributions, and sensitivity to available user context. It does not provide a comprehensive ground-truth labeling of semantic correctness for every tagged step. Improvements in output metrics should therefore not be read as a guarantee of faithful intermediate reasoning.

The approximately 2,000 examples describe the SFT stage only. Preference-model training and RL use additional examples, so this number is not the entire training-data budget. An independent reproduction has not been conducted for this card.

Primary-source locations: Sections 4.1–4.6; Tables 1–3; Appendices A, B, and D.
