1. **Filter executable projects:** Collect repositories from popular PyPI packages, install dependencies, and run original tests. Retain only projects and test files that pass reliably in Docker.

2. **Locate feature boundaries:** Use Python tracing to record call trees triggered by tests, map developer tests to relevant implementations, and select core functions or classes that can be hidden independently.

3. **Create incomplete repositories:** Remove or replace target implementations while preserving interfaces, context, and tests. The original code becomes the gold implementation; tests must fail after hiding and pass after restoration.

4. **Generate PRDs and splits:** Produce product-requirement descriptions from the original implementation, call relations, and tests. Manually inspect 500 test instances and group them by difficulty. Reproduction requires fixed commits, containers, test selection, and masking rules to avoid duplicate implementations elsewhere.
