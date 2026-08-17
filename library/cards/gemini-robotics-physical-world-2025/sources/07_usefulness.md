This Card is useful as a construction and audit reference, not as a reusable robot-training release. It gives a concrete VLA record template: current images, language instruction, embodiment and calibration metadata, expert action sequence or action chunk, optional future-arm-trajectory intermediate, episode horizon, success/progress outcome, provenance, and split membership.

For specialization studies, the 2,000–5,000-demo long-horizon setting and 5/20/100-demo adaptation curve provide defensible comparison points. A public reproduction should retain rejected and failed demonstrations, publish task and scene manifests, separate initialization from specialization effects, and report each physical trial rather than only aggregate success.

For verifier design, builders can implement distinct binary success, scalar progress, safety/path-quality, and intervention signals. The paper's rubrics are evaluation references only; using them for RL would require an explicit scorer, terminal checker, calibration, disagreement handling, and reward-hacking audit.

ERQA is directly reusable for answer-level embodied-reasoning evaluation under CC BY 4.0. Its loader and harness do not validate action generation, control stability, or long-horizon manipulation. Training reuse of Gemini Robotics remains blocked pending robot data, weights, code, lineage, split, and license disclosure.
