1. **Collect paired interactions.** A visitor accepts the service terms, chats with two anonymous search-enabled models in parallel, and may vote A better, B better, tie, or both bad. The output is a multi-turn battle with model and search traces.

2. **Filter and de-identify.** The release removes server errors, inconsistent configurations, and other quality failures; Google DLP redacts identifiers and sensitive content. Records retain timestamps, language and intent annotations, and system metadata after this processing.

3. **Analyze preferences against evidence.** The authors fit controlled preference analyses and use an LLM pipeline to label whether citations support, are irrelevant to, or contradict claims. This distinguishes citation abundance from factual attribution.

4. **Reuse with a fixed revision and terms audit.** The official repository provides JSONL data and analysis scripts. Any training split, privacy assessment, and evaluation time boundary must be defined by the reuser because the release is observational deployment data rather than a prescribed training benchmark.
