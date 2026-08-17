1. **Scale:** 842 instructions permit deep annotation but remain limited for long-tail tool use, multilingual settings, and professional rules.
2. **Checklist assumption:** Decomposing a complex instruction into independent items can lose constraint interactions and soft preferences; overall ranking is not necessarily additive.
3. **Graph consistency:** Human preferences may be non-transitive, and forcing one graph can compress real disagreement.
4. **Contamination:** Public responses and preference graphs should not train evaluated judges, or the meta-benchmark will be invalidated.
