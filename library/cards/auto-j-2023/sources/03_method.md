1. Inputs: user queries and model responses from public preference/chat datasets, scenario definitions, hand-written scenario criteria, and evaluation prompts.
2. Pairwise construction: GPT-4 judges two responses with scenario criteria; outputs that conflict with existing human labels or cannot be reformatted are discarded; the reported pairwise training set has 3,436 examples.
3. Single-response construction: 960 Chatbot Arena query-response pairs are rated through a divide-and-conquer GPT-4 critique process with and without criteria, then combined.
4. Training: Auto-J is trained from LLaMA-2-Chat-13B with augmented pair orders and unified output formats.
5. Outputs: pairwise preference, single-response rating, and critique. Reproducibility depends on source dataset versions, GPT-4 version, criteria prompts, filtering rules, checkpoint, and output parser.
