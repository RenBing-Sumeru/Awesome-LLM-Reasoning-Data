Claim — dynamic checklists let a training-free 7B open judge compete with much larger or fine-tuned multilingual evaluators.

Setup — CE-Judge used Qwen2.5-7B-Instruct on MM-Eval reasoning (11 languages), MM-Eval chat (7), and LitEval literary translation (four language pairs). It was compared with GPT-4o, the same backbone, and fine-tuned evaluators including M-Prometheus.

Result — reasoning accuracy averaged 0.77 versus GPT-4o’s 0.79; chat averaged 0.75, above GPT-4o’s 0.73. On LitEval, CE-Judge’s Kendall Tau was 0.38, matching GPT-4o but below fine-tuned M-Prometheus 7B at 0.43.

Boundary — baseline results are drawn from prior work, the translation step uses an external API, and evidence covers three benchmarks rather than all languages or judgment criteria.

The numbers support competitive average performance, but not superiority on every language pair: M-Prometheus 7B remains stronger on LitEval.
