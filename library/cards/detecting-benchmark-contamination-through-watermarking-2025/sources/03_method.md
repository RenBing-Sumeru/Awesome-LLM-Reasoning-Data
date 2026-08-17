1. **Watermark questions.** For each benchmark, choose a secret key and use Llama-3.1-8B-Instruct to rephrase each question. At every generation step, boost a keyed 50% green list; the paper tests strengths δ=0, 1, 2, and 4.

2. **Release and train.** The provider releases the rephrased questions. For the controlled study, 1B transformers are trained from scratch on 10B DCLM tokens with zero, four, eight, or sixteen injected benchmark batches.

3. **Read radioactivity.** With white-box access, forward each watermarked question through the suspect model, take its top-1 next-token predictions, reconstruct the keyed green list, and score unseen watermark windows once. Under no memorized watermark, the cumulative score follows a binomial distribution; its tail p-value is the decision statistic.

4. **Handle tokenizers and verify utility.** When tokenizers differ, align equal text prefixes and score only shared-token predictions. Compare original and rephrased benchmark accuracy; reproduce with the exact key, rephrasing model, tokenizer, prompt template, δ, and model-access assumption. The repository does not disclose a standalone dataset license.
