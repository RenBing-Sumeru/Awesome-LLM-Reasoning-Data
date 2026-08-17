1. Starting from human-annotated SBIC records, LLMs generate NLEs with text only, then with classification labels, then with stereotype-aware semantic context.

2. Human annotators compare tier pairs to test whether richer context is perceived as more faithful. Generic reward models and LLM judges score the same pairs to reveal a preference for sanitized language.

3. HARM uses ArmoRM-Llama3-8B-v0.1 with a gated mixture of interpretable attributes; MOE-Off additionally supervises the gate with offensiveness annotations. The reported optimizer is Adam with learning rate 0.0025. Fix data split, prompts, backbone, and repository revision when reproducing.
