A large reward margin makes a preference reversal by noise less likely, but any one reward source can be wrong. BeeS therefore combines external reward margins with DPO implicit reward margins, converts each source into a preference probability, and assigns a high rank only when all sources support the pair.

This is a deliberately strict selection policy. A pair with a low margin from even one source is deprioritized, so the training subset targets agreement on the direction and clarity of the preference rather than high scores from a single judge.
