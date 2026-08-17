1. Run a rating judge with a fixed evaluation prompt and extract logits for all allowed rating tokens.

2. On held-out human-rated calibration examples, compute nonconformity scores and fit one of seven regression or two ordinal conformal predictors.

3. For a test response, convert the logits into a continuous prediction interval at the chosen miscoverage level. Apply boundary adjustment to map it to valid ordinal ratings without reducing the formal coverage guarantee.

4. Report the interval width as uncertainty and its midpoint as an alternative score; compare it with raw and probability-weighted ratings.

The procedure requires access to token logits, labeled calibration data, prompts, a specified conformal method, and a fixed judge version. Exchangeability between calibration and test data is an essential assumption.
