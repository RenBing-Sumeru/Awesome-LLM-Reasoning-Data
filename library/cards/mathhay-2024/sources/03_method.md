1. Inputs: search-engine documents from January to August 2024, selected for numerical richness, contextual detail, and named entities.
2. Question generation: create four task types: SSSD, MSSD, SSMD, and MSMD, covering one/multiple relevant documents and one/multiple computation steps.
3. Quality control: execute an LLM-generated Python solution, ask the LLM again for another Python solution given the question and relevant documents, execute it, and keep the example only when answers match.
4. Haystack construction: mix relevant documents with unrelated documents, vary context length from 32K to 128K tokens, and place relevant documents at controlled depths.
5. Outputs: 673 questions across 10 topics and 40 subtopics, including a 126-question verified subset reported by the paper.
6. Reproducibility notes: pin document collection time, generator model, prompts, Python execution environment, numeric answer normalization, context length, placement strategy, and whether results use verified or unverified examples.
