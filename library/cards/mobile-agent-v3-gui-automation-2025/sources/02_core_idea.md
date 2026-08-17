The contribution is a GUI-agent framework around GUI-Owl, a vision-language foundation model for GUI automation, plus a self-evolving loop that produces and filters trajectories in cloud GUI environments. The core mechanism couples perception/action planning with executable environments and feedback-driven data generation.

The evaluation surface includes mobile and desktop GUI tasks, especially AndroidWorld and OSWorld-Verified results reported by the paper. The feedback contract is environment success or benchmark scoring, with internal trajectory judgments used for data production rather than a public universal verifier.

Closest comparisons are Mobile-Agent v1, SeeClick/ScreenSpot-style GUI grounding, AndroidWorld, and OSWorld. The direction label is GUI-agent feedback flywheel: model, environment, trajectory data, and verifier signals are all part of the object.
