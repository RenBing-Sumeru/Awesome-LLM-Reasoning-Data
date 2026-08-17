- Version boundary to inspect: retain arXiv v1 and its Qwen2.5-3B Multi-hop QA experiment; do not project v2/current-repository recipes back onto it.
- Trace unit to verify: observation/context, action/reasoning/tool call, feedback, reward, next observation, termination and action/advantage masks.
- Feedback contract to verify: final exact match only when both answer presentation and tool-call syntax format indicators pass; otherwise format score minus one.
- Reuse gate before relying on v1: source/retrieval/split manifests, queries and top-five results, trace/mask/reward/stop logs, verifier definitions, rights and version-pinned reproduction assets.

