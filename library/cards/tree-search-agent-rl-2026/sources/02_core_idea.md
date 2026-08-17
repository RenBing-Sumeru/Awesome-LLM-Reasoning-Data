The central construction is shared-prefix tree sampling at the granularity of one complete ReAct interaction step. For each prompt, the policy first generates \(M\) independent complete chains. In each tree, the procedure randomly selects \(N\) non-answer nodes, reuses the root-to-node prefix, and generates a new suffix to another terminal leaf; this is repeated for \(L\) expansion rounds. The number of completed trajectories is

\[
M(LN+1).
\]

With the default \(M=2\), \(N=2\), and \(L=1\), the forest contains two independent roots and three completed leaves per tree, for six leaves in total. Because four expanded leaves reuse already generated prefixes, the expected token/tool-call expenditure is approximately the cost of four fully independent trajectories rather than six. This is the paper’s main data-efficiency proposition: a nominal group of six completed responses is not equivalent to six independent samples, because their ancestry and marginal generation costs differ.

The released manager has a second parameter, \(K\), for how many leaves to return from each tree. It samples \(K\) leaves, prunes unselected leaves or subtrees in memory, packs the selected full responses, and later deletes the tree. Default scripts use \(K=3\), so the default three leaves in each tree are all selected. Under larger or non-default trees, however, some leaves can be discarded; neither a retained/rejected manifest nor the deleted topology is publicly released.

Feedback is terminal and programmatic. Single-hop and multi-hop QA use normalized exact match; web-agent QA uses normalized answer-token F1; invalid structure incurs a 0.2 format penalty. Tree-GRPO normalizes selected-leaf outcomes once within each tree and once across all trees for the prompt, then sums the intra-tree and inter-tree components as advantages/returns for policy learning. The intra-tree term compares continuations that share a prefix and therefore acts as an outcome-derived local preference signal. The inter-tree term compares independently rooted trees and provides a broader baseline when one small tree has little reward variation.

This mechanism is implicit process supervision, not an explicit process-label release. The paper proves a matching gradient direction between intra-tree GRPO and step-level DPO under a binary-outcome assumption, with different weighting. That analysis does not mean that step-DPO pairs, branch-point labels, or per-node rewards are materialized or published; it is also only an analytical approximation for web-agent training, where F1 is graded rather than binary.
