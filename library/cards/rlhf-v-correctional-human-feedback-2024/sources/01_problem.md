Vision-language models can mention objects, relations, and details not supported by an image. RLHF-V addresses this hallucination boundary with human corrections that identify the offending response segments instead of only selecting a whole answer.

The decision surface is an image, instruction, model response, and its hallucinated spans. It targets image grounding while retaining useful behavior, not a general guarantee of truth beyond the displayed image.
