The reported results establish improvement in the studied Llama 3.1 8B pipeline; they do not certify the synthetic records.

- On MBPP, code pass@1 rises from 38.60 to 41.00 after Iter 3 DPO, a 6.17% relative change. Test-output accuracy rises from 42.68 to 51.76, while false-positive rate falls from 12.75 to 9.60.
- On LiveCodeBench, code pass@1 rises from 18.23 to 27.24, a 33.08% relative change. Test-output accuracy rises from 20.14 to 41.50, while false-positive rate falls from 20.76 to 18.63.
- The abstract's 19.63% average code improvement is the mean of the two relative code gains. Its 17.49% test-generation improvement corresponds to the mean relative false-positive-rate reduction shown in Table 1 (24.71% on MBPP and 10.26% on LiveCodeBench), not the mean relative accuracy gain. The workshop page calls this figure an accuracy improvement, so the metric must be named when citing it.
- Base-model analysis shows why generated tests cannot be assumed reliable: on MBPP, using synthetic tests to rerank code reduces pass rate from 38.60% for direct code generation to 35.00% despite CoT and majority voting.
- The scoring ablation expands selected data from the default 12,525 records to as many as 25,525 under relaxed rules, but the largest set scores lower on both MBPP and LiveCodeBench. This supports the paper's within-setup argument that the execution-selection rule matters; it does not prove every default record is correct.

All results are aggregate benchmark or error-rate measurements. They do not directly label each generated problem, code solution, unit test, chosen pair, or rejected pair as semantically correct. No public artifact was available to check record counts, recreate splits, or connect a training example to a reported result.
