Fixed-model test-time scaling often adds independent samples, but independent attempts may repeat the same error and fail to exploit a model's ability to reconsider a partial solution. Training a separate critic or retraining the model can be costly, while a long single chain may not reliably self-correct.

The paper asks how a fixed reasoning model can spend more inference samples to trigger useful self-correction. It seeks a sampling schedule that progressively deepens reflection, rather than treating every rollout as an unrelated answer or relying on parameter updates.
