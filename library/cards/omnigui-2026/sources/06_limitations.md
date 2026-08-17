Correctness is expert-trajectory agreement under a fixed offline protocol. It does not prove that an autonomous agent would complete the task after its own earlier actions, recover from mistakes, handle app updates, or satisfy user intent beyond the recorded trajectory.

The environment is version fragile. Mobile apps, UI layouts, media streams, account states, notifications, and network behavior can change after recording. The public data contains media from real applications; redistribution rights and commercial-use boundaries are governed by the dataset license and any underlying app/media rights, not by benchmark usefulness alone.

The metrics also leave blind spots. EM requires parameter agreement, so an alternative valid coordinate or UI path may be marked wrong. TM can hide spatial failure. SR is harsh for long episodes. The paper and repository differ slightly in episode/step counts, and no official evidence in the card proves a hidden split or live environment service.
