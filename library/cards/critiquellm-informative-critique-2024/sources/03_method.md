1. **Expand instructions:** Starting from 706 seed tasks, an LLM transforms topics, constraints, and difficulty to create about 260K candidates.
2. **Filter quality:** Deduplication, quality assessment, and category balancing retain 4,223 diverse questions, 3,351 high-quality questions, and 1,000 final queries.
3. **Sample responses:** Ten models with different capabilities generate answers spanning clearly flawed to high-quality outputs.
4. **Generate critiques:** GPT-4 first creates reference-based critiques and then rewrites them into reference-free versions containing scores, strengths, weaknesses, and suggestions.
5. **Train and evaluate:** The 8,865 training examples fine-tune models at multiple scales, evaluated on internal validation and AlignBench.
