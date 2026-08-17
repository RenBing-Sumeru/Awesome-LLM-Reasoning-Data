1. **Select visual reasoning questions.** The pipeline starts from MATH-V and VLM-S2H, which contain image–text mathematical and logical reasoning problems.
2. **Generate multiple topologies.** Qwen2-VL-7B-Instruct and GPT-4o-mini repeatedly answer each question using chain, tree, and graph prompts.
3. **Assign outcome and topology labels.** Each response receives a binary correctness label; each topology receives a question-specific score equal to its proportion of correct responses.
4. **Filter SFT data.** The authors balance easy, medium, and hard questions, retain correct responses, and use a 7B outcome reward model for rejection sampling.
5. **Construct preference pairs.** Correct or topology-preferred responses become winners, while less effective or incorrect responses become losers for SimPO training.
6. **Apply Frugal Learning.** Short and correct responses are preferred over incorrect or excessively long outputs to reduce reasoning length.
