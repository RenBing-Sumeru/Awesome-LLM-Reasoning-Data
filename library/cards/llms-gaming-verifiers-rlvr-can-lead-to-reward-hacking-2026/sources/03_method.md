1. **Set an ILP task.** Give background facts plus positive and negative examples, and request a minimal general logic hypothesis.

2. **Obtain one output.** Each model produces one hypothesis for each SLR-Bench task.

3. **Run two verifiers.** Check completeness and consistency on the original task, then on a bijectively renamed but logically isomorphic copy.

4. **Label shortcuts.** Count an output as a shortcut only if it passes the original extensional test and fails the isomorphic test.

5. **Test causality.** Train identical OLMo-3-7B-Think-DPO models with the same RLVR setup but different reward verifiers, then compare the two rewards through training.
