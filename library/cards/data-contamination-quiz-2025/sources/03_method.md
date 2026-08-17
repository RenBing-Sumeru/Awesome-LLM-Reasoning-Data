1. Subsample a target dataset partition and use GPT-4 to make four distinct variants of every item, preserving meaning, structure, labels, symbols, and letters while changing words.
2. Submit a five-choice Bias Detector Quiz containing only the variants plus none-of-the-above. Positions selected below chance are non-preferred and serve as safer insertion slots.
3. Create Bias Compensator Quizzes by replacing each non-preferred slot with the original item. Ask the tested LLM to return only the selected letter, so outputs expose recognition rather than free-form copying.
4. Permute the original over all non-preferred slots; use the highest BCQ accuracy as the maximum detected level and chance-adjusted accuracy using the matching BDQ rate as the minimum.
5. Repeat across samples and save quiz inputs and reports. Fix perturbation prompts, sample count, model version, positional-bias test, and API settings; training data and logits are intentionally not required.
