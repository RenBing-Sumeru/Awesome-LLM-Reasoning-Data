The pipeline extracts repository concepts, synthesizes problems, samples ten code candidates and tests, then ranks candidates with a PageRank-inspired score. Common-prefix and suffix matching splits each pair into prefix, divergent middle, and suffix; a score-gap-plus-shared-context criterion selects concentrated error points.

Each policy receives 5,000 selected training examples and 1,000 validation examples. The reported loss sets the middle weight to two, trains for ten epochs, and evaluates DeepSeekCoder, Qwen2.5-Coder, Magicoder, and instruction-tuned variants on Python benchmarks.
