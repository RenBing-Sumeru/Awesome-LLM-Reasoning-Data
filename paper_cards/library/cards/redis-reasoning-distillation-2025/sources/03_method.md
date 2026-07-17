The pipeline has three stages: teacher-driven data augmentation, SFT on rule generation plus rule following, and preference alignment. GPT-4o serves as teacher; the study compares alignment objectives and reports ORPO as the strongest overall option in its setting.

Its released materials cover code, data, and checkpoints. The experiments use LLaMA-3, Mistral, and Qwen students on 1D-ARC, List Function, ACRE, and MiniSCAN, so the training consumer is explicit: generated hypotheses and filtered demonstrations are consumed by SFT and preference alignment.
