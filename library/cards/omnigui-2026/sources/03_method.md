Inputs are goal-oriented smartphone tasks across Chinese and English applications. Ten experienced Android users design tasks under the five-dimension taxonomy, execute intended trajectories on physical Android devices, and provide the human demonstrations used as ground truth.

Pipeline:

1. Record each expert trajectory while logging screen video at 30 FPS, internal device audio, screenshots before each action, and exact touch events.
2. Segment video and audio per step, using the interval between the previous action completion and the next action initiation.
3. Transcribe raw touch events into the formal 13-action space, including NONE, TAP, DOUBLE_TAP, LONG_PRESS, directional swipes, INPUT, BACK, HOME, TASK_COMPLETE, and TASK_IMPOSSIBLE.
4. Verify coordinates or strings for action parameters and assign an objective multimodal dependency label.
5. Evaluate models with teacher forcing: at each step the model sees the ground-truth history and predicts the next action as a single JSON object.

Outputs are episode records, per-step multimodal media, action labels, dependency labels, predictions, and TM/EM/SR/GP scores. Reuse requires pinning dataset repository, filtered version, prompt template, model API payload adaptation, decoding settings, coordinate normalization, and media availability.
