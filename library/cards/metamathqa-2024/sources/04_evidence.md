# Evidence

**Claim:** question bootstrapping adds value beyond sampling more answers to fixed prompts. **Controlled setup:** Section 4.3 trains LLaMA-2-7B on GSM8K variants while adding rephrased/self-verification/FOBAR data to the same answer-augmentation base. **Result:** Table 3 reports that the full transformed mixture improves over answer augmentation alone, and Figure 2 links added question diversity with sustained accuracy rather than early saturation. **Boundary:** this supports prompt-view diversity within GSM8K/MATH, but teacher, record count, and token distribution still vary across mixtures, so it does not isolate a universal causal effect.

