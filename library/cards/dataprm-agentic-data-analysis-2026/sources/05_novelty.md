Conventional process reward models judge a static text trace, and outcome-only agent training judges only whether an analysis eventually produces an accepted answer. Neither representation directly tests a seemingly valid intermediate state against the environment that produced it.

DataPRM changes the reward record by adding active state probing and a three-way distinction between progress, repairable failure, and irrecoverable failure. The novelty is an environment-coupled feedback contract for data-analysis trajectories, not simply another scalar scorer or an agent scaffold.
