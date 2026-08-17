1. **Incomplete reproducibility:** Held-out and commercial tasks, code, and tests are not released. External researchers can reproduce only the 731-task public set and cannot independently audit full 1,865-task results. Claims should separate public and private partitions.

2. **Language and domain bias:** The benchmark emphasizes Python, JavaScript or TypeScript, Go, and business repositories, with limited Java, C++, or Rust coverage. Partner startups may also represent specific organizational stages and not all enterprise software.

3. **Context-augmentation effects:** Engineer-added descriptions improve solvability but differing augmentation levels may change difficulty or hint at implementation. Reuse must version original and augmented prompts, cost and turn limits, and hidden tests for reward-hacking audits.
