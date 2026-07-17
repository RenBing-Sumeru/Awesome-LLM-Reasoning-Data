Earlier RLHF pipelines learn a reward model and optimize a policy against it. DPO makes the policy/reference likelihood ratio itself the reward parameterization, so the same preference pair can be consumed by one stable supervised-style objective.

The contribution is not the collection of a new preference dataset. It changes the optimizer that consumes such datasets, making the pairwise record, reference policy, and beta coefficient the central reusable interface for a large family of later methods.
