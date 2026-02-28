# AGENTS.md - AI Agent Instructions for CV Project

## Project Overview

A single-page personal CV website for Vincent Ferries, a French freelance software developer.

**Stack**: HTML5, CSS3, vanilla JavaScript (ES6+), native HTML templates  
**Language**: French (content)  
**Purpose**: Static resume/CV website - no build step required

## Project Structure

```
/home/vincent/cv/
├── index.html              # Main file - templates, data, and logic
├── css/
│   ├── style.css           # Custom styles
│   └── font-awesome.min.css # Font Awesome (do not edit)
├── fonts/                  # Font files (do not edit)
└── images/                 # Profile photo and certification badges
```

## Build/Test/Lint Commands

**No build system.** This is a static website.

### Running Locally

```bash
python3 -m http.server 8000   # Then open http://localhost:8000
```

### Testing

No automated tests. Verify changes by:
1. Opening in a browser and checking all sections render
2. Testing print preview (Ctrl+P) - the site has print styles

### Linting

No linting tools configured. Follow the conventions below.

## Architecture

### Templating System

Native HTML `<template>` elements with vanilla JS DOM manipulation:

- `#experienceTemplate`, `#formationTemplate`, `#certificationTemplate`
- `#technoTemplate`, `#meetupTemplate`, `#socialLinkTemplate`

Templates are cloned using `template.content.cloneNode(true)` and populated via DOM queries.

### Data Structure

All CV data is in the `data` constant object:

```javascript
const data = {
    personal: { firstname, lastname, birthday, technos, certifications, ... },
    experiences: [{ dateStart, dateEnd, title, description }, ...],
    formations: [{ date, title, description }, ...],
    social: { twitter, github, linkedin, twitch },
    contact: { name, address, email, phone, web }
}
```

### Entry Point

`fillDocument()` is called on `DOMContentLoaded`, which calls render functions:
`renderHeader()`, `renderExperiences()`, `renderFormations()`, `renderContact()`,
`renderPersonalInfo()`, `renderCertifications()`, `renderTechnos()`, `renderMeetups()`,
`renderActivities()`, `renderVarious()`, `renderSocialLinks()`

## Code Style Guidelines

### HTML
- **Tabs** for indentation
- IDs: **camelCase** (`experienceTemplate`)
- Section IDs: **lowercase** (`#jobs`, `#formation`)
- Self-closing tags: `<br/>`, `<img />`

### CSS
- **Tabs** for indentation
- Selectors: lowercase, hyphens when needed
- Colors: hex values (`#2b5d82`, `#00ccff`)
- Layout: Flexbox
- Print: `@media print` rules in style.css

### JavaScript
- **Tabs** for indentation
- **camelCase** for variables, functions, object properties
- Use `const` and `let` (not `var`)
- Use template literals, arrow functions, `forEach`

## Naming Conventions

| Element | Convention | Examples |
|---------|------------|----------|
| JS variables/functions | camelCase | `templateContent`, `renderHeader()` |
| Object properties | camelCase | `dateStart`, `imgUrl` |
| HTML IDs | camelCase | `experienceTemplate` |
| Section IDs | lowercase | `jobs`, `formation` |
| CSS classes | lowercase/kebab | `split`, `contact-content` |
| Files | lowercase | `style.css`, `index.html` |

## Content Guidelines

- All content in **French**
- Dates: `DD/MM/YYYY` for birthdays, `YYYY` for experiences
- Use `<br/>` for line breaks, `<strong>` for emphasis

## Common Tasks

### Adding a New Experience
```javascript
// Add to data.experiences array
{ dateStart: "2024", dateEnd: "aujourd'hui", title: "Company", description: "..." }
```

### Adding a New Certification
```javascript
// Add to data.personal.certifications, add badge image to /images/
{ name: "Cert Name", badge: "badge.png" }
```

### Adding a New Technology
```javascript
// Add to data.personal.technos (level: 1-5 stars)
{ name: "TechName", level: 4 }
```

## Error Handling

No error handling - simple static site with hardcoded data, no async operations.

## External Dependencies

- **Font Awesome**: Icons (bundled)
- **Google Fonts**: Roboto and Material Icons (CDN)

Do not modify minified files (`*.min.css`).

## Git Workflow

- Commit messages historically in French
- Single main branch, no CI/CD

## Print Optimization

Print styles in `@media print`. Verify print preview when making layout changes.
