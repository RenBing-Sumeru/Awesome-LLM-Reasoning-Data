English-centric models are often better aligned in English than in other languages. Existing multilingual DPO pipelines commonly treat an English response as a reliable anchor and use translation or heuristic similarity to form chosen and rejected target-language answers.

CM-Align asks how to build multilingual preference pairs without assuming every English answer is sound. It first selects a dependable English anchor, then uses cross-lingual consistency to decide which target-language responses should train DPO.
