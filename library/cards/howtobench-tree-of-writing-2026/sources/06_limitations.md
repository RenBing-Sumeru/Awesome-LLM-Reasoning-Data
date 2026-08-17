1. **Language and cultural bias:** The core benchmark evaluates Chinese writing, whose genre conventions and aesthetic weights may not transfer to other languages and cultures.
2. **Higher cost:** Constructing task-specific trees and weights is more complex than using a generic judge, and node-by-node scoring increases inference cost for long texts.
3. **Weight disagreement:** Explicit weights improve auditability but do not imply a unique writing-value function; different expert communities may prefer different trees.

