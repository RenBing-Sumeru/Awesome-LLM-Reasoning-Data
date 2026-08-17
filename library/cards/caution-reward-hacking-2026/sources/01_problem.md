Best-of-N sampling generates many candidates, lets a reward model score them, and returns the maximum. As N grows, this can select atypical responses that exploit reward-model shortcuts rather than improve true quality, producing the characteristic rise then fall in accuracy. Stronger rewards are incomplete protection, whereas global distribution constraints can reject genuinely good novel answers.

The paper proposes an inference-time pessimism mechanism, called caution. It estimates whether each reward score is unreliable because its response is atypical, subtracts that uncertainty from the score, and tests whether larger sampling budgets can again help rather than amplify reward hacking.

The intended safety check is therefore true task quality at increasing N, not reward score alone.
