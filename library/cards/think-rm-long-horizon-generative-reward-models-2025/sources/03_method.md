1. **Prepare sources:** Select prompts with chosen and rejected responses from general preference datasets such as HelpSteer2.
2. **Generate records:** Use a teacher model to generate long comparative analyses followed by a final A/B preference decision.
3. **Verify and filter:** Filter traces whose decision disagrees with the source preference or violates the required format, retaining about 6.01K records.
4. **Organize and use:** Use the data for SFT warm-up and then rule-based RL; these stages validate long-horizon reward reasoning.
