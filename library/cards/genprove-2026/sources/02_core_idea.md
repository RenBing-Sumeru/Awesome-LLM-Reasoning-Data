ReFInE attaches `(DocID, SentID, Relation)` triples—Quotation, Compression, or Inference—to answer sentences. GenProve first learns the tagged output with SFT, then uses GRPO with a threshold-gated content-similarity reward and exact provenance-triple F1.

