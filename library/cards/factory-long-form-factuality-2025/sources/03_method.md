1. **Select seed topics:** Broad Wikipedia topics are sampled to avoid covering only common encyclopaedic questions.


2. **Expand and filter with models:** LLMs turn topics into diverse long-form questions, and model-in-the-loop filtering removes prompts that current systems answer too easily to create hard candidates.


3. **Human-refine prompts:** Annotators ensure questions are fact-seeking, answerable, unambiguous, non-time-sensitive, and safe, deleting or rewriting defects.


4. **Annotate claims:** Responses from six retrieval-augmented models are decomposed into claims. Humans search for evidence and assign four labels with URLs and snippets. Reproduction requires fixed search dates and evidence availability.
