The central training object is a labelled reasoning trajectory viewed at two scales. One view is an individual step; the other is a consecutive segment that supplies context for judging whether an apparent error is followed by a meaningful correction.

Hierarchical Node Compression creates the second view by merging adjacent nodes in a reasoning tree. The resulting records allow the hierarchical reward model to learn fine-grained and coarse-grained judgements together, changing the supervision unit rather than only changing the search algorithm used at inference time.
