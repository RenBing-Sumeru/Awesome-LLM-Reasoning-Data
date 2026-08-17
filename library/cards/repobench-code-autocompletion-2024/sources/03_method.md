Inputs include the task specification, repository or environment state, released context fields, and the model or human action/answer surface.

1. Construct historical and test repository pools for Python and Java.
2. Build retrieval and completion examples with cross-file context.
3. Run retrieval, completion, or pipeline systems.
4. Score outputs with Accuracy@k, Exact Match, and Edit Similarity.

Outputs are RepoBench-R, RepoBench-C, and RepoBench-P tasks over Python and Java, plus v1.1 Hugging Face datasets for both languages. The verifier, reward, judge, or environment is: RepoBench-R uses Accuracy@k for retrieval; RepoBench-C and RepoBench-P use Exact Match and Edit Similarity for code completion or pipeline evaluation. Reproduction requires pinning artifact release, split, evaluator version, environment image, prompt/scaffold, budget, and redistribution terms.
