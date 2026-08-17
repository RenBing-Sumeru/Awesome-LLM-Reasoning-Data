TOUCAN's central contribution is an inspectable pipeline that turns MCP specifications into synthetic tasks, executes agent policies against live remote tools, attaches rule- and judge-based feedback, and publishes both three generator-specific full configurations and a thresholded SFT view.

The mechanism couples four objects that should not be conflated:

- **Task context:** specifications from GitHub and Smithery define available tools, while each generated task seeds one to three target tools under single-server, multi-server, or featured-server sampling.
- **Episode:** GPT-OSS-120B, Kimi-K2, or Qwen3-32B acts through Qwen-Agent or OpenAI Agents, producing tool calls, live observations, and a final response.
- **Feedback:** Kimi-K2 supplies six reasoned 1-5 task scores; public rules check episode shape and at least one meaningful tool response; name-based logic measures target-tool coverage and order; GPT-OSS-120B scores completeness and conciseness from 1 to 5.
- **Training view:** hard thresholds and category rebalancing select 119,287 rows for SFT, while the richer full configurations retain quality assessments and MCP metadata.

Feedback is attached at both state/action and full-episode levels, but it is not a universal reward. Kimi-K2 and GPT-OSS-120B can observe the serialized task, trace, and requested quality dimensions; the rule layer can observe messages and tool names. Neither layer has a general gold representation of the user's intended world state, and real tool execution alone does not prove that the final synthesis is correct.

The closest controlled comparison in this atlas is to executable agent benchmarks such as tau2-bench, which TOUCAN uses for downstream evaluation. TOUCAN's primary contribution is instead trainable trajectory construction and release. That distinction matters: benchmark scores are evidence about trained models under those evaluations, not direct validation of every released row or of the judges that selected the SFT subset.
