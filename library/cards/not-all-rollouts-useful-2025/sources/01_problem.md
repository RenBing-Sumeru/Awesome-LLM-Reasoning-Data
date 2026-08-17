RLVR systems can generate rollouts much faster or more cheaply than they can communicate, store, and use them for policy updates. Updating on every episode is therefore inefficient, but naive subsampling can discard the success/failure contrast that drives learning. PODS makes the update subset itself a curated data object.

