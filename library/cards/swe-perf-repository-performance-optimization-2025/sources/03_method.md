1. **Collect performance pull requests:** Mine 102,241 pull requests from nine popular Python repositories and use keywords and code changes to identify likely performance improvements.

2. **Replay before and after versions:** Run base and head versions in reproducible environments, locate relevant performance tests and modified functions, and remove candidates that fail installation, have unstable tests, or show no real speedup.

3. **Confirm stable improvements:** Repeat performance tests and use statistical filtering to remove noise and accidental fluctuations. Retain tasks whose expert patch reliably accelerates code without breaking functional tests.

4. **Create evaluation inputs:** Store full repositories, target functions, oracle or realistic descriptions, performance and correctness tests, and expert baselines. Runtime is compared only after an agent patch passes functionality. Reproduction requires fixed hardware, CPU load, repetitions, Python and dependency versions, and images.
