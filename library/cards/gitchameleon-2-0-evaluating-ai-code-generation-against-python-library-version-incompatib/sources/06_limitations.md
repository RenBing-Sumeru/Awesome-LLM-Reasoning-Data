1. **Scale and language:** The 328 tasks cover only Python and 26 libraries and do not represent repository-scale dependency resolution, compiled languages, or complex migrations. New ecosystems need additional tasks.

2. **Test sufficiency:** Passing the provided tests establishes only the current oracle. Uncovered behavior may remain wrong, so critical APIs need coverage reporting and independent tests.

3. **Temporal drift:** Library releases, images, and package indexes change. Dataset version, containers, Python, and lock files must be frozen for comparable results.
