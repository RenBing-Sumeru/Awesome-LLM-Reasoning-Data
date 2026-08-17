Existing agent evaluation assigns one success score to a trajectory or treats every failed tool call as an error. DRIFT changes the unit to semantic spans and marks only harmful locations that leave downstream claims unsupported, separating normal exploration from causal failure. The novelty is claim-centric span supervision and the earliest-error contract rather than ordinary log segmentation.

Normal exploratory failures are therefore not automatically treated as harmful negative rewards.
