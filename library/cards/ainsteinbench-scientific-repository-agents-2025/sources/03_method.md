1. **Select scientific repositories:** Projects across six domains are chosen for domain representativeness, active maintenance, buildability, and test assets, with reproducible commits fixed.

2. **Extract authentic tasks:** Maintainer pull requests are used to recover problem descriptions, base versions, and gold patches. Documentation-only changes and tasks requiring private data or unavailable services are excluded.

3. **Construct test environments:** Docker configurations and test patches are created so the base commit exhibits the target failure and the reference patch restores passing behavior. Scoring configurations and commands are recorded.

4. **Filter and annotate:** Automated reruns, coverage checks, and domain-expert review confirm task validity and assign difficulty and evaluation-type labels. Agent patches are ultimately judged only by tests inside the container.
