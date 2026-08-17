Pretraining scaling laws normally optimize model size and training tokens without charging for repeated inference samples, even though deployment may use pass@k-style sampling many times per query.

The paper asks how this allocation should be made so that extra computation improves the final decision rather than being treated as a free afterthought.
