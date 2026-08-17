SimPO defines its implicit reward as the average log probability of a response, rather than a reference-relative log-ratio. Length normalization makes the training score correspond more closely to how a model assigns probability per generated token and limits a simple preference for longer answers.

It then inserts a target reward margin into a Bradley-Terry preference loss. A chosen/rejected pair remains the supervision unit, but the trainer is asked not only to rank the chosen response higher, but to establish a specified separation between the two implicit rewards.
