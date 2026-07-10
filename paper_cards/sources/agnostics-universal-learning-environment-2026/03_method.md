The pipeline has three main pieces: rewrite or prepare coding tasks into a language-agnostic I/O format, provide a short target-language execution configuration, and train/evaluate models with RLVR rewards from the execution verifier.

The method is useful because the expensive part becomes the shared verifier protocol plus small per-language configuration, rather than a full bespoke benchmark stack for every language.
