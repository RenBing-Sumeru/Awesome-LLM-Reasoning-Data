The authors derive a fine-grained DPO objective containing a preference-divergence term. A negative value indicates that the chosen response under one aspect is also favored by the other aspects, whereas a positive value signals conflict with the broader preference set.

Rather than optimize this complicated objective directly, the method uses divergence as a filter. Selecting the most negative values preserves consensus records and discards records that would ask the policy to follow an aspect-specific ranking opposed by the rest of the dataset.
