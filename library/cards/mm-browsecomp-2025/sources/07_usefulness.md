Use this benchmark as a schema for multimodal browsing-agent evaluation: question, source URLs or evidence descriptors, media type, required reasoning path or checklist, final answer, judge model, prompt, date of access, and tool budget. It is useful for testing whether a browser agent actually inspects visual evidence.

For data construction, preserve browsing traces separately from final answer labels. A trace can support audit or training only if it records observations, media access, tool calls, timestamps, and judge decisions without leaking protected answer fields.
