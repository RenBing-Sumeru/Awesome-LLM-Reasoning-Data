Correctness is only correctness relative to the official target answer and evaluator. It does not prove that the model grounded its answer in the image, followed a valid disciplinary method, or would solve a similar real-world professional task.

Image preprocessing can alter the task: resolution, cropping, OCR quality, and prompt layout affect what evidence the model actually receives. Public validation items can leak into training; hidden-test policies and leaderboard dates should be pinned for score comparisons.

The benchmark mixes disciplines and answer formats, so one average score can hide very different failure modes. Licensing and image provenance should be checked at the artifact level before using records for training or redistribution.
