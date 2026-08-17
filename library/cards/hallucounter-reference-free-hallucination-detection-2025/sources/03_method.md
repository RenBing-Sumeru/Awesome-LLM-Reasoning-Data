1. **Generate multiple responses:** Several responses are sampled from a black-box model for each query, preserving diversity and contradictions.

2. **Extract dual consistency:** The method encodes semantic consistency among responses and alignment between each response and the query.

3. **Train detector:** A classifier fuses both feature types to predict hallucination, confidence, and the best response.

4. **Build evaluation data:** Synthetic and human-curated samples are organised into two domain configurations; sampling count, temperature, and base model must be fixed.
