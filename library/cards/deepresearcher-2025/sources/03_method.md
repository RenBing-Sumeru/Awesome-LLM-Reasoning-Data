Prompts come from Natural Questions, TriviaQA, HotpotQA, and 2WikiMultiHopQA. Quality filtering and a no-search pass@10 screen remove poor items and questions the base model can already answer, leaving 80,000 examples in a 1:1:3:3 mixture, 75% multi-hop. Qwen2.5-7B-Instruct is trained with verl/GRPO. Each step samples 256 prompts and 16 rollouts per prompt—4,096 rollouts—with up to 10 tool calls each and mini-batch size 4,096.

The environment uses live search, browse, parallel page readers, and synthesis services on a 50-node CPU cluster. Search failures may be retried, and identical queries may be cached for seven days. Exact temperature, seeds, total steps/rollouts, web snapshots, handler revisions, and retained rejected siblings are not part of the verified release.

