1. **One-sentence position:** SWE-Dev reverse-constructs PRDs and incomplete repositories from tested Python features, releasing 14K training and 500 evaluation tasks.

2. **Method takeaway:** Environment validation, dynamic call tracing, implementation masking, before–after test checks, and PRD generation determine quality.

3. **Data takeaway:** Each record contains a PRD, repository, gold code, developer tests, and environment; the test set has 250 manually checked easy and 250 hard tasks.

4. **Evidence anchor:** Claude-3.7 reaches only 22.45% hard Pass@3, while 7B SFT raises hard performance from about 6.68% to 18.89%.

5. **Reuse decision:** It fits feature-driven agent SFT and RL. Reverse-generated PRDs and test blind spots require acceptance of non-gold solutions and full regression testing.
