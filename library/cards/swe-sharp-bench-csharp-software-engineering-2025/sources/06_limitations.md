1. **Imperfect comparison:** The 70% Python and 40% C# results use the same agent but tasks are not matched one by one for patch length, file count, or difficulty. They establish a benchmark-level gap, not that language alone causes all differences.

2. **Limited tasks and repositories:** The 150 tasks from 17 open projects do not cover large proprietary enterprise systems, Windows-specific UI, Azure services, or legacy .NET Framework. Per-repository results and uncertainty should accompany aggregates.

3. **Fragile environments:** Historical NuGet packages, SDKs, platform behavior, and test frameworks change, and some tasks may be stable only on one OS. Reuse requires image digests, offline package caches, logs, and contamination checks for public issues and patches.
