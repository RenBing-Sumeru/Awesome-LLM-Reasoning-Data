The largest limitation is benchmark drift. The repository describes a beta suite and ongoing expansion, while the paper describes a specific Terminal-Bench 2.0 snapshot. Results are only comparable when task set, dataset version, harness version, runtime image, package dependencies, timeout policy, and agent adapter are fixed.

A second limitation is contamination. Public task instructions, tests, reference solutions, and traces can enter training data. Once that happens, high scores may reflect benchmark memorization or harness-specific adaptation rather than general command-line competence.

The benchmark also depends on environment fidelity. Network access, package mirrors, Docker behavior, OS details, flaky tests, and hardware differences can change outcomes. Programmatic tests are clearer than free-form judging, but they can still under-specify task intent or reward brittle shortcuts.

Finally, the command line is only one agent interface. Terminal-Bench does not measure GUI perception, web navigation, voice interaction, or collaborative human-in-the-loop workflows. It should be read as a strong terminal substrate, not a complete proxy for all professional agent work.
