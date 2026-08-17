All model components initialize from MiMo-VL 7B-SFT-2508. Stage 1 mixes inherited general data with PixMo-Points, RoboAfford, RoboRefIt, planning sources derived from BridgeData V2, RoboVQA, AgiBot and HoloAssist, egocentric sources, SQA3D, self-curated 3D grounding, VLM-3R, RefSpatial, and EmbSpatial-SFT.

Stage 2 carries those data forward and adds autonomous-driving sources spanning perception, participant intent and interaction, meta-actions, traffic knowledge, justification, and planning. Named families include CODA-LM, LingoQA-style sessions, DriveLM, OmniDrive, nuScenes-QA, MME-RealWorld, IDKB, MAPLM, DriveAction, and NuInstruct.

Stage 3 generates CoT for situation analysis, candidate solutions, alternatives, affordance/spatial constraints, risk, trajectory evaluation, and justification. The generator identity, prompts, decoding, source subset, trace count, filtering, correctness verification, and rejected records are unknown.

Stages 1-3 train all components with batch 512, AdamW, learning rate 2e-6, weight decay 0.05, cosine scheduling, and 32,768 context. Stage 4 uses batch 32, learning rate 1e-6, weight decay 0, the same optimizer/schedule/context, and all components. Epochs, steps, warmup, precision, hardware, compute, and seeds remain undisclosed.
