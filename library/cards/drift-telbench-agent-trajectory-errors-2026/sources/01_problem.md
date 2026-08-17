Deep-research trajectories contain search, browsing, hypotheses, and evidence synthesis. A wrong final answer shows failure but cannot distinguish normal exploration, harmless noise, and an error span that actually changes the conclusion, so trajectory-level scoring provides weak repair guidance.

The work segments raw logs into semantic spans, annotates harmful errors, and introduces DRIFT to track claims and their evidence support, locating the first span that corrupts the answer path.
