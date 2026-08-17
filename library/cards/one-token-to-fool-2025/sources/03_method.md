1. Feed each judge a question, reference answer, and candidate response; parse its YES/NO decision as reward 1/0.
2. Substitute ten content-free master keys—four punctuation-like strings and six reasoning openers, including multilingual “solution” words—for real answers.
3. Measure false-positive rate across Multi-subject RLVR, NaturalReasoning, GSM8K, MATH, and AIME, using each specialized judge's native prompt and one standardized prompt for general models.
4. Sample 20K original reward-training items, regenerate answers with GPT-4o-mini, keep the first sentence, and label the incomplete lead-in NO; exclude the held-out master-key strings.
5. Merge those negatives with 160K original tuples and SFT Qwen2.5-Instruct 7B/32B with cross-entropy. Reproduction must freeze judge/version, prompt, key set, parsing rule, and benchmark slice.
