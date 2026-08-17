Multimodal DPO often uses independently generated or scored chosen/rejected responses, whose lengths and styles differ conspicuously. Models can exploit these surface cues instead of learning visual facts and reasoning differences, especially in spatial, counting, and binary questions.

VaPR starts from high-quality SFT ground-truth responses and asks a text LLM to modify only task-relevant spans, injecting targeted visual or reasoning errors while preserving length and style to create hard-negative preference pairs.
