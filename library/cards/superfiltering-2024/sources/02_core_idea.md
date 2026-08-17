Superfiltering uses GPT-2 loss ratios to score how much each response depends on its instruction, ranks the full pool cheaply, and publishes the scored records together with 5 percent and 2 percent subsets. The closest comparison is random selection and strong-LLM quality scoring over the full instruction pool; unlike that neighbor, the primary object here is Superfiltering scored instruction data and the feedback boundary is low instruction-following difficulty scores rank records before fixed-percentage selection, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Open dataset: yes
Dataset name: Superfiltering scored instruction data
Official URL: https://github.com/tianyi-lab/Superfiltering/tree/main/data
Scale: scored Alpaca and Alpaca-GPT4 pools with public 5 percent and 2 percent selected subsets
Record form: instruction, optional input, output, GPT-2 instruction-following difficulty score, and selection membership
File / storage format: JSON instruction-input-output records with filtering scores and selected splits
Domains / languages: weak-model instruction utility filtering; see the official data card for exact language and domain splits
Construction and filtering: public Alpaca and Alpaca-GPT4 instruction pools; a small GPT-2 model computes instruction-following difficulty from conditional loss; selection uses low instruction-following difficulty scores rank records before fixed-percentage selection
License / access constraints: official repository license and the terms of the underlying Alpaca-family data
Intended use: small-subset instruction SFT
