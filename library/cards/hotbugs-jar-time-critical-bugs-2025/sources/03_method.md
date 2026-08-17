1. Inputs: Apache Java repositories, Jira issue reports, commit histories, release tags, and candidate patches.
2. Selection: identify patches that match hot-fix criteria such as high priority, short issue-to-fix time, and nearby release context.
3. Review: independently validate candidates and keep 679 genuine hot fixes with curated metadata.
4. Packaging: integrate 110 reproducible cases into repository branches containing buggy versions, fixed versions, developer patches, bug reports, and test results.
5. Feedback: build tools and project tests provide pass/fail evidence; metadata records explain why the issue is considered a hot fix.

Reproducibility depends on recursive submodules, exact branches, project-specific Java versions, Maven/Gradle versions, and external metadata snapshots. The release supports evaluation and audit; it is not a reward model or RL training recipe unless a downstream harness defines one.
