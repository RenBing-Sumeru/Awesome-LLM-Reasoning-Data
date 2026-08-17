1. **One-sentence position:** daVinci-Env turns more than 12.8K repositories into 45,320 environments and collects 13K trajectories from about 9K of them.
2. **Method takeaway:** Multiple agents explore repositories, generate Docker and evaluation scripts, repair execution, filter quality, and then run coding agents.
3. **Data takeaway:** OpenSWE exposes build assets, test feedback, and interaction trajectories rather than only issue–patch pairs.
4. **Evidence anchor:** OpenSWE-32B/72B score 62.4%/66.0% on SWE-bench Verified, although recipe variables are not fully isolated.
5. **Reuse decision:** It fits large-scale agent data, with USD 1.47M-level cost, Python bias, and per-repository licensing as major constraints.
