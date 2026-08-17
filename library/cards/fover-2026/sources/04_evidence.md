The strongest direct evidence concerns learned verification behavior, not intrinsic row quality. On ProcessBench, the paper reports average AUROC changing from 67.4 to 77.3 for the Llama 3.1 8B backbone and from 75.9 to 85.8 for Qwen 2.5 7B after FOVER-40K training; paired bootstrap tests mark each domain improvement significant under the paper's threshold.

Best-of-7 results are mixed at the benchmark level but positive on reported averages:

| Backbone and setting | Logic average | Math average |
|---|---:|---:|
| Llama 3.1 8B baseline | 48.9 | 53.0 |
| FOVER-Llama3.1-8B-PRM | 50.6 | 54.7 |
| Qwen 2.5 7B baseline | 54.2 | 64.8 |
| FOVER-Qwen2.5-7B-PRM | 56.6 | 66.2 |

The Qwen FOLIO cell decreases from 64.0 to 63.5 and AIME from 12.4 to 12.0; the Llama MATH cell decreases from 54.4 to 53.6. On unseen-task averages, FOVER-Llama improves NLI from 47.8 to 55.6 and BBH from 74.0 to 80.0; FOVER-Qwen ties its base NLI average at 58.4 and improves BBH from 69.7 to 70.7. These results support some transfer under this generation-and-ranking protocol, not uniform dominance.

The task ablation reports a 75.3 average for the Llama baseline, 79.4 with formal logic only, 80.4 with theorem proving only, and 80.8 with both across five selected tasks. A 10K training subset is reported as already comparable with the full 40K, but the figure does not establish a universal sample-efficiency law.

One negative case is especially diagnostic: the FOVER PRM lowers the score of an intermediate step that rounds 5.44444… to 5.44. The authors interpret this as possible over-strictness induced by formal labels. Hardware and runtime reporting is useful for feasibility—four A100 SXM4 80GB GPUs, roughly one hour per 8B training run, less than ten minutes for all formal-logic verification in one Z3 process, and about three seconds per Isabelle step—but it is not a substitute for released failure manifests.
