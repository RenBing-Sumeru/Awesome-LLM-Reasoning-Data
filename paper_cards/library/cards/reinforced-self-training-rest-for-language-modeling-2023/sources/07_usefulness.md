The batch is explicitly training data for offline policy improvement. It is relevant to Track 05 because selection quality, policy version, and reuse across iterations change what “self-generated data” means.

ReST provides a compact lineage model for any iterative self-training claim: generation batch, quality signal, optimizer, and policy version must remain separable.
