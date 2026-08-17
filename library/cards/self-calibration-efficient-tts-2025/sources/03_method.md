The authors derive supervision from self-consistency across sampled answers, then train a calibration model to predict it. At deployment, calibrated confidence decides whether Best-of-N continues or stops.

They compare direct confidence, fixed sampling, and calibrated early stopping across three LLMs and six datasets.
