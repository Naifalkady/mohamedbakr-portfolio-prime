# Cinematic Vision

Build a premium, cinematic, modern portfolio website for a Director of Photography / Cinematographer named Mohamed Bakr.

The goal is to create a high-quality interactive prototype that can be presented directly to Mohamed Bakr.

IMPORTANT:

This is a FRONTEND-ONLY prototype.

Do NOT build:

* Backend

* Database

* Authentication

* Admin dashboard

* CMS

* Server APIs

* Image generation

* AI-generated images

* AI-generated videos

* Any unnecessary external service

The prototype must feel like a real production website even though the content is currently mock/dynamic frontend data.

⸻

1. CORE OBJECTIVE

Create a cinematic portfolio website inspired by premium cinematographer / filmmaker portfolios.

The website should feel:

* Cinematic

* Minimal

* Premium

* Elegant

* Modern

* Artistic

* Editorial

* Professional

* High-end

* Image/video focused

Avoid making it look like a generic SaaS website, startup website, template, or normal photography portfolio.

The visual identity should communicate:

FILM + CINEMATOGRAPHY + ART DIRECTION + PREMIUM PRODUCTION

The design should rely heavily on:

* Typography

* Large visual areas

* Negative space

* Smooth transitions

* Subtle motion

* Editorial layouts

* High-quality placeholder imagery

* Video placeholders

* Hover interactions

⸻

2. BRAND

Primary name:

MOHAMED BAKR

Professional title:

DIRECTOR OF PHOTOGRAPHY

Optional short descriptor:

CINEMATOGRAPHER / VISUAL STORYTELLER

Do NOT use “Mostafa Fahmy” anywhere.

Do NOT use the original website’s branding, logo, personal information, images, videos, or text.

This is an original prototype using Mohamed Bakr as the fictional/demo brand identity.

⸻

3. VERY IMPORTANT — NO IMAGE GENERATION

DO NOT spend tokens generating images.

DO NOT attempt to generate custom images.

DO NOT use AI image generation.

Use one of these approaches instead:

1. Remote placeholder image URLs

2. Unsplash source/image URLs

3. Neutral cinematic gradient placeholders

4. Local placeholder assets if available

5. CSS-based visual placeholders

Prioritize remote placeholder images so the prototype immediately looks visually rich.

Use cinematic photography placeholders such as:

* Film sets

* Cinematography

* Movie scenes

* Architecture

* Actors silhouettes

* Studio lighting

* Night scenes

* Cars

* Urban environments

* Desert landscapes

* Dramatic portraits

* Film cameras

* Production sets

Images are ONLY for prototype presentation.

Structure the code so real images can later be swapped easily.

⸻

4. TECH STACK

Use:

* React

* TypeScript

* Vite

* Tailwind CSS

* Framer Motion

* React Router

Keep the architecture clean and component-based.

Do not introduce unnecessary libraries.

⸻

5. ROUTES

Create these routes:

/

/work

/work/:projectId

/about

/contact

The navigation should work properly between all routes.

⸻

6. HOME PAGE

Create a powerful cinematic landing page.

The first screen should immediately communicate:

MOHAMED BAKR

DIRECTOR OF PHOTOGRAPHY

Use a large cinematic visual area.

The hero can use:

* Full-screen background image

    OR

* Cinematic placeholder video area

    OR

* Large visual image with subtle movement

Do NOT generate a video.

Use a placeholder video UI if necessary.

Hero structure:

MOHAMED BAKR

DIRECTOR OF PHOTOGRAPHY

[ VIEW SELECTED WORK ]

The navigation should be minimal and elegant.

Navigation:

WORK

ABOUT

CONTACT

Social:

VIMEO

INSTAGRAM

⸻

7. HOME PAGE SECTIONS

After the hero, create:

Selected Work

Show 6 featured projects.

Each project should contain:

* Image

* Project title

* Category

* Year

Example projects:

1. SHAHID

    Category: COMMERCIAL

    Year: 2026

2. NOIR

    Category: FILM

    Year: 2025

3. THE LAST LIGHT

    Category: FILM

    Year: 2025

4. URBAN NIGHTS

    Category: COMMERCIAL

    Year: 2024

5. AFTER MIDNIGHT

    Category: TV SERIES

    Year: 2024

6. THE JOURNEY

    Category: COMMERCIAL

    Year: 2023

These are fictional prototype projects.

Make the project data easy to modify.

⸻

8. DYNAMIC PROJECT DATA

Create a centralized project data structure.

For example:

projects.ts

Each project should contain:

* id

* title

* category

* year

* client

* director

* role

* description

* thumbnail

* heroImage

* videoUrl

* gallery

* featured

* credits

Example structure:

{

id: “shahid”,

title: “SHAHID”,

category: “Commercial”,

year: “2026”,

client: “Shahid”,

director: “Demo Director”,

role: “Director of Photography”,

description: “…”,

thumbnail: “…”,

heroImage: “…”,

videoUrl: “…”,

gallery: […],

featured: true

}

The UI must read from this data instead of hardcoded project cards.

This is VERY IMPORTANT.

⸻

9. WORK PAGE

Create a premium portfolio grid.

Top:

WORK

Then category navigation:

ALL

COMMERCIALS

FILMS

TV SERIES

The filtering must be dynamic.

When the user clicks:

COMMERCIALS

Only commercial projects should appear.

When clicking:

FILMS

Only film projects should appear.

When clicking:

TV SERIES

Only TV projects should appear.

ALL displays everything.

Do this entirely on the frontend.

No backend.

No page reload.

⸻

10. PROJECT GRID

Create a responsive editorial grid.

Do NOT make every card look identical.

Use an art-directed layout with different image sizes.

For example:

* Large featured card

* Two smaller cards

* Full-width project

* Two-column projects

But keep the layout clean and balanced.

Each card should show:

IMAGE

PROJECT TITLE

CATEGORY

YEAR

On hover:

* Image scales slightly

* Overlay appears

* Project title becomes more visible

* “VIEW PROJECT” appears

* Smooth cursor/hover interaction

Keep animations subtle and premium.

⸻

11. LOAD MORE

Implement a functional frontend-only:

LOAD MORE

Initially show approximately 6 projects.

Clicking LOAD MORE reveals additional projects.

No backend.

No API.

The behavior must actually work.

When all projects are visible:

Hide the Load More button.

⸻

12. PROJECT DETAILS PAGE

Clicking a project should navigate to:

/work/:projectId

The project page should feel like a cinematic case study.

Structure:

PROJECT TITLE

CATEGORY / YEAR

Large HERO IMAGE

Then:

PROJECT DETAILS

Client

Director

Director of Photography

Year

Production

Then:

DESCRIPTION

Then:

VIDEO SECTION

Then:

IMAGE GALLERY

Then:

NEXT PROJECT

⸻

13. VIDEO SECTION

Do NOT generate videos.

Do not download random copyrighted videos.

Use a visual video placeholder.

For example:

Large cinematic black/gray video area

Centered:

PLAY

PROJECT FILM

If possible, use a safe public demo video or Vimeo placeholder.

Structure the data so a real Vimeo URL can later replace the placeholder.

⸻

14. IMAGE GALLERY

Each project should have multiple gallery images.

Use placeholder image URLs.

Create:

* Large image

* Two-column images

* Full-width image

* Cinematic spacing

Make the gallery responsive.

Images should use lazy loading.

⸻

15. PROJECT NAVIGATION

At the bottom of every project page:

PREVIOUS PROJECT

NEXT PROJECT

These should work dynamically based on the project array.

Do not hardcode the navigation.

⸻

16. ABOUT PAGE

Create a sophisticated editorial About page.

Hero:

ABOUT

MOHAMED BAKR

DIRECTOR OF PHOTOGRAPHY

Then a large cinematic portrait placeholder.

Then a professional bio.

Use prototype copy such as:

“ Mohamed Bakr is a Director of Photography focused on cinematic visual storytelling across commercials, films and television. His approach combines controlled lighting, expressive camera movement and a strong sense of visual atmosphere.”

Keep the text editable from a centralized data/config file.

⸻

17. ABOUT STATISTICS

Add an elegant statistics section.

Example:

10+

YEARS EXPERIENCE

50+

PROJECTS

20+

BRANDS

15+

PRODUCTIONS

These numbers are prototype/demo content.

Make them easy to edit.

Use animated number reveal when scrolling into view.

⸻

18. SELECTED WORK ON ABOUT PAGE

Add:

SELECTED WORK

Show a horizontal or editorial list of selected projects.

Each item should be clickable.

Clicking should open its project page.

⸻

19. CONTACT PAGE

Create a premium minimal contact page.

Headline:

LET’S WORK TOGETHER

Subtext:

For commercial productions, films, television and creative collaborations.

Contact information:

EMAIL

PHONE

INSTAGRAM

VIMEO

Create a frontend-only contact form.

Fields:

Name

Email

Company

Project Type

Message

Button:

SEND INQUIRY

IMPORTANT:

The form does NOT need a backend.

For the prototype, when the user submits:

* Prevent actual submission

* Show a beautiful success state

* Example:

    “Thank you — your inquiry has been received.”

This is only a prototype interaction.

⸻

20. NAVIGATION

Desktop navigation should be minimal.

Example:

MOHAMED BAKR

WORK

ABOUT

CONTACT

VIMEO

INSTAGRAM

Make navigation sticky or intelligently visible.

On scroll:

* Navigation can reduce in size

* Background can subtly change

* Maintain readability

Mobile:

Use a hamburger menu.

The mobile menu should animate smoothly.

⸻

21. CUSTOM CURSOR

On desktop, create a subtle custom cursor.

Normal:

small circle

When hovering over project:

VIEW

When hovering over video:

PLAY

When hovering over external link:

OPEN

Disable custom cursor behavior on touch/mobile devices.

Keep it subtle.

⸻

22. ANIMATIONS

Use Framer Motion.

Implement:

* Page transitions

* Hero text reveal

* Image reveal

* Fade-in sections

* Scroll reveal

* Hover image scaling

* Menu animation

* Filter transition

* Project transition

* Modal/video placeholder animation

Animations should be:

FAST

SMOOTH

SUBTLE

Do NOT over-animate.

Avoid excessive bouncing, spinning, or flashy effects.

The website should feel like a premium film portfolio.

⸻

23. PAGE TRANSITIONS

When navigating:

Home → Work

Work → Project

Project → About

etc.

Use a subtle transition.

For example:

* Fade

* Slight vertical movement

* Image transition

Do not create long loading animations.

⸻

24. TYPOGRAPHY

Use a premium editorial typography system.

Recommended:

* Inter

* Helvetica Neue

* Arial

* Or another clean modern sans-serif

Use:

Large typography

Strong letter spacing

Uppercase labels

Minimal text

Example:

MOHAMED BAKR

DIRECTOR OF PHOTOGRAPHY

WORK

ABOUT

CONTACT

⸻

25. COLOR SYSTEM

Use a dark cinematic theme.

Primary:

Near-black background

Secondary:

Dark gray

Text:

Off-white

Accent:

Very subtle neutral gray

Do NOT use bright gradients.

Do NOT use neon colors.

Do NOT make it look like a tech startup.

⸻

26. RESPONSIVE DESIGN

The website must be fully responsive.

Desktop:

1440px+

Laptop:

1024px+

Tablet:

768px+

Mobile:

320px+

On mobile:

* Simplify grid

* Reduce animation intensity

* Keep typography readable

* Make navigation accessible

* Make project images large and cinematic

⸻

27. PERFORMANCE

Optimize the prototype.

Use:

* Lazy loading

* Proper image dimensions

* Responsive image sizing

* CSS transitions where possible

* Framer Motion only where useful

Do not load huge assets unnecessarily.

Do not generate large media files.

⸻

28. DYNAMIC BEHAVIOR

The prototype MUST feel dynamic.

Implement at least:

1. Dynamic project filtering

2. Dynamic project detail routing

3. Dynamic previous/next project

4. Dynamic Load More

5. Dynamic featured projects

6. Dynamic project gallery

7. Dynamic statistics

8. Animated counters

9. Animated navigation

10. Contact form success state

11. Responsive mobile navigation

12. Hover interactions

13. Page transitions

Everything should work.

Do not create fake buttons that do nothing.

⸻

29. CENTRALIZED CONTENT

Create a clear structure such as:

src/

data/

projects.ts

site.ts

Put editable content there.

For example:

site.ts

Contains:

* Name

* Title

* Bio

* Email

* Phone

* Instagram

* Vimeo

* Statistics

projects.ts

Contains all projects.

This will make it extremely easy to replace the demo content later.

⸻

30. PROTOTYPE CONTENT

Use approximately:

12–15 projects.

Categories should be balanced:

Commercials

Films

TV Series

Every project should have:

* Title

* Category

* Year

* Client

* Director

* Description

* Hero image

* Thumbnail

* Gallery images

* Video placeholder

* Credits

Use fictional/demo data.

Do not copy real project descriptions from another website.

⸻

31. VISUAL QUALITY

This is extremely important.

The final result should NOT look like:

* Generic React template

* Dashboard

* SaaS landing page

* Basic portfolio

* Card-based startup website

It should look like:

A premium international cinematographer portfolio.

Think:

Film festival website

+

Luxury creative studio

+

Editorial magazine

+

Modern cinematography portfolio

Use large visual compositions and generous whitespace.

⸻

32. NO UNNECESSARY FEATURES

Do NOT add:

* Blog

* Shop

* Pricing

* Testimonials

* Newsletter

* Login

* Signup

* Dashboard

* CMS

* Database

* Payments

* Chat

* AI features

Unless specifically requested later.

Focus entirely on the portfolio experience.

⸻

33. IMPORTANT LOVABLE INSTRUCTION

Build the entire prototype in one coherent design system.

Do not create disconnected pages.

All pages must share:

* Same navigation

* Same typography

* Same spacing

* Same animation language

* Same visual identity

* Same components

Create reusable components such as:

Navbar

MobileMenu

ProjectCard

ProjectGrid

ProjectFilter

ProjectGallery

VideoPlaceholder

SectionTitle

Footer

PageTransition

CustomCursor

AnimatedCounter

⸻

34. FINAL UX FLOW

The final user journey should feel like:

HOME

↓

Hero

↓

Selected Work

↓

Click Project

↓

Project Details

↓

Gallery / Video

↓

Next Project

↓

WORK

↓

Filter Projects

↓

Load More

↓

ABOUT

↓

Biography + Stats + Selected Work

↓

CONTACT

↓

Contact Form

↓

Success State

⸻

35. FINAL QUALITY CHECK

Before finishing, verify:

* All routes work

* All project cards are clickable

* Project filtering works

* Load More works

* Previous/Next works

* Mobile menu works

* Contact form success state works

* Hover states work

* Animations work

* Responsive layout works

* No broken images

* No console errors

* No dead buttons

* No placeholder “Lorem“

* Branding is Mohamed Bakr

* No image generation was used

* No unnecessary backend was created

Most importantly:

Prioritize a polished, cinematic, presentation-ready frontend prototype over adding unnecessary functionality.

The final result should be something I can open in front of Mohamed Bakr and say:

“This is what your portfolio website could look like.”

Do not explain the implementation to me before building it. Build the prototype directly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9e83d0a1-e567-44b6-b60c-32a095ccb3cb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
