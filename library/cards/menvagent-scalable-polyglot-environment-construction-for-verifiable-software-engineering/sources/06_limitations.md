1. **External dependency drift:** Successful construction assumes that package registries, system images, and network resources remain accessible. Future reruns may fail, so image digests, lockfiles, and offline dependency caches should be preserved.

2. **Limited verification coverage:** Runnable tests show only that the environment supports the provided checks, not that every repository function is correctly installed. Reuse should add smoke tests and separate environment failures from patch failures.

3. **Release consistency:** Some current Hugging Face files have non-identical fields, and the viewer has reported schema-casting errors. Batch users should inspect shard schemas and verify that referenced images remain available.
