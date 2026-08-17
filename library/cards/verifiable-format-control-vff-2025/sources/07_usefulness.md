1. **Format SFT construction:** Attach executable constraints to existing instructions, sample responses, and retain verifier-passing outputs to obtain structured supervision.  
2. **Preference-pair generation:** Use passing responses as chosen and failing responses as rejected under the same prompt for DPO or reward-model training.  
3. **RLVR:** Combine multiple `verify` outputs into rewards for JSON, length, or paragraph constraints. When the target includes factual correctness, style, or semantic quality, an additional judge is required; VFF rewards alone are insufficient.
