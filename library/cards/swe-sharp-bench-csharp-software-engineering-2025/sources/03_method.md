1. **Select C# repositories:** Filter active, publicly usable .NET projects with issues, pull requests, and automated tests, and collect pre-fix commits, merged patches, and problem descriptions.

2. **Build .NET environments:** Restore NuGet dependencies, identify `.sln` or `.csproj` files, SDKs, and test frameworks, and verify that base and gold versions compile in fixed containers.

3. **Extract verification tests:** Compare pre- and post-fix results, retain failing tests repaired by the gold patch, and record regression tests that must remain passing. Remove flaky candidates and tasks requiring external services or unstable builds.

4. **Review and release:** Check issue–patch alignment, solvability, and environment instructions, yielding 150 tasks and a public curation and evaluation pipeline. Reproduction requires fixed .NET SDKs, NuGet caches, operating systems, commits, and test filters.
