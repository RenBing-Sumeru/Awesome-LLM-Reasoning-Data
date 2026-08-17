# Core idea

UltraInteract changes a reasoning demonstration from an isolated answer into a branch of a preference tree: objective answer or execution checks decide which actor-written actions become SFT targets, while failed branches can receive observations and critiques before another attempt. The trainable correct action or trajectory is the primary object, ground-truth correctness is the selection boundary, and the companion chosen/rejected pairs do not make preference optimization the Card's central category.

Google Scholar citations: 216（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Advancing+LLM+Reasoning+Generalists+with+Preference+Trees&author=Lifan+Yuan&hl=en）

Open dataset: yes  
Dataset name: UltraInteract_sft, with UltraInteract_pair as the companion preference release  
Official URL: https://huggingface.co/datasets/openbmb/UltraInteract_sft  
Scale: the current SFT file has 288,579 rows and the current pair file has 219,522 rows; the paper reports 85,918 source instructions, 286,979 correct answers, and 219,819 pairs  
Record form: SFT rows contain `task`, `dataset`, `instruction`, `response`, `id`, and `parent_id`; pair rows contain `task`, `dataset`, `trajectory`, `chosen`, `rejected`, `id`, and `parent_id`  
File / storage format: one public Parquet train file per release, with actual SFT schema and a row read successfully on 2026-07-14  
Domains / languages: English mathematics, Python-oriented coding, logical reasoning, table reasoning, and tool-assisted question answering  
Construction and filtering: actor models write CoT or code actions, ground truth and execution select correct actions, environment feedback plus GPT-4 critique extend failed branches, syntax and decontamination filters remove invalid records  
License / access constraints: both Hugging Face releases are public, non-gated, and tagged MIT; upstream component datasets retain source-specific terms  
Intended use: reasoning SFT from correct actions or trajectories, preference learning from paired branches, reward modeling, and data-lineage audit
