SPIN repeatedly samples responses from the current policy, pairs them with human responses to form iteration-specific training records, and updates the same model to distinguish and improve over its previous behavior. The closest comparison is one-pass supervised fine-tuning and direct preference optimization on a fixed pair set; unlike that neighbor, the primary object here is SPIN iteration datasets and the feedback boundary is a preference-style objective separates human responses from current-policy responses, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 700（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Self-Play+Fine-Tuning+Converts+Weak+Language+Models+to+Strong+Language+Models&author=Zixiang+Chen&hl=en）

Open dataset: yes
Dataset name: SPIN iteration datasets
Official URL: https://huggingface.co/collections/UCLA-AGI/datasets-spin-65c3624e98d4b589bbc76f3a
Scale: about 50,000 base dialogues plus generated response datasets for iterations 0 through 3
Record form: prompt, human response, current-policy response, and self-play iteration
File / storage format: JSON conversation records released as a Hugging Face dataset collection
Domains / languages: iterative self-play response data; see the official data card for exact language and domain splits
Construction and filtering: a fixed human dialogue set used as positive responses and prompts for current-policy generation; the current policy generates competing responses at each iteration; selection uses a preference-style objective separates human responses from current-policy responses
License / access constraints: official repository and dataset-card terms; the base dialogue dataset terms remain applicable
Intended use: iterative self-play fine-tuning that consumes the generated responses
