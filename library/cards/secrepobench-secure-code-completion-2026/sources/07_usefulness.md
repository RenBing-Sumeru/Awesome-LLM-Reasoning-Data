1. **Evaluate secure coding agents:** Run agent patches in fixed containers and report compilation, functional-test, security-test, and joint-pass rates separately.

2. **Train verifiers:** Convert candidate patches and functional/security execution outcomes into multi-label reward records for code reward models.

3. **Build new tasks:** Reuse the real-fix localisation, implementation removal, and dual-oracle filtering pipeline on other repositories. Without security regressions or distributable dependencies, ordinary unit tests should not be labelled as proof of security.
