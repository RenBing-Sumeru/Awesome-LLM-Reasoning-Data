Correctness is relative to the shipped simulator apps, seeded fictional profile, and rubric judge. A pass does not prove safe operation on a real user's phone, robustness to live app updates, or correct handling of private data outside the synthetic seed.

The benchmark requires a Mac/iOS toolchain, including Xcode 26+ and an iOS 26 simulator runtime in the current repository instructions. Environment drift can come from Xcode, Appium, XCUITest, simulator device type, app build, model backend, or judge model changes.

Rubric judging can miss hidden side effects or reward visually plausible but semantically wrong behavior. Public tasks, rubrics, and seed data can be contaminated in future training.
