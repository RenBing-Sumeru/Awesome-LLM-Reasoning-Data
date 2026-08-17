1. **Collect candidate pull requests:** Merged pull requests are gathered from active Python repositories, requiring both implementation code and related test changes, with issue/PR text, base commit, and diff retained.

2. **Apply rule and intent filters:** File and diff rules locate added components, followed by classification of whether the pull request truly implements a feature. Pure fixes, refactoring, dependency updates, documentation, and test maintenance are removed.

3. **Extract verifiable instances:** Pull-request tests are mapped to fail-to-pass sets while existing pass-to-pass tests are retained. Both base and gold revisions are executed; only reproducible target failures solved by the gold patch survive.

4. **Package and release:** SWE-bench-style records store repository, version, environment-setup commit, creation time, and test lists. Some source is not redistributed, so users fetch fixed commits, build environments, and execute the same oracle against agent patches.
