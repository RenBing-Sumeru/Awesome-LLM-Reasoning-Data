CaTS treats self-consistency as a cheap but imperfect confidence source. It learns to calibrate that confidence, then uses the calibrated quantity to decide whether a response should be accepted early, whether more samples are worthwhile, or how a sampled set should be aggregated.

The core claim is operational rather than rhetorical: confidence and computation must be evaluated together. A calibration model is valuable only if, at a matched average sample budget, it changes which queries receive additional inference and improves the final quality–efficiency frontier.
