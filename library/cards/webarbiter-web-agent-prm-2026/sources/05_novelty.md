Earlier web-agent reward designs can label an outcome or directly compare actions without preserving a reusable account of the decision rule. That makes it difficult to inspect whether a preference comes from task intent, page evidence, or superficial action style.

WebArbiter makes the decision principle itself part of the supervised output, and trains the model to connect that principle to a state-specific comparison. The contribution is therefore a process-level preference record and a way to consume it in reward modelling and optimization, rather than a new browser controller alone.
