1. **Collect real changes:** Mine pull requests linked to issues from 21 maintained repositories and retain bug, feature, and refactoring tasks whose source and test patches can be separated.

2. **Build language environments:** Create Dockerfiles and test commands for Maven, Gradle, npm, and related ecosystems, install dependencies at the base commit, and verify original tests.

3. **Extract F2P and P2P tests:** Compare test states under the base, test patch, and gold patch. Require at least one failing-to-passing test and record regression tests that must remain passing; remove unstable instances.

4. **Generate structural metrics:** Parse gold patches to label modified files, functions, classes, and CST nodes, enabling localization precision and recall. Then draw PB500 by language, repository, and task type. Reproduction requires fixed harness, containers, and parser versions.
