an ensemble of AlphaCode models samples programs independently for each problem. draw one million samples per problem from each model in the main large-scale analysis before filtering and clustering. remove noncompiling and example-test-failing samples, cluster survivors by behavior on generated inputs, then rank representatives.

The resulting record contains per-problem program pools with compilation status, example-test behavior, behavioral cluster membership, rank, and up to ten submitted programs. The reported use is evaluation, test time compute.
