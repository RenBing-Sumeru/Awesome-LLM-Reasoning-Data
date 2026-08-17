1. **Discover repositories and tasks:** Candidate issues, base commits, and target modifications are extracted from open Python projects and change histories to form repository tasks requiring restoration.

2. **Synthesize environments with multiple agents:** Specialized workers explore directory structure, dependencies, and CI configurations and generate Dockerfiles, installation commands, and evaluation scripts. A central process repeatedly builds and repairs them from logs.

3. **Verify and stratify:** Tests are run in base and gold states to confirm that target failures reproduce, gold patches solve them, and environments remain stable. Unsolvable, trivial, or weak-oracle instances are filtered and build metadata is retained.

4. **Collect trajectories and train:** Coding agents run in about 9K qualified environments, recording observations, tool calls, edits, and test feedback, yielding approximately 13K curated trajectories. OpenSWE models are then trained on these data; reproduction requires fixed images, agents, sampling budgets, and environment versions.
