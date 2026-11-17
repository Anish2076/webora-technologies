# Webora Technologies website

A responsive, single-page web design and development portfolio built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — website content and page structure
- `css/style.css` — layout, colours, responsive styles and animations
- `js/script.js` — navigation, settings, language switch, FAQ assistant and reveal animations

## Features
- Company overview, services, portfolio concepts, project enquiry form and project-process details
- Settings for light/dark theme, English/Hindi, larger text and high contrast
- Responsive hamburger navigation, frequently asked questions and a local FAQ assistant

This is a freelancer portfolio and enquiry website, not a freelance marketplace with job listings, payments or live messaging. The FAQ assistant uses prepared answers from this site; it is not connected to a live AI service.

## Run locally
1. Extract the ZIP file.
2. Open the `webora-technologies` folder in VS Code.
3. Use a local HTTP server such as the VS Code Live Server extension to preview the site.

## IMPORTANT: Before publishing
1. In `index.html`, update the form `action` recipient and the visible email address in the contact section if needed. They should use the same address.
2. Replace concept work with your real projects as you complete them. The current examples are clearly labelled as concepts.
3. Confirm the displayed mobile number is correct and that you want it public. Its `tel:` link uses India's `+91` country code.
4. Submit a test enquiry after publishing and confirm FormSubmit's activation email so the contact form can deliver messages.

## Contact form note
The project enquiry form submits the contact details, location, selected service, timeline and project description to `weboratechnologieswt@gmail.com` through FormSubmit. On the first submission, confirm the activation email FormSubmit sends to that address. FormSubmit may retain submissions for up to 30 days; this website does not store them.

## Free publishing with GitHub Pages
1. Create a GitHub repository, for example `webora-technologies`.
2. Upload `index.html`, `css/`, `js/`, `images/` and this README to the repository root. The `images/` folder is required for the portfolio previews.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide your public website address after deployment.

You can also publish the folder using Netlify Drop or connect the GitHub repository to Netlify.
