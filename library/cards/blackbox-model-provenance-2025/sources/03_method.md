1. Record the ordered, randomly shuffled training transcript.
2. In the query setting, correlate a suspect model's token likelihoods on transcript samples with their training order; a reference model removes natural variation.
3. In the observational setting, correlate n-gram matches by transcript partition or compare text likelihood under models retrained on independent reshuffles.
4. Convert the statistic to a p-value or an approximate z-score. Fix transcript order, sample count, reference model, retraining fraction, and temperature.
