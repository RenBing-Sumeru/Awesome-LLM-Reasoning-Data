1. **Build privacy decisions.** AirGapAgent-R presents a profile, a sharing context, and one field; labels say whether disclosure is appropriate. AgentDAM adds multi-step web tasks.

2. **Run model variants.** The evaluation compares vanilla LLMs, CoT prompting, and reasoning models. Models are asked to place thoughts inside tags and anonymize sensitive values.

3. **Score both channels.** A gpt-4o-mini extractor checks traces and answers for sensitive fields. Utility is correct appropriate sharing; privacy is no inappropriate leak.

4. **Scale reasoning.** Budget forcing continues a trace to fixed lengths, while a no-thinking prompt supplies the zero-budget control.

5. **Probe exposure.** The authors test ignored anonymization, trace-to-answer spillover, injection extraction, and post-hoc trace anonymization. Reproduction requires the released data, prompts, model versions, budgets, and extractor configuration.
