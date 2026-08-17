The paper reports 4.7 million generated theorems and approximately one billion tokens, compared with 112,000 theorems and 57 million tokens for the ReProver dataset. The exact available count comes from the official training notebook, whose output states that **4,702,639 examples were loaded**. This is strong evidence for the notebook's local input length, but the notebook reads `prover_training_data_6.json`; no checksum manifest binds that local file to the Zenodo archive, and the Zenodo record itself does not publish a row count.

Release inspection establishes the payload shape more directly than the rounded paper total. Zenodo record 13989482 publishes one 204,343,176-byte `leannavigator_dataset.tar.xz` file under CC BY 4.0 with published MD5 `ef1971d4cdec50d06fb94704b0ee16f4`. Its tar member is a 2,690,343,143-byte `leannavigator_dataset.json`, beginning with a top-level JSON array of two-element arrays. The official 10,000-row GitHub sample confirms two-string `[state, proof/tactic text]` records. The full archive checksum and row count were not independently recomputed in the accepted audit.

Search-efficiency evidence is author-reported. On 121 randomly selected MIL theorems with two minutes per theorem, LeanNavigator reaches an average of 2,035.45 states, versus 21.69 for ReProver. The paper attributes the difference to FAISS template retrieval and instantiation rather than autoregressive tactic generation. Average tactic application is reported as 0.12 seconds.

For downstream proof generation, Table 3 reports:

| Model | MIL | MiniF2F |
|---|---:|---:|
| LeanNavigator flan-t5-base | 39/117 | 104/493 |
| LeanNavigator flan-t5-small | 25/117 | 52/493 |
| ReProver | 30/117 | 99/493 |

Each theorem receives two minutes; at each state the model gets ten attempts to find a valid tactic leading to an unseen state, then continues from the first valid result. These scores demonstrate the reported end-to-end system under the paper's settings. They do not independently establish record novelty, safe splitting, release completeness, rights, decontamination, or compatibility with later Lean/mathlib versions.
