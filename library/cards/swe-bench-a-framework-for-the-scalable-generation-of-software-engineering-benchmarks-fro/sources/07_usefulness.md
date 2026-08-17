1. **Public evaluation:** Use the 500-task public set with a fixed swe-agent scaffold, images, and pass@1 protocol, reporting resolution rate by language, task type, and difficulty.

2. **Construct training trajectories:** Run agents on internal or accessible full-pool instances. When they fail, provide progressive localization or testing hints and retain actions, feedback, and terminal tests as verifier-grounded trajectories.

3. **Reuse the data factory:** Apply the four-stage pipeline to new open-source or enterprise pull requests. Tasks whose licences prohibit redistribution, whose CI uses private services, or whose issues are not clearly linked to pull requests must remain internal.
