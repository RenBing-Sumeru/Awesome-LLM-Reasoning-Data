1. **Positioning:** Most multimodal reward models are vision-centric, scalar-only, and dependent on expensive human preferences.
2. **Method handle:** The decisive actions are synthesize cross-modal response pairs, generate modality-aware rubrics and rationales, reconcile and filter teacher judgments, followed by train with sft and difficult-pair grpo.
3. **Artifact handle:** Omni-RRM releases Omni-Preference, containing response pairs, modality-aware rubrics, dimension-wise reasons, and preference judgments across text, image, video, and audio.
4. **Evidence anchor:** Omni-RRM reaches 80.2% on ShareGPT-V and 66.8% on Audio-HH-RLHF, with a 17.7-point overall gain over its base model on image tasks.
5. **Reuse decision:** The entire corpus inherits teacher-model bias, and an anonymous repository limits long-term provenance.
