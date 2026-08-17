The method finds two code candidates with shared context but different middle segments, then prefers the segment associated with stronger executable ranking. The shared context makes the middle difference interpretable as an error-prone point rather than a broad stylistic difference.

Focused-DPO amplifies the chosen and rejected middle terms in DPO while reducing reliance on a similar rejected suffix. The same preference pair therefore becomes a focused supervision record: training is asked to correct the high-impact local decision, not merely raise the likelihood of an entire solution.
