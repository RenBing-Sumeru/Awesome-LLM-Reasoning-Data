Sample-level data selection makes one keep-or-drop decision for an entire instruction-response pair. That assumes every target token in a retained response is useful supervision, even though one answer can mix task-relevant content with repetitions, low-information phrases, or harmful patterns.

Token Cleaning asks whether supervised fine-tuning can decide at token granularity which parts of an otherwise useful response should affect the update. It frames the unwanted tokens as noisy supervision and aims to preserve the parts that contribute useful learning signal.
