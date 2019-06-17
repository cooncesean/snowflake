// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'BACK_END' | 'FOUNDATIONS' | 'SERVERS' |
  'DATABASE' | 'PROJECT_MANAGEMENT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'BACK_END': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'DATABASE': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'BACK_END': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'DATABASE': Track,
  'PROJECT_MANAGEMENT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Front-End Systems",
    "category": "Tech Stack",
    "description": "Develops expertise in front-end platform engineering using Angular.",
    "milestones": [{
      "summary": "Has shipped a feature using this technology.",
      "signals": [
        "Has contributed as a part of a team to a small set of features.",
      ],
      "examples": [
        "Implemented sticky footer on the transaction list page.",
        "Updated the transaction send page to improve UX.",
      ],
    }, {
      "summary": "Works with guidance on the Front-End.",
      "signals": [
        "Able to work to ship slightly larger features within the context of teams.",
      ],
      "examples": [
        "Upgraded a dependency to a new major version.",
        "Added support for rendering a new type of coin within the BitGo wallet platform.",
        "Prototyped a simple new feature quickly.",
      ],
    }, {
      "summary": "Contributes without oversight.",
      "signals": [
        "Implements complex features with a large product surface area",
        "Understands Angular internals and best practices; is able work effectively within the Angular framework.",
        "Adds support for new BitGo features after a major Angular version upgrade.",
      ],
      "examples": [
        "Designed Front-End caching strategy for improved performance.",
        "Built the BitGo Reporting feature.",
        "Informed the team about recent Angular best practice changes and deprecations.",
      ],
    }, {
      "summary": "Internal authority in this domain.",
      "signals": [
        "Sets up and leads bi-weekly guild meetings.",
        "Pioneers architecture migration strategies that reduce programmer burden.",
        "Fixes subtle memory management issues.",
        "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively.",
      ],
      "examples": [
        "Upgraded Angular to a new major version.",
        "Designed architecture for data flow within the Front-End.",
      ],
    }, {
      "summary": "Is an industry-leading expert in Front-End engineering or sets strategic Front-End direction for an Eng Org.",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them.",
        "Designs and builds innovative, industry-leading UI interactions.",
        "Invents new techniques to responsibly stretch limits of the Angular framework.",
      ],
      "examples": [
        "Has made significant + meaningful contributions to the Front-End community via Stack Overflow/GitHub/blog.",
      ],
    }],
  },

  "BACK_END": {
    "displayName": "Back-End Systems",
    "category": "Tech Stack",
    "description": "Develops expertise in back-end technologies, such as Indexers, DAS, and/or the Platform.",
    "milestones": [{
      "summary": "Has shipped a feature using this technology.",
      "signals": [
        "Makes minor modifications to existing controllers.",
        "Is able to track down bugs from API route to controller to model.",
        "Is able to introduce a new controller, following existing patterns.",
      ],
      "examples": [
        "Has contributed as a part of a team to a small set of features.",
        "Debugged a 500 error by tracking it to a specific route.",
      ],
    }, {
      "summary": "Works with guidance.",
      "signals": [
        "Able to work to ship slightly larger features within the context of teams.",
        "Makes sensible abstractions to keep Back-End code DRY.",
        "Determines data needs from product requirements.",
      ],
      "examples": [
        "Identified need for new index on Mongo to improve application performance.",
        "Refactored all v1 + v2 controllers to follow a similar design pattern.",
        "Built the entire Back-End system that powers our reporting engine.",
      ],
    }, {
      "summary": "Contributes without oversight",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Acts a caretaker for all of Indexer/Platform API code",
        "Writes thorough postmortems for service outages",
      ],
      "examples": [
        "Has strong, informed opinions about the direction of the Back-End stack within BitGo.",
        "Modularized the Indexer codebase to prepare it for scale.",
        "Introduced our OpenAPI documentation framework and educated + encouraged others to document our v2 routes.",
      ],
    }, {
      "summary": "Internal authority in this domain.",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Sets up and leads bi-weekly guild meetings.",
        "Designs, architects, and builds the Digital Accounting System.",
      ],
    }, {
      "summary": "Is an industry-leading expert in server-side technolgy or sets strategic Back-End direction for the Eng Org.",
      "signals": [
        "Invents new techniques to innovate and overcome performance constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for our Back-End systems and ensures projects are in service of it",
      ],
      "examples": [
        "Evangilized and implemented performance measurment tool New Relic.",
        "Has made significant + meaningful contributions to the Back-End community via Stack Overflow/GitHub/blog.",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Blockchain",
    "category": "Tech Stack",
    "description": "Develops expertise in blockchain technologies, including both UTXO + Account based coins.",
    "milestones": [{
      "summary": "Has shipped a feature using this technology.",
      "signals": [
        "Knows the basics of UTXO transaction creation and validation.",
        // "Clearly understands our indexing architecture and can educate others.",
        "Is versant in the basics of blockchain terminology.",
      ],
      "examples": [
        "Attended and asked questions across multiple 'silly crypto questions' sessions.",
        "Owns their own crypto and understands custody trade-offs.",
        "Shipped on bug fix on our indexer stack.",
      ],
    }, {
      "summary": "Works with guidance.",
      "signals": [
        "Has contributed as a part of a team to support a hard fork.",
        "Has contributed as a part of a team to implement a new coin.",
        "Triages indexer service issues correctly and independently.",
        "Maintains a coin and stays connected to their developer community.",
      ],
      "examples": [
        "Designed 'tainting' framework to support the BCH/BSV hard fork.",
        "Managed the upgrade from Dash v1.0 to v2.1.",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as core maintainer for our Indexer/IMS/SDK codebases.",
        "Manages a team working towards the development and launch of a new coin.",
      ],
      "examples": [
        "Implemented a new coin from scratch.",
        "Motivated, designed, and implemented a major refactor of our indexing architecture.",
        "Streamlined our ERC20 development process.",
        "Launched WBTC.",
      ],
    }, {
      "summary": "Internal authority in this domain.",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies.",
        "Demonstrates deep knowledge of foundational blockchain systems.",
        "Is versant in upcoming trends in the blockchain space and brings those insights into our product.",
      ],
      "examples": [
        "Designed and our BTC unspent algorithm.",
        "Productized Lightning.",
      ],
    }, {
      "summary": "Is an industry-leading expert in blockchain engineering or sets strategic blockchain direction for the Eng Org.",
      "signals": [
        "Defines a long-term vision for our indexing systems and ensures projects are in service of it.",
        "Invents industry-leading techniques to solve complex problems.",
      ],
      "examples": [
        "",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Infrastructure",
    "category": "Tech Stack",
    "description": "Develops expertise in infrastructure engineering, using technologies such as Docker and Kubernetes.",
    "milestones": [{
      "summary": "Have they ever deployed anything into our K8s infrastructure.",
      "signals": [
        "Has contributed as a part of a team to a small set of features.",
      ],
      "examples": [
      ],
    }, {
      "summary": "The go-to person within a team to produce charts, but may still ask for guidance when developing.",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
      ],
      "examples": [
      ],
    }, {
      "summary": "Owning infrastructure for your dev team. Independently develops infrastructure changes as needed.",
      "signals": [
        "Acts as primary maintainer for existing critical systems.",
        "Writes playbooks for new service maintenance.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Consistently pushes the bar in terms of re-architecting the infrastructure to move the team forward.",
      "signals": [
        "Proactively seeks to improve our infrastructure for the betterment of everyone else on the team.",
      ],
      "examples": [
        ".",
      ],
    }, {
      "summary": "Regonized as the internal authority regarding infra; Actively particpates in the infra developer community.",
      "signals": [
        "Makes decisions that have positive, long term, wide ranging consequences.",
        "Identifies and solves systemic problems with current architecture.",
      ],
      "examples": [
      ],
    }],
  },

  "DATABASE": {
    "displayName": "Database Design",
    "category": "Tech Stack",
    "description": "Develops expertise in databases performance and data architecture, using technologies such as Mongo and Postgres.",
    "milestones": [{
      "summary": "Works with oversight to implement schema changes.",
      "signals": [
        "Able to make smaller schema changes with guidance from others."
      ],
      "examples": [

      ],
    }, {
      "summary": "Capable with guidance and review to implement schema for a small project.",
      "signals": [

      ],
      "examples": [

      ],
    }, {
      "summary": "The go-to person on a team to shepard schema definitions for the entire team.",
      "signals": [
        "Able describe + design several models ",
        "Entity diagrams",
        "Is sought to review ERDs + entity relationship diagrams.",
        "Able to design performant models that scale gracefully."
      ],
      "examples": [
        "Produced the ERD describing all entities and relationships for the DAS."
      ],
    }, {
      "summary": "The human(s) in charge of managing our databases + performance.",
      "signals": [
        "Able to conduct db backups + restores",
        "Able to resolve borked schema migrations across environments.",
        "Able to debug unperformant queries.",
        "DB scalability design",
      ],
      "examples": [
        "Actively monitors DB performance.",
      ]
    }, {
      "summary": "The person you hire to come in and solve FB scale database performance.",
      "signals": [

      ],
      "examples": [

      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "Ownership",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously.",
    "milestones": [{
      "summary": "Effectively delivers small, single-dev projects.",
      "signals": [
        "Provides detailed and accurate scoping of tasks.",
        "Delivers tightly-scoped projects efficiently.",
        "Outlines and articulates dependencies effectively.",
        "Writes effective technical specs outlining approach.",
      ],
      "examples": [
        "Wrote the technical spec for KRS v2.",
        "Delivered the full-signing capability in Offline Vault Console.",
        "Create and manage an EPIC + all sub-stories in a logicial, coherent fashion.",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team.",
      "signals": [
        "Delegates tasks to others appropriately.",
        "Integrates business needs into project planning.",
        "Provides detailed reports to management concerning status of the project.",
        "Defines and hits interim milestones.",
      ],
      "examples": [
        "Coordinated a strike team to resolve a major, systemic issue.",
        "Ran project retro to assess improvement opportunities.",
        "Developed launch checklist for controlled rollout.",
        "Facilitated project kickoff meeting to get buy-in.",
        "Successfully landed a new coin.",
      ],
    }, {
      "summary": "Effectively and consistently delivers projects through a larger team",
      "signals": [
        "Manages the development efforts of a team",
        "Develops and communicates project timelines",
        "Manages dependencies on other projects and teams",
        "Coordinates with stakeholders in key disciplines",
      ],
      "examples": [
        "Led complex + time sensitive project such as a hard-fork",
        "Managed infrastructure migration to VPC",
        "Developed a project timeline that met the needs of both the initiative and business stakeholders, and effectively communicated tradeoffs",

      ],
    }, {
      "summary": "Effectively delivers projects through multiple engineering teams",
      "signals": [
        "Effectively manages the development efforts of multiple teams",
        "Incorporates and makes tradeoffs between competing objectives and dependencies",
        "Allocates cross-team resources effectively to ultimately meet the needs of the business",
        "Finds ways to deliver requested scope faster",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Led the development of the omnibus wallet infrastructure",
        "Managed development of multiples teams working on unique projects simultaneously",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams across multiple disciplines.",
      "measured_by": [
        "Ability to drive growth of company KPI",
        "Ability to deliver a cross-functional project on time and to spec",
      ],
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams and coordinates cross-functional collaboration and execution",
        "Owns a key company metric",
        "Directs, reports on, and held accountable for the delivery of a company initiative",
      ],
      "examples": [
        "Owns the KPI associated with AUC",
        "Facilitates 'scrum of scrum' meetings",
        "Delivers multi-month engineering project on time",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "Ownership",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Writes BitGo blog posts about improvement opportunities",
        "Raises meaningful tensions in tactical meetings",
        "Asks leadership team probing questions at Eng All-Hands.",
      ],
      "examples": [
        "Wrote about problems with  ......",
        "Reported a site issue in JIRA.",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere.",
        "Makes design quality improvements unprompted.",
        "Takes on trust and safety tasks proactively when blocked elsewhere.",
      ],
      "examples": [
        "Advocated on own behalf for a change in role.",
        "Audited web client performance in Chrome and proposed fixes.",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes.",
        "Fixes complicated bugs outside of regular domain.",
        "Takes ownership of systems that nobody owns or wants.",
      ],
      "examples": [
        "Defined style guide to resolve style arguments.",
        "Started and facilitates 'silly crypto questions' to up-level blockchain experience across the org.",
        "Implemented feature X ______ independently and unprompted",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
        "Navigates code-red issues during off-hours, even when not 'on-call'.",
      ],
      "examples": [
        "Created the interviewing rubric and booklet.",
        "Migrated BitGo to mono repo and bazel.",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues.",
        "Galvanizes the entire company and garners buy in for a new strategy.",
        "Changes complex organizational processes.",
      ],
      "examples": [
        "Built iOS prototype and convinced executive team to fund it.",
        "Standardized sprint cadence and agile point system.",
        "Convinced leadership and engineering org to move to ______.",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Quality",
    "category": "Craftsmanship",
    "description": "Embodies and promotes practices to ensure excellent quality products and services.",
    "milestones": [{
      "summary": "Consistently delivers high quality work.",
      "signals": [
        "Tests new code thoroughly, both locally and in production",
        "Writes tests for every new feature and bug fix",
        "Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug on a new feature before it went live",
        "Landed non-trivial PR with minimal rounds of feedback",
        "Wrote tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more robust",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Proactively reduced the number of 500 exceptions",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Improved build pipeline to run the same volume of tests faster",
        "Motivated and coordinated migration from Phabricator to GitHub",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult, subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer errors",
        "Focuses the team on quality with regular reminders",
        "Coordinates bug bashes",
        "Seeks opportunities to improve others' code based on their deep experience.",
      ],
      "examples": [
        "Added code coverage reporting to IMS CI pipeline",
        "Defined and oversaw plan for actively reducing our NPM dependencies across the Eng Org.",
        "Motivated (while gathering alignment from exec team) the introduction of our Security Reviews.",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for Eng-wide 'bug bash week' with exec team",
        "Instituted and ensured success of a 20% time policy",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Technical Writing & Design",
    "category": "Craftsmanship",
    "description": "Ability to concisely convey abstract ideas to others within the organization.",
    "milestones": [{
      "summary": "Reviews and provides feedback to shape technical design documents.",
      "signals": [
        "Apply meaningful feedback to a TDD or pull request.",
        "Writes clear, consistent commit messages.",
        "Proactively writes inline documentation when introducing complex functionality.",
        "Consistently writes clear pull requests.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Creates technical design documents, and is able to gain consesnus to shepheard them into the development phase",
      "signals": [
        "Shepherds their TDD to approval with minimal feedback.",
        "Delivers a brown bag presentation about one of our chosen skills",
      ],
      "examples": [
        "Proactively created pull request templates for projects that they collaborate to standardize PR bodies.",
        "Facilitated a brown bag presentation de-mystifying our HSM.",
      ],
    }, {
      "summary": "Consistently demonstrates ability to shepherd mutliple TDDs to approval AND those TDDs have led to effective implemenations w/ little ambiguity/lost work.",
      "signals": [
        "Designs multiple, cross-discipline systems and their interfaces.",
      ],
      "examples": [
        "Designed, gathered consensus, and lead team to build Settlement.",
        "Refactored our indexer archirtecture.",
        "Wrote an Engineering blog post about how we re-architected our indexer infra.",
      ],
    }, {
      "summary": "Influences the technical design and review process",
      "signals": [
        "Identifies pain points in our SDLC process and proactively works to activate change within the Eng Org.",
      ],
      "examples": [
        "Migrate our TDD process from GoogleDocs/Confluence into a single, standardized GitHub PR flow.",
      ],
    }, {
      "summary": "Is identified externally as a thought leader via technical writing within the industry",
      "signals": [
        "Has published a book on one of the technical areas that BitGo cares about.",
        "Mentors non-BitGo employees about design principles.",
      ],
      "examples": [
        "",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "Open Communication",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Served as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered empathetic + unprompted feedback to help growth",
        "Lead from behind to support someone new to a leadership role",
        "Successfully mentored an intern through the summer"
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to BitGo's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Has delivered multiple brown bag presentations for others",
        "Has contributed multiple times to the BitGo Engineering Blog",
        "Facilitates weekly 'silly crypto questions' workshops",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and facilitated ongoing lunch and learn sessions",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught front-end guild curriculum",
        "Designed and facilitates (w/out fail) our semi-weekly demo days.",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the Eng Org",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the 'learning and development' budget for engineers",
        "Mentored mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "Open Communication",
    "description": "Promotes BitGo to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents BitGo well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends BitGo hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a BitGo product launch post on one of their social networks",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to BitGo",
        "Proactively engages in customer facing issues and acts as a technical ambassasdor to collaboratively solve problems",
        "Organizes positive small or medium-sized events that bring people into BitGo",
      ],
      "examples": [
        "Participated in our internship 'open house' by engaging with potential candidates",
        "Organized a short tour of the office by college students",
        "Participated in a career fair recruiting event",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of BitGo",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about BitGo that receive moderate traffic",
      ],
      "examples": [
        "Represented BitGo on a panel at a conference of industry experts",
        "Serves as an Engineering Contributor or Engineering Management mentor on PlatoHQ",
        "Built a durable, long-standing relationship with Bitcoin core devs network.",
      ],
    }, {
      "summary": "Establishes BitGo as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about BitGo's organizational or technical innovations",
        "Leverages significant following to evangelise BitGo",
      ],
      "examples": [
        "Published a paper on BitGo technology in a peer-reviewed journal",
        "Organizes/speaks at technical meet-ups about our technical contributions in the space",
      ],
    }, {
      "summary": "Introduces and reinforces BitGo in a leader to a wider audience outside of the crypto + financial industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about BitGo positively",
        "Drives recognition and adoption of BitGo in significant numbers",
      ],
      "examples": [
        "Interviewed in a mainstream newspaper or website outside of the crypto space.",
        "Keynoted a conference with international attention",
        "Represented BitGo in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Cultural Beacon",
    "category": "Open Communication",
    "description": "Reinforce BitGo's values internally. Models behavior they want to see from others.",
    "milestones": [{
      "summary": "Actively attends BitGo related events and team building opporutnities.",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Proactively facilitates/leads BitGo related events and team building exercises.",
      "signals": [
        "Consistently facilitates retrospectives and team events",
        "Consistently organizes and facilitates guild meetings.",
        "Reinforces and upholds values within your respective teams",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Facilitates company wide cultural events",
      "signals": [
        "Started and facilitates 'game night' for the org.",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Actively seeks to rethink/improve our culture + values",
      "signals": [
        "Answers big questions and facilitates their result down through the org.",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categories = [
  {
    'name': 'Tech Stack',
    'count': 5,
  },
  {
    'name': 'Ownership',
    'count': 2,
  },
  {
    'name': 'Craftsmanship',
    'count': 2,
  },
  {
    'name': 'Open Communication',
    'count': 3,
  }
];

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['rgb(136, 194, 202)', '#428af6', '#2357c5', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
