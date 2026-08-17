Augmented Lean Formalisation mutates seed problems, writes reasoning plans and Lean artifacts, and retains only compiler-verified proofs in a 336K-record SFT set. Relative to direct formalization without controlled problem mutation, it makes original question, mutated question, source, Lean statement, Lean proof, problem type, reasoning chain, and difficulty the reusable target and uses Lean compilation, formal proof checking, mutation validation, and difficulty assignment as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: Pythagoras-Prover SFT Dataset
Official URL: https://huggingface.co/datasets/Pythagoras-LM/SFT_Dataset_Distillation_4B
Scale: 336,596 mutated problems split into 86,715 easy, 134,049 medium, and 115,832 hard instances
Record form: original question, mutated question, source, Lean statement, Lean proof, problem type, reasoning chain, and difficulty
File / storage format: one public JSON file
Domains / languages: English informal mathematics and Lean 4 formal theorem proving
Construction and filtering: an augmented formalization pipeline mutates problems and generates proof plans and Lean proofs; Lean compilation, formal proof checking, mutation validation, and difficulty assignment
License / access constraints: Apache-2.0
Intended use: autoregressive and diffusion-based theorem-prover SFT
