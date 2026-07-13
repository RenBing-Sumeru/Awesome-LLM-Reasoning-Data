The two-stage recipe first performs SFT on positive traces, then applies a REINFORCE-style REDI objective to both positive and previously discarded negative teacher traces.

The data contribution is the mapping from generated candidates and feedback to retained supervision; the associated algorithm is useful only because it makes that mapping operational.
