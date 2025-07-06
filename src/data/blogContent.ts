export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  emoji: string;
  link?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What Sapiens Reminded Me About Working with Code",
    category: "reflection",
    date: "2025-05-06",
    readTime: "1 min read",
    tags: ["philosophy", "teamwork", "development"],
    emoji: "📚",
    content: `When I read Sapiens, one thing stuck in my mind: Harari explains that our species dominated the world not because we are the strongest, but because we are the best at collaborating in large groups.

      This made me think about our daily lives as developers...

      👨‍💻 No great application is built alone.
      📦 No framework is maintained by just one person.
      🧠 No idea becomes a product without exchange, conversation, and review.

      Working with front-end isn't just about writing beautiful code. It's about building something comprehensible and sustainable, so that other people can continue, collaborate, and maintain it.

      Technology is also a form of language — another strength of Homo sapiens. If the code doesn't communicate well, the team suffers. If the UI doesn't communicate with the user, the product doesn't deliver value.

      Anyway, you can make it work alone. But it's by exchanging with other people that we really evolve.`,
  },
  {
    id: 2,
    title: "System Design Fundamentals: Vertical vs Horizontal Scaling",
    category: "technical",
    date: "2025-06-22",
    readTime: "2 min read",
    tags: ["system-design", "scaling", "architecture"],
    emoji: "🧙",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7341863337921544193/",
    content: `🧙 Remember that scene where Gandalf faces the Balrog alone on the bridge? That's vertical scaling. Powerful, dramatic... but eventually, even Gandalf screams "You shall not pass!" and falls into the abyss with the problem.

        Now picture the entire Fellowship working together — each one handling part of the journey. That's horizontal scaling. Not as flashy, but way more scalable.

        **THE PROBLEM**
        Your app is live. People are using it. Then traffic spikes, and your server collapses like Boromir under pressure. Why? Because your one machine (Gandalf) is doing all the work.

        **VERTICAL SCALING (Scale Up/Down)**
        Upgrade your existing machine — more RAM, CPU, etc. It works… until it doesn't. There's a limit to how much one wizard (or server) can handle.

        When it's useful:
        • SQL databases
        • Stateful apps
        • Short-term "get me out of trouble" solutions

        **HORIZONTAL SCALING (Scale Out/In)**
        Instead of one mega-server, you build a fellowship — multiple machines sharing the load. The unsung hero: the Load Balancer, your own Elrond, calmly sending requests to where they belong.

        **PRO TIP**
        Start with vertical for simplicity, but always design with horizontal in mind — unless you want your app to go full Mount Doom under pressure.`,
  },
  {
    id: 3,
    title: "The 4 Faces of Golang's For Loop",
    category: "technical",
    date: "2025-05-19",
    readTime: "4 min read",
    tags: ["golang", "programming", "loops"],
    emoji: "👨‍💻",
    content: `⚠️ As Go continues to dominate in cloud infrastructure, microservices, and DevOps tooling, mastering its core constructs becomes essential for modern developers.

      While most languages offer several looping keywords (for, while, do-while), Go takes a minimalist approach with just ONE keyword that does it all: **for**.

      According to Jon Bodner's excellent "Learning Go" book, Go's for comes in 4 powerful flavors:

      **1️⃣ Complete For - The classic C-style loop:**
      \`\`\`go
      for i := 0; i < 10; i++ {
          fmt.Println(i)
      }
      \`\`\`

      **2️⃣ Condition-Only For - Works like a while loop:**
      \`\`\`go
      i := 1
      for i < 100 {
          fmt.Println(i)
          i = i * 2
      }
      \`\`\`

      **3️⃣ Infinite For - Loops forever (until a break):**
      \`\`\`go
      for {
          fmt.Println("Hello")
          if someCondition {
              break
          }
      }
      \`\`\`

      **4️⃣ For-Range - Perfect for iterating over built-in types:**
      \`\`\`go
      evenVals := []int{2, 4, 6, 8, 10}
      for i, v := range evenVals {
          fmt.Println(i, v)
      }
      \`\`\`

      What's your favorite Go loop pattern?`,
  },
  {
    id: 4,
    title: "Type Conversion: Go vs JavaScript",
    category: "technical",
    date: "2025-05-15",
    readTime: "3 min read",
    tags: ["golang", "javascript", "type-conversion"],
    emoji: "👨‍💻",
    content: `🚀 I've been comparing Go's approach to type conversion with JavaScript, and the differences are fascinating.

      **JavaScript - Implicit Type Conversion:**
      \`\`\`javascript
      // Types convert automatically
      console.log(10 + 30.2)  // 40.2
      console.log("5" + 5)     // "55" (string concatenation)
      console.log("5" - 5)     // 0 (numeric subtraction)

      // Almost everything can be "truthy" or "falsy"
      if ("hello") console.log("strings are truthy!")  // prints
      if (0) console.log("This won't print")           // doesn't print
      if ([]) console.log("Empty arrays are truthy!")  // prints
      \`\`\`

      **Go - Explicit Conversion Required:**
      \`\`\`go
      var x int = 10
      var y float64 = 30.2
      // var sum = x + y  // This would cause a compile error!
      var sum1 = float64(x) + y  // 40.2
      var sum2 = x + int(y)      // 40

      // No "truthiness" - only booleans in conditionals
      // if x { }  // This would cause a compile error!
      if x != 0 {
          fmt.Println("Must use comparison operators")
      }
      \`\`\`

      Go's approach trades a bit of verbosity for clarity and predictability. There's no need to memorize type coercion rules or worry about unexpected behaviors.

      The idea behind Go is clear: **be explicit about your intentions!** When you read Go code, you know exactly what's happening without having to remember specific language conversion rules.`,
  },
  {
    id: 5,
    title: "Brazil's IT Market Expected to Grow 13% in 2025",
    category: "industry",
    date: "2025-06-05",
    readTime: "1 min read",
    tags: ["industry", "brazil", "growth", "opportunities"],
    emoji: "🚀",
    content: `🚀 The IT market in Brazil is expected to grow by 13% in 2025, according to IDC (International Data Corporation)!

      This data shows that we are living in a strategic moment for those working with technology in the country. And for us, front-end developers, this means more opportunities, more challenges, and more responsibility.

      With the accelerated digitalization of services and companies aiming to offer increasingly fluid and accessible experiences, front-end development plays a central role in delivering value to the end user.

      Performance, accessibility, responsive design, and user experience are no longer "nice-to-haves" — they are basic expectations.

      👨‍💻 **My take:** it's time to invest in knowledge, UX, accessibility, modern frameworks, and solid architectural practices. It's not enough to just code the interface — we need to think about the product.`,
  },
  {
    id: 6,
    title: "How Scrum Helped NPR Cover the 2011 Egyptian Revolution",
    category: "agile",
    date: "2025-06-03",
    readTime: "2 min read",
    tags: ["scrum", "agile", "journalism", "teamwork"],
    emoji: "📚",
    content: `**Jeff Sutherland**, co-creator of Scrum, shares in his book "Scrum: The Art of Doing Twice the Work in Half the Time" how his son, J.J. Sutherland, applied the principles of this agile methodology during one of the most challenging moments in recent journalism.

      While covering the Egyptian Revolution, the National Public Radio (NPR) team faced a chaotic scenario: events were unfolding rapidly, deadlines were being missed, key moments were slipping by, and there was significant difficulty in meeting the demands from headquarters in Washington.

      To bring order to this chaos, J.J. put Scrum into practice: every 12 hours, he gathered the reporters and asked three simple but powerful questions:

      ✅ What have you done since we last spoke?
      ✅ What will you do before our next meeting?
      ✅ What obstacles are you facing?

      This continuous cycle of alignment, collaboration, and removing impediments—typical of agile practices—helped the team to self-organize and produce more reports, with higher quality, outperforming the competition and winning multiple awards.

      The success was so remarkable that Scrum began to be adopted throughout NPR, from product design to daily journalism.

      ➡️ An inspiring example of how agile methodologies aren't just for software development—they can transform the way any team works, especially in high-pressure environments.`,
  },
  {
    id: 7,
    title: "Beating Tech FOMO: A Developer's Guide to Staying Sane",
    category: "career",
    date: "2024-06-08",
    readTime: "2 min read",
    tags: ["career", "learning", "mental-health", "focus"],
    emoji: "🧠",
    content: `The relentless pressure to stay tech-updated is REAL and, let's be honest, exhausting. If you're always feeling behind, maybe the problem isn't you but the hype!

      Here are strategies to avoid becoming a hostage of the tech boom:

      **🧠 Creating Smart Filters**
      • **18-month rule:** tech only deserves your attention if it lasts that long
      • Focus on what solves REAL problems at your job
      • Pick 3-4 quality info sources and stick to them

      **⏳ Balanced Study Strategies**
      • **Time-boxing:** 2-3 hours weekly to explore new stuff, that's it
      • **Incremental learning:** a small project for each new tech
      • Prioritize FUNDAMENTALS: data structures, algorithms, architecture, patterns

      **🧘‍♂️ Healthy Mindset**
      • It's impossible to know everything
      • Depth > surface-level. Specialist > wannabe generalist
      • Almost every "revolution" is just reheated evolution
      • Game-changing tech takes YEARS to settle

      **The goal isn't to always ride the wave, it's to know WHEN it's worth SURFING.**`,
  },
  {
    id: 8,
    title: "4 Reasons to Read 'Learning Go' by Jon Bodner",
    category: "books",
    date: "2025-04-25",
    readTime: "2 min read",
    tags: ["golang", "books", "learning", "resources"],
    emoji: "📚",
    content: `📚 Sometimes, when searching for materials to learn something new, we can feel a bit lost, not knowing where to start... If you're beginning your journey with Go or looking to improve your skills, Learning Go by Jon Bodner is an ideal resource.

      Here are 4 reasons to add it to your reading list:

      **1️⃣ Clear and practical approach**
      The author presents concepts in a simple and straightforward way, with practical examples that make understanding easier, perfect for beginners.

      **2️⃣ Improvement in software development**
      Learn how Go is used to build scalable and fast systems, ideal for high-load environments, ensuring high performance.

      **3️⃣ Concurrency and parallelism exploration**
      The book delves into concurrency, teaching you how to effectively use goroutines and channels to build scalable and high-performance systems.

      **4️⃣ Integration with tools and the Go ecosystem**
      Learning Go goes beyond the basics, showing you how to integrate Go with essential tools for testing, deployment, and performance monitoring, preparing you for production environments.

      If you're looking for a solid and practical foundation to master Go, this is a great reference to deepen your knowledge. 📖`,
  }
];
