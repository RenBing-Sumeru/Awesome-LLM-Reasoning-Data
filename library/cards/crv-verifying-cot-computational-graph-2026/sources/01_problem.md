Black-box verifiers judge steps from text, while gray-box methods usually compress hidden states. They can detect failure but rarely explain which internal computation caused it, leaving verification signals mechanistically opaque and difficult to use for targeted repair.

CRV converts each chain-of-thought step into an attribution graph, extracts structural error fingerprints for classification, and intervenes on influential transcoder features inside the model.
