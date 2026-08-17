1. **Select backend repositories:** Filter open projects with runnable service skeletons, identifiable routing or business modules, and containerizable dependencies, covering multiple languages and web frameworks.

2. **Construct engineering tasks:** Locate removed or incomplete endpoints, data layers, or workflows and write natural-language instructions requiring both implementation recovery and Docker setup. Complete task archives are preserved.

3. **Build external tests:** Design end-to-end HTTP cases for normal inputs, edge conditions, persistent state, and error responses. Tests run outside containers and are hidden from agents.

4. **Execute evaluation:** Agents explore repositories and modify code, after which images are built, services launched, and API tests sent. A task is solved only when deployment succeeds and all specified behavior passes. Ports, images, dependency networking, and agent time budgets must be fixed.
