# Problem

Most visual-question-answering corpora supply a short answer but no explicit path from task interpretation through image grounding to reasoning, so supervised VLMs can jump to a conclusion before organizing the relevant evidence. This leaves builders without an inspectable target for teaching systematic multimodal reasoning.

LLaVA-CoT samples 99k image-question-answer pairs from ten VQA sources, asks GPT-4o to rewrite each answer into ordered summary, caption, reasoning, and conclusion spans, filters format and answer mismatches, and releases the resulting LLaVA-CoT-100k records for full-parameter SFT.

**L4 facts:** Primary source: arXiv:2411.10440; venue/date: ICCV 2025, official CVF record; decision boundary: teacher-written staged demonstrations are the Track 01 object, while SWIRES is a separate inference scaffold; atlas object/evaluation: image + question + four tagged text stages, tested on six multimodal reasoning benchmarks; collection note: `L4_carded`, one Track 01 category.
