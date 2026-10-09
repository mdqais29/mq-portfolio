# SKILL.md --- Personal Portfolio Design & Engineering Guidelines

## 1. Purpose

Build a distinctive, premium, responsive personal portfolio for
**Mohammed Qaisuddin**, whose chosen professional identity is **AI
Generalist**.

The portfolio has two primary goals:

1.  Attract potential clients to **QDelta Technologies**.
2.  Build a recognizable, credible personal brand around practical AI,
    digital creation, and multidisciplinary technology work.

This file defines design principles, content rules, interaction
behavior, and engineering constraints. Follow it throughout planning,
implementation, and refinement. Do not start coding blindly: understand
the full experience and preserve the concept below.

------------------------------------------------------------------------

## 2. Core Creative Concept

The website is an **interactive personal portfolio experience**, not a
conventional template portfolio.

It has two distinct stages:

### Stage A --- Intro / Welcome Screen

When a visitor first opens the website, show a full-screen, dark,
uncluttered background.

-   Animate role-related words in the center using a carefully paced
    typewriter-style effect.
-   Example words may include: `Designer`, `Developer`, `Marketer`,
    `Researcher`, `Entrepreneur`, and `AI Generalist`.
-   Treat these as expressive roles and interests, not as claims of
    seniority or verified professional titles.
-   Use deliberate typography, timing, subtle cursor behavior, and
    restrained motion.
-   After the role animation, reveal a clear **ENTER** button.
-   Place a short supporting instruction below it, such as "Click to
    enter portfolio."
-   Activating ENTER should transition smoothly into the main portfolio
    interface.

The intro must feel intentional, cinematic, and refined---not like a
loading screen, an off-the-shelf template, or a gimmick.

### Stage B --- Main Portfolio Interface

After ENTER, reveal a custom interface inspired by the supplied
reference images:

-   A profile area featuring Mohammed Qaisuddin's real photo, name,
    professional identity, and contact/social links.
-   A main content area with clear, interactive navigation for relevant
    sections.
-   Potential sections include **Experience, Projects, Education,
    Skills, Certifications, and About**.
-   Use the reference for its *structural concept*---a profile panel
    paired with a tabbed content interface---not as a design to copy
    literally.
-   Develop an original visual language. Do not reproduce the
    reference's pixel-art aesthetic unless explicitly requested later.
-   Tabs should change the displayed content clearly and smoothly, with
    keyboard and touch support.

The welcome screen and main interface are separate experiences and must
be designed as one cohesive journey.

------------------------------------------------------------------------

## 3. Anti-AI-Slop Design Standard

**Originality is a hard requirement. Do not generate generic AI-looking
portfolio design.**

Avoid default, overused visual patterns unless a specific choice is
justified by the concept:

-   Generic centered hero sections with a gradient blob, floating cards,
    and a row of familiar CTA buttons.
-   Predictable purple/blue AI gradients, excessive glow, glassmorphism
    everywhere, neon borders, or decorative blur without purpose.
-   Generic geometric sans-serif typography used without typographic
    direction.
-   Overused font combinations, oversized gradient text, arbitrary
    rounded cards, and repetitive card grids.
-   Stock-looking AI illustrations, meaningless 3D objects, random
    icons, fake dashboards, and decorative visuals that do not
    communicate anything.
-   Repetitive section layouts that make the site feel like a template.
-   Excessive pill badges, skill progress bars, animated counters,
    cursor trails, scroll hijacking, and motion added only for
    spectacle.
-   Fake metrics, invented testimonials, fabricated client logos, and
    unsupported claims.
-   Unnecessary animations that slow down navigation or obscure content.

### What to do instead

-   Establish a clear design thesis before selecting colors, fonts,
    components, or effects.
-   Use a distinctive typographic system with intentional hierarchy,
    contrast, spacing, and line lengths.
-   Select fonts for their character and legibility---not merely because
    they are popular in AI-generated designs. Avoid defaulting
    automatically to Inter, Poppins, Roboto, or similar common choices.
    Choose a suitable typeface only after exploring the visual direction
    and checking availability/licensing.
-   Create a coherent palette with a small number of purposeful colors.
    The final theme has **not yet been decided**; do not lock it in
    prematurely.
-   Use composition, alignment, proportion, borders, texture, and
    whitespace to create personality.
-   Make each interaction purposeful and consistent with the portfolio's
    concept.
-   Prefer custom details and considered transitions over piles of
    effects.
-   Ensure visual choices support the owner's identity, content, and
    business goals.

Before accepting a section, ask: **Could this exact design belong to
thousands of unrelated AI-generated portfolios?** If yes, rethink its
composition, typography, interaction, or visual rationale.

Originality must not come at the expense of clarity, accessibility,
performance, or usability.

------------------------------------------------------------------------

## 4. Responsive and Mobile Experience

Mobile is a first-class design target, not a compressed desktop version.

-   Design and test the intro screen on narrow phones, tablets, laptops,
    and wide desktop displays.
-   Keep the animated role text readable without clipping, awkward
    wrapping, or horizontal overflow.
-   Make ENTER easy to tap and clearly visible.
-   Adapt the split-panel interface for small screens. It may become a
    stacked profile header and content panel, with compact navigation or
    an accessible menu.
-   Do not force desktop sidebars, wide tab rows, or dense timelines
    onto mobile unchanged.
-   Use comfortable text sizes, spacing, and touch targets.
-   Ensure tabs, links, dialogs, and other interactive elements work
    with touch, mouse, and keyboard.
-   Check portrait and landscape orientations.
-   Prevent horizontal scrolling unless a specific component genuinely
    requires it.
-   Respect `prefers-reduced-motion`; provide a reduced-motion version
    of the intro and transitions.
-   Ensure the site remains usable if animation fails or is disabled.

------------------------------------------------------------------------

## 5. Interaction and Motion Rules

-   Keep motion smooth, purposeful, and restrained.
-   Use animation to establish hierarchy, communicate state, and create
    a memorable transition---not to decorate every element.
-   Avoid long intro sequences. Let visitors skip the intro or enter
    promptly.
-   Consider remembering the visitor's entry for the current session so
    repeat navigation does not repeatedly force the full intro. Keep a
    clear way to replay it if appropriate.
-   Do not hijack scrolling or prevent visitors from reaching content.
-   Avoid animation that causes layout shifts, stutters, or delays
    important actions.
-   Provide visible focus states and clear active states for navigation.
-   Make the ENTER action work by keyboard as well as click/tap.
-   Keep the core content accessible even when JavaScript or animation
    behavior is reduced.

------------------------------------------------------------------------

## 6. Content and Accuracy Rules

Use only information supplied or confirmed by Mohammed Qaisuddin.

-   Do not invent work experience, project features, technologies,
    clients, results, numbers, testimonials, awards, or proficiency
    levels.
-   Fix spelling, grammar, and wording professionally while preserving
    the intended meaning.
-   Do not imply that a tool is mastered if it is only on the learning
    list.
-   Distinguish completed work from experiments, learning projects, and
    future plans.
-   Do not add Intermediate education; the owner has explicitly chosen
    to omit it.
-   Use **AI Generalist** as the chosen primary identity. Do not append
    "Builder" or another title to it unless the owner later changes this
    decision.
-   Keep the public identity and personal portfolio focused on Mohammed
    Qaisuddin. QDelta Technologies is his venture and should be
    represented accurately without making the entire personal website
    feel like a corporate agency site.
-   Use contact details and external profile links only after confirming
    the current preferred versions.
-   Do not expose private or unnecessary personal information.

### Current profile facts to use as the content baseline

**Name:** Mohammed Qaisuddin\
**Professional identity:** AI Generalist\
**Education:** B.Tech in Information Technology, Guru Nanak Institute of
Technology, Hyderabad (2021--2025), CGPA 7.92/10.\
**SSC:** Kakatiya High School, Miryalguda, GPA 9.7/10. Include only if
useful; the owner may choose to omit it from the final portfolio.\
**Languages:** English, Hindi, Telugu.

### Work experience --- current order requested

1.  **Freelance Web Designer & Developer** --- Remote, 2024--2026.\
    Concise description: Designed and developed websites and digital
    experiences, focusing on responsive layouts, modern interfaces,
    usability, and client requirements.

2.  **Web Developer & Digital Support Intern** --- Global Safety
    Academy, Nalgonda, Telangana, October 2025--September 2026.\
    Concise description: Developed and maintained the institute's
    website while supporting digital content, branding, website
    improvements, and internal documentation.

3.  **Artificial Intelligence Intern** --- CODTECH IT Solutions Pvt.
    Ltd., 7 January 2026--4 March 2026.\
    Keep the description general unless specific responsibilities are
    confirmed.

4.  **Operations Manager** --- WTS Nova, August 2026--Present.\
    WTS Nova is a social media agency. Concise description: Supports
    agency operations, team coordination, project execution, and digital
    service delivery. Do not overstate responsibilities beyond what is
    confirmed.

5.  **Founder & CEO** --- QDelta Technologies, September 2026--Present.\
    Concise description: Founded and leads a digital venture focused on
    website development and modern digital experiences, with plans to
    expand into AI-powered solutions.

Use the dates exactly as supplied. If a timeline appears inconsistent or
needs updating, ask the owner rather than silently changing it.

### Projects --- replace the previous project list completely

Only these six projects belong in the current portfolio baseline:

1.  **Global Safety Academy Website** ---
    https://www.globalsafetyacademy.com/\
    A modern, animated website for a safety training institute. Built
    using Next.js. Do not invent additional features.

2.  **AI Sentiment Analyser** ---
    https://ai-sentiment-analyser.netlify.app/\
    A text sentiment application that classifies input as positive,
    negative, or neutral. The supplied interface mentions VADER and
    lexicon-based NLP, consistency/reliability scoring, and per-model
    breakdowns. Python libraries are involved.

3.  **FlowDesk** --- https://flowdesk123.netlify.app/\
    A client management platform project. Confirm specific features or
    implementation details before making stronger claims.

4.  **Fresh Laundry --- UI/UX Case Study** ---
    https://www.figma.com/design/s25K1h3V88yAPuYTg9zIX9/UI-UX?node-id=2002-456\
    A UI/UX case study for a laundry service. Do not invent research
    findings or outcomes.

5.  **Pretty Good PDF** --- https://www.prettygoodpdf.site/\
    A web-based PDF project. Confirm exact functionality before listing
    specific tools or features.

6.  **QDelta Technologies Website** --- https://www.qdelta.in/\
    The owner's own brand website. Present it as a venture/brand
    website, not as an unrelated client project.

Do not reintroduce the old resume projects DevSpace or any other project
not listed above unless the owner explicitly adds it again.

### Skills and tools supplied by the owner

**Development:** HTML, CSS, JavaScript, React, Next.js, Python, web
development, web design, Git, GitHub.\
**AI and data:** Data analysis, machine learning, generative AI, AI
orchestration, AI automation, prompt engineering.\
**Design and content:** UI/UX, Figma, Canva, graphic design, content
writing.\
**Business and operations:** CRM management, social media marketing,
sales funnels.\
**Automation and AI coding tools:** Make, n8n, ChatGPT, Claude Code,
Cursor, Antigravity.\
**Productivity:** Microsoft Office, Google Workspace.

**Additional tools the owner selected to add:** Google AI Studio,
Pandas, NumPy, Supabase, REST APIs, Vercel.

Do not automatically label every tool as advanced or expert. The
additional tools may be learning targets; confirm their status before
displaying them as current competencies.

### Certifications and achievements --- deduplicated list

1.  **Naukri Campus Young Turks --- Certificate of Merit:** 97.14th
    percentile in Naukri Campus Young Turks 2025. The owner describes it
    as India's largest skill contest.
2.  **Oracle Cloud Infrastructure 2025 Certified Generative AI
    Professional** --- Oracle.
3.  **Generative AI Foundations** --- Microsoft & upGrad.
4.  **Software Development Fundamentals** --- Simplilearn SkillUp.
5.  **Generative AI Mastermind --- Certificate of Completion** ---
    Outskill.
6.  **UI/UX Design Certificate** --- Tutedude.

The owner explicitly removed the Python Developer Internship Certificate
from Codec Technologies Pvt. Ltd.; do not re-add it.

------------------------------------------------------------------------

## 7. Information Architecture

The final page structure and exact tab names will be decided later.
Treat the following as candidate sections, not a rigid final
specification:

-   Intro / Enter experience
-   Profile / About
-   Experience
-   Projects
-   Education
-   Skills and tools
-   Certifications and achievements
-   Contact and relevant social links

Prioritize projects, credibility, and clear client contact paths. Avoid
overcrowding the interface with every possible section or skill. Use
progressive disclosure where appropriate.

------------------------------------------------------------------------

## 8. Engineering and Implementation Constraints

-   Inspect the existing project and its framework before making
    changes. Do not assume the stack.
-   Prefer a maintainable component architecture and reusable design
    tokens.
-   Keep content in structured data where appropriate so project cards,
    timelines, tabs, and skills are easy to update.
-   Use semantic HTML, accessible labels, keyboard navigation,
    sufficient contrast, and clear focus states.
-   Optimize image formats, sizes, and loading behavior. Avoid
    unnecessary dependencies.
-   Avoid layout shifts and expensive animation loops.
-   Use appropriate metadata, page titles, descriptions, Open Graph
    metadata, and meaningful link labels.
-   Ensure external links work and use safe link behavior where
    applicable.
-   Test all interactions, not just the visual appearance.
-   Validate the layout at mobile, tablet, laptop, and large desktop
    widths.
-   Check console errors, broken links, keyboard operation,
    reduced-motion behavior, and production build output.
-   Do not introduce paid APIs, subscriptions, or services without the
    owner's approval.
-   Do not claim a feature is complete until it has been implemented and
    tested.

------------------------------------------------------------------------

## 9. Design and Build Workflow

Follow this sequence rather than generating the entire site in one
uncontrolled pass:

1.  Review the current repository, framework, assets, and existing code.
2.  Summarize the intended experience and identify unresolved decisions.
3.  Propose a few distinct visual directions without locking the final
    theme prematurely.
4.  Define the design tokens, typography, layout, and interaction
    principles once a direction is selected.
5.  Build the intro screen and ENTER transition.
6.  Build the main portfolio interface and its responsive navigation.
7.  Add the verified content and working project/contact links.
8.  Refine motion, responsive layouts, accessibility, and performance.
9.  Test the full experience on desktop and mobile.
10. Report what works, what was tested, and what still needs owner
    input.

Do not make major branding, theme, typography, or architecture decisions
that have explicitly been deferred to a later discussion.

------------------------------------------------------------------------

## 10. Final Quality Gate

Before considering the portfolio ready, verify:

-   [ ] The intro and main interface feel like two connected stages of
    one original experience.
-   [ ] The visual design is distinctive and avoids generic AI-generated
    patterns.
-   [ ] Typography and color choices are deliberate, legible, and
    consistent.
-   [ ] ENTER and navigation work with keyboard, mouse, and touch.
-   [ ] The design is genuinely responsive, not merely shrunk to fit
    mobile.
-   [ ] Reduced-motion preferences are respected.
-   [ ] All content is accurate and approved.
-   [ ] Project links and contact paths work.
-   [ ] No fabricated claims, placeholder metrics, or fake testimonials
    remain.
-   [ ] The production build succeeds and no obvious console or layout
    errors remain.

**North star:** Create a portfolio that feels unmistakably designed for
Mohammed Qaisuddin---memorable enough to stand out, clear enough to
build trust, and practical enough to convert visitors into real
opportunities.
