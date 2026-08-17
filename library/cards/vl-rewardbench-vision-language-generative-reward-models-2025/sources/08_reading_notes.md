1. **One-sentence position:** VL-RewardBench uses AI-assisted hard-example selection followed by human verification to curate 1,250 high-quality image–text preference instances spanning general multimodal queries, visual hallucination, and complex reasoning, and evaluates vision-language generative reward models with pairwise accuracy.

2. **Method takeaway:** Organize general-question, hallucination, and complex-reasoning subsets while controlling pair differences so length or formatting alone is insufficient. Have humans verify the image, question, candidate responses, and preference label against visual evidence; discard cases without reliable adjudication.

3. **Data takeaway:** VL-RewardBench contains 1,250 human-verified preference examples across general multimodal, hallucination, and complex-reasoning domains.

4. **Evidence anchor:** Across 16 leading vision-language models, even GPT-4o reaches only 65.4% accuracy and Qwen2-VL-72B remains near random, indicating that the benchmark is not saturated.

5. **Reuse decision:** Evaluate multimodal ORMs, generative RMs, or LLM judges and report results separately for perception, hallucination, and reasoning subsets. The main risk is that the 1,250 examples support diagnosis rather than exhaustive visual-domain coverage; fine-grained ocr, video, and specialist imagery may be underrepresented.
