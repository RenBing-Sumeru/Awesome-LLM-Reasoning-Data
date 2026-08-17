1. **One-sentence position:** MEnvAgent uses a multi-agent feedback loop to construct polyglot SWE sandboxes, addressing the loss of verifiable tasks to environment failures.
2. **Method takeaway:** Repository parsing, planned execution, log diagnosis, and incremental reuse of historical environments jointly determine success.
3. **Data takeaway:** MEnvBench has 1,000 tasks; MEnvData-SWE contains about 3,005 environments with scripts, patches, and image metadata.
4. **Evidence anchor:** F2P success improves by 8.6 points and construction time falls by 43%, within the boundary of external dependency availability.
5. **Reuse decision:** It suits multilingual repository training; users must freeze images, inspect shard schemas, and isolate environment from patch errors.
