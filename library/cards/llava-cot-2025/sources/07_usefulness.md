# Usefulness

- **Multimodal SFT builder:** use the released JSON records to teach an existing VLM an explicit plan-ground-reason-answer target; output a checkpoint and report both stage-format compliance and task accuracy.
- **Data auditor:** compare source answers with conclusions, then independently score visual grounding and rationale faithfulness rather than accepting the release judge alone.
- **Do not use when:** upstream image licenses cannot be satisfied, the target requires non-disclosed internal chains rather than exposed traces, or the application cannot tolerate teacher-authored unfaithful rationales.
