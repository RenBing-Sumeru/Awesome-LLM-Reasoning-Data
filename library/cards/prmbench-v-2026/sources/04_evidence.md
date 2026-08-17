**Claim.** PRMBench-V distinguishes current MPRMs and its score is informative for downstream response selection.

**Controlled evidence.** Table 1 evaluates proprietary and open multimodal LLMs plus two scalar MPRMs on the same 8,163 cases. Gemini-1.5-pro is the best listed model at strict overall accuracy 0.34; URSA-RM-8B and MM-PRM score 0.16 and 0.14. In best-of-16 selection on MMK12, benchmark accuracy correlates with downstream accuracy for Gemma-3-12B-it and LLaVA-1.5-7B (Pearson r=0.863, p=0.012; r=0.860, p=0.013; Figure 5). BR2-PRM improves MMK12 selection by up to 4.8 percentage points over simple averaging (Figure 6).

These results support ranking MPRMs for these structured visual tasks and selection settings; they do not establish causal generalization to open-ended visual reasoning or training-time RL.
