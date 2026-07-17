Code candidates often share routine prefixes and suffixes yet fail because of a small divergent middle segment. Whole-sequence DPO gives routine and decisive tokens similar treatment, so it can dilute the signal from the decision that actually determines execution.

Focused-DPO asks how a preference pair can reveal the local code choice most responsible for correctness. It makes error localization part of both data construction and the loss, rather than assuming that every token in a chosen-rejected pair has equal training value.
