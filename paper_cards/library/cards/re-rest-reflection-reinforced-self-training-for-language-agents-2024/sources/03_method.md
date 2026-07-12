The agent generates candidates and the reflector produces revisions conditioned on failure feedback. Generate, observe feedback, reflect/revise, then select for self-training; an inference-time reflection variant is also studied. Refined high-quality samples enrich the self-training set; failed initial samples need not be discarded immediately.

The resulting record contains Initial agent output, external feedback, reflection, refined output, and selected self-training episode. The reported use is sft, agent training, test time compute.
