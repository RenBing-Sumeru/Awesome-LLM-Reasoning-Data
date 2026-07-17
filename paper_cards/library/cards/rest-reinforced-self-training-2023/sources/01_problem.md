Online RLHF repeatedly samples a changing policy and can be operationally expensive. Yet a policy’s own samples contain useful training material once they can be assessed by a reward.

ReST asks how to turn those samples into a growing offline dataset. The aim is to separate batch generation from policy improvement while retaining a reward-guided route from rollout to the next model version.
