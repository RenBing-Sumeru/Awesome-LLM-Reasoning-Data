CM-Align samples multiple responses in English and in every target language. It chooses the English response with the strongest self-consistency, then measures each non-English response against that anchor with metrics adapted to Math, Code, or general instruction following.

Each prompt-language group yields one chosen and one rejected answer. These constructed pairs are used in DPO, and the public implementation exposes the response sampling and consistency-based construction pipeline.
