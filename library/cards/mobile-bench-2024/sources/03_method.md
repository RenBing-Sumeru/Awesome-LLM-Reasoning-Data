Inputs are a user query, an app list, available app/API descriptions, the current Android observation, and the task-specific CheckPoints. The observation pipeline uses Appium to obtain XML UI information and converts the visible, clickable, scrollable, and text-bearing nodes into an HTML-like representation with fields such as type, resource ID, package, class, description/text, clickability, scrollability, and bounds.

The benchmark pipeline is:

1. Collect or generate a query, classify it as SAST, SAMT, or MAMT, and associate it with apps and API candidates.
2. Build CheckPoints over package names, key phrases, and API commands, with sequential, conjunctive, or disjunctive relations.
3. Start each test case from a preset mobile environment snapshot.
4. Let the agent iteratively choose UI actions or API calls until it stops or reaches the maximum step budget.
5. Score the resulting action history with CheckPoint-l1, CheckPoint-l2, PassRate, and average steps.

The environment feedback comes from the mobile emulator/device state, Appium-derived UI observations, ADB/API execution, and CheckPoint matching. Reproducibility requires pinning the MobileBench repository revision, MIUI/emulator or device image, Android Studio/Appium/ADB versions, app versions, login and seed data on the phone, model prompts, step limits, and whether GPT-4 completion judgment is rerun.
