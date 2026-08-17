1. **One-sentence position:** TestGenEval uses 1,210 real code–test file pairs to assess whether models can generate runnable, fault-revealing tests in repositories.
2. **Method takeaway:** Freeze project environments, build full-generation and segment-completion tasks, execute pytest, and measure coverage and mutation.
3. **Data takeaway:** It contains 68,647 human tests from 11 Python repositories with Docker environments and task splits.
4. **Evidence anchor:** Human tests have 60.4% median coverage, while GPT-4o-generated tests average only 35.2%.
5. **Reuse decision:** It fits test-generation and verifier research, but high coverage must not be interpreted as semantic correctness by itself.
