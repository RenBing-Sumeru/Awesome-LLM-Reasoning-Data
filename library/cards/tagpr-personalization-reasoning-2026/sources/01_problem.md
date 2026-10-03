Personalization requires a model to infer preferences from a user's historical examples and use that evidence in its answer. Generic reasoning ability alone does not guarantee useful personalization reasoning. An outcome score can reward a correct answer without exposing whether the reasoning used the profile coherently.

TagPR addresses the construction and training side of this problem: create explicit, semantically tagged reasoning traces, teach their syntax with SFT, and then train with structural and user-aware signals. The relevant data object is a profile-conditioned reasoning trace and its derived preference/reward supervision, rather than a benchmark of manually verified correct intermediate steps.

Primary-source locations: Sections 1 and 3.1–3.3 of the paper.
