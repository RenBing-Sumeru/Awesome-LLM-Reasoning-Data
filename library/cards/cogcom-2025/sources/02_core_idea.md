# Core idea

CogCoM defines a chain of manipulations as linguistic reasoning interleaved with explicit operations such as OCR, Grounding, CropZoomIn, Counting, Calculate, and Line. A plan becomes a branching execution tree; visual models or experts fill its results, and final-answer-terminating paths become multi-turn, multi-image SFT targets. The primary category is instruction, demonstration, and rationale data because the released chain, not the runtime tool environment, is the training consumer's serialized object.

Google Scholar citations: 40（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=CogCoM%3A+A+Visual+Language+Model+with+Chain-of-Manipulations+Reasoning&author=Ji+Qi&hl=en）

Open dataset: yes  
Dataset name: CoMDataset  
Official URL: https://huggingface.co/datasets/qijimrc/CoMDataset  
Scale: 80,827 released automatic records, 4,518 test records, and 6,998 expert math records; the paper summarizes the training portions as about 70K automatic and 7K math chains  
Record form: `pid`, `image_path`, `decoded_image`, `question`, `answer`, `com_founds`, and `final_com`; manipulation findings include operation, arguments, boxes or recognized text, variables, return values, descriptions, and found status  
File / storage format: public Parquet/JSONL data plus an image archive and visualization notebook  
Domains / languages: primarily English visual question answering, OCR, counting, visual grounding, charts, geometry, and graphical mathematics  
Construction and filtering: GPT-4-turbo writes plans, GroundingDINO/PaddleOCR execute primitive operations, DFS keeps paths ending in the source answer, and ten experts author and verify the math subset  
License / access constraints: CC-BY-SA-4.0 for the official release; component benchmark images and questions retain their source terms  
Intended use: evidence-bearing multimodal SFT, visual-tool distillation, manipulation-trace auditing, and controlled studies of intermediate visual supervision
