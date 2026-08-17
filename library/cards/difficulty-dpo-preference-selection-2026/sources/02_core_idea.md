The implicit reward difference between the chosen and rejected response measures how confidently an aligned policy separates the pair. A small positive gap means the policy is uncertain even though the annotation specifies a winner.

For well-aligned records, the DPO gradient weight is largest as that gap approaches zero. The method therefore treats small-gap records as high-information boundary cases instead of preferring broad quality, diversity, or response-length signals.
