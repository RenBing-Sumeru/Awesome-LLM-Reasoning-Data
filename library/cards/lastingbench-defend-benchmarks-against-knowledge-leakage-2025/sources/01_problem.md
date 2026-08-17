Long-context QA scores can be inflated when a model recalls benchmark facts instead of using the supplied context. Retiring and rebuilding every leaked benchmark is expensive, so a benchmark needs a way to preserve its reasoning task while breaking a memorized answer association.

LastingBench probes whether answers persist without context or under changed questions, then rewrites only the answer-bearing evidence into a counterfactual alternative. The resulting test instance asks the same kind of reasoning question but requires following the revised context.
