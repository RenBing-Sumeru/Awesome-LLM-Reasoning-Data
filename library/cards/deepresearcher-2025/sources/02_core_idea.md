The policy alternates tagged `think` spans with web search and browse calls, then emits a tagged short answer. Search yields titles, URLs, and snippets; parallel Reading Agents process heterogeneous pages and a Synthesis Agent forms the tool observation. Environment observations are loss-masked, so GRPO optimizes only policy-generated tokens.

The terminal contract is narrow: malformed format receives -1, otherwise the answer receives word-level F1 against the reference. This reward does not label the query, source selection, page extraction, citation, or reasoning step. Increased tool use and cross-checking are observed behaviors, not independently supervised process fields.

