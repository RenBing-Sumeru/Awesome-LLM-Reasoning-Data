# Usefulness

- **Multimodal data builder:** start from image-QA seeds, reproduce clarity and complexity stratification, and generate task-conditioned question variants; output LLaVA conversation JSON and keep operation provenance for every record.
- **Dataset auditor:** group the public records by source image and synthesis operation, then measure answer error, effective image diversity, near duplicates, and license coverage rather than only model accuracy.
- **Do not use when:** the application requires step-by-step rationales, independently verified answers, or a single permissive dataset license; MathV360K does not provide those guarantees.
