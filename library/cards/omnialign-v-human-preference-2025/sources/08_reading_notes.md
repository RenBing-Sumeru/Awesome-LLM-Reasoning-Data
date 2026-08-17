1. The record is image path, prompt, chosen, and rejected—not a text-only DPO example.
2. LLaVA-NeXT samples negatives; an LLM judge chooses the most intent-inconsistent one.
3. Keep 205K SFT records separate from the 150K released DPO pairs.
4. The clearest result is the DPO gain after OmniAlign-V SFT; evaluation remains judge-based.
5. Fix the Hugging Face revision and compare image rights and benchmark overlap before training.
