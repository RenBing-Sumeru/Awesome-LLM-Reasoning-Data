Use TUA-Bench as a schema for terminal-agent episodes: task instruction, setup script, runtime image, installed tools, initial files, command transcript, execution feedback, final artifact paths, scorer outputs, timeout, and model/scaffold metadata.

For this atlas, it is a strong environment-agent benchmark because the verifier is tied to executable artifacts. It can guide audits of CLI agents, but comparisons should preserve task family, release commit, software versions, and whether a task uses live network resources.
