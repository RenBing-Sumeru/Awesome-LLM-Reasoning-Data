1. Inputs: hierarchical OpenTelemetry traces from TRAIL, covering GAIA multi-agent Open Deep Research traces and SWE-bench single-agent CodeAct traces.
2. Bottom-up scoring: evaluate individual LLM/tool spans with rubric-like metrics and produce categorical scores plus natural-language rationales.
3. Top-down scoring: evaluate agent-level behavior over descendant spans for broader issues that are not attributable to one local call.
4. Propagation and mapping: aggregate failed span signals upward and use an LLM-based mapper to translate the framework's outputs into TRAIL's category taxonomy for benchmark comparison.
5. Outputs: predicted failed spans, categories, rationales, trace-level scores, and localization/categorization metrics.

The paper states that bottom-up and top-down metrics are evaluated with GPT-5.4. Reproducibility requires the TRAIL version, trace IDs, span schema, judge model/version, rubric prompts, mapper prompt, context-window handling, and aggregation policy.
