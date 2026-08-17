For `instruction_demonstration_rationale_data`, the release supplies paired driving questions and answers across factual description, pairwise interaction reasoning, and aggregate intention. It can support SFT or evaluation of motion-language models, provided builders preserve category labels and do not conflate generated answers with deterministically verified facts.

For `environment_agent_trajectory_data`, the useful unit is the scene-linked record: WOMD scene ID, original and substituted agent IDs, current and future timestamps, map and signal context, questions, answers, and optional rendered frames. Causal prediction studies should expose only current and historical observations while separately marking answers that were constructed from future trajectories.

An auditable reuse package should pin the WOMD archive and split manifest, repository commit, translator and prompt hashes, Azure model snapshot and decoding settings, raw response, parser result, retry/rejection history, human-review labels, correction history, and license lineage. Visual reuse should additionally pin ScenarioNet, MetaDrive, camera configuration, frame range, and whether future frames are included.

The dataset can be used to study traffic-rule reasoning, interaction explanation, motion-language SFT, scene-grounding errors, hindsight leakage, and the gap between offline annotation and online deployment. Reported model and trajectory-prediction improvements motivate these uses but do not certify the transformed dataset.

