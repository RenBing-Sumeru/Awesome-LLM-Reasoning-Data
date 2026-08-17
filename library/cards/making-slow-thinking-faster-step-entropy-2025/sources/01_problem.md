Long chain-of-thought can improve difficult reasoning, but it also increases inference tokens and latency. Deleting arbitrary spans is a weak compression strategy because it does not distinguish expendable procedural text from steps that carry useful reasoning information.

This work studies a construction recipe for finding low-information steps inside model-generated mathematical CoTs. It asks whether a model-derived score can select steps to hide, so that a later model can learn to emit a shorter trace while retaining answer quality. The contribution is a reported trace-construction and training pipeline, not a verified public corpus of complete and compressed trajectories.

