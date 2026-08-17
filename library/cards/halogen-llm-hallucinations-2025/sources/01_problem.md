Hallucinations vary by task: programming, scientific attribution, summarisation, and biographical generation require different evidence sources and verification rules. Human verification of tens of thousands of prompts and hundreds of thousands of outputs is prohibitively expensive, while one generic judge cannot handle code, citations, and open text reliably.

HALoGEN builds high-precision task-specific verifiers for nine generation scenarios, decomposes outputs into atomic units, and checks them against authoritative sources at scale.
