The five reported stages are:

- Stage 0: about 2.2M multimodal samples and up to 36B tokens, drawn from Stage 1; the language model and vision encoder are frozen and only the connector is trained.
- Stage 1: about 32.5M samples and 112.5B tokens at 16,384 tokens. It includes about 6.5M text-reasoning samples/40B tokens and 26M multimodal samples/about 72B tokens. Named domains include math, science, code, multilingual understanding, dialogue, tool use, safety, captioning, VQA, OCR, documents, grounding, and function calling.
- Stage 2: about 11M samples and 55B tokens at 49,152 tokens. It reuses 25% of Stage 1 and adds about 1.4M video and multi-image samples/17B tokens. Non-QA sources are converted with templates or model-generated questions and answers. CommonCrawl PDFs are parsed with NeMo Retriever Parse for multi-page QA.
- Stage 3: 1M code-reasoning samples/15B tokens at 49,152 tokens, introduced after coding scores declined.
- Stage 4: about 74K long-context samples/12B tokens, averaging 160K tokens, trained with a 311,296-token maximum.

Reasoning traces are human-authored or generated with Qwen2.5-VL-32B-Instruct, GLM-4.1V, and GLM-4.5V. Qwen2.5 and Qwen3 family models create QA from OCR or captions; selected Stage 2 datasets are relabeled with Qwen2.5-VL-72B-Instruct. Exact prompts, revisions, candidate counts, filters, and acceptance rates are unknown.

Training uses Megatron, Transformer Engine, Megatron Energon, FP8 with selected layers retained in BF16, AdamW, cosine decay with warmup, online balance-aware sequence packing, and loss square-averaging. Videos are sampled at two frames per second up to 128 frames, or uniformly to 128 frames when longer than 64 seconds. The exact code/config revision for each run is not pinned.

The public dataset formats each item as an id plus multimodal messages. Content can reference text, images, video, or audio with optional source and media metadata. Some subsets include tarred media; others provide annotations and acquisition instructions. NVPDFTex separately compiles LaTeX into page PNGs and layout JSON with bounding boxes, category labels, and text, supplying synthetic OCR ground truth.
