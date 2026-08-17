1. **Positioning:** Existing visual reward models are task-specific and cannot share knowledge across image/video understanding and generation or across pairwise and pointwise evaluation.
2. **Method handle:** The decisive actions are build a unified human preference mixture, train pairwise and pointwise rewards, filter model outputs into dpo pairs, followed by align image and video models.
3. **Artifact handle:** UnifiedReward is trained on large-scale human preferences across image and video understanding and generation.
4. **Evidence anchor:** Joint reward training improves assessment across all included understanding and generation domains.
5. **Reuse decision:** Different tasks may have conflicting criteria that a shared scalar hides.
