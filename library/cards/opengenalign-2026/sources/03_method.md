1. **Set dimensions and tasks.** The authors choose long-context QA (WebGLM), data-to-text (Yelp), and summarization (XSum), and define hallucination, comprehensiveness, reliability, and efficiency with expert input.

2. **Create response pairs.** Multiple LLM outputs are paired for each prompt.

3. **Label and validate.** o3 compares each pair holistically on the four dimensions, with higher emphasis on hallucination and completeness. Three independent calls are majority-voted; three journalism-major human annotators majority-vote 100 pairs per task to audit agreement.

4. **Train and evaluate.** A Llama-3.1-8B-Instruct Bradley-Terry reward model trains on 33K pairs. PPO uses it for Llama-3.1-8B and Llama-3.2-3B policies; held-out evaluation uses 1.5K examples and a 9K development set for RL.

Reproduction requires the exact prompts, o3 version and sampling, model-pair policy, majority-vote records, task splits, and PPO configuration. Public dataset revision and license require verification.
