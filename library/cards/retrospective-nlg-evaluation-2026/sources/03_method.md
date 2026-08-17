1. Assemble corpus. The authors combine ACL-OCL up to part of 2022 with a crawl of nine core venues thereafter, deduplicate 85,792 papers, then retain generative-task papers with evaluation signals.

2. Detect signals. Precision-prioritized regular expressions search title, abstract, and when available full text for human, automatic, and LLM-judge evaluation; criterion patterns follow Howcroft et al. (2020).

3. Aggregate and audit. Paper-level signals are grouped by year, venue, and task to compute prevalence and trends. Each criterion is counted at most once per paper; no score determines paper inclusion.

4. Release and reproduce. The repository releases IDs, metadata, extracted signals, and scripts, not full texts; it can redownload permitted ACL papers. Post-2022 venue coverage and unavailable full text must be fixed when reproducing.
