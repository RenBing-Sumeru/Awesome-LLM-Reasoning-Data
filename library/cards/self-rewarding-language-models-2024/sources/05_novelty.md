Earlier AI-feedback approaches generally treat the judge as a fixed stronger model or a fixed reward model. This paper makes the trainable policy itself the feedback producer and repeats the construction after each update.

The contribution is thus a changing data provenance: each training round has a policy version, a judging prompt, generated alternatives, and model-produced preference labels. The feedback source is part of the system being optimized rather than a static upstream dataset.
