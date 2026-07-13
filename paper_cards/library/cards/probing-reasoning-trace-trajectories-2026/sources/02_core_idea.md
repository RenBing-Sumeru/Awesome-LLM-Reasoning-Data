The protocol generates a trace, truncates it at fixed token percentiles, reinjects each prefix into the same or another model, and records next-token answer probabilities.

The data contribution is the mapping from generated candidates and feedback to retained supervision; the associated algorithm is useful only because it makes that mapping operational.
