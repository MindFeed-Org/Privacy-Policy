# MindFeed Editorial Ethics & Privacy Policy Website

A responsive, high-performance static website designed for **GitHub Pages** that showcases MindFeed's **Editorial Ethics Charter & Privacy Policy**.

---

## 🎨 Visual Identity & Architecture

- **Aesthetic**: Follows the app's signature **Warm Paper** editorial look (with automatic/manual **Night Edition** theme toggle).
- **Typography**: Google Fonts pairing of **Newsreader** (classic editorial serif) and **Plus Jakarta Sans** (clean modern sans).
- **Animations**:
  - Live top reading progress bar.
  - Smooth scroll-triggered reveal animations.
  - Staggered hero badge entrances.
  - Interactive table of contents with scrollspy active tracking.
- **Responsiveness**:
  - **PC / Desktops**: 2-column layout with a floating sticky table of contents and focused reading column.
  - **Smartphones**: Clean single-column view with a thumb-friendly horizontal quick-jump pill bar.
- **Zero Heavy Dependencies**: Pure semantic HTML5, modern CSS3, and vanilla JavaScript (no npm, frameworks, or bundlers needed).

---

## ⚡ Automated CI/CD GitHub Workflow

This repository includes an automated GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Every time you push changes to the `main` (or `master`) branch, GitHub Actions automatically builds and publishes the website to GitHub Pages without any manual steps.

### Step 1: Push to GitHub Remote

The remote repository has been configured to:
`https://github.com/MindFeed-Org/Privacy-Policy.git`

To push your latest changes:
```bash
cd /media/windows/workspace/My_Apps/Mind_Feed/privacy-policy
git push -u origin main
```

### Step 2: Enable GitHub Pages with Actions

1. In your GitHub repository at [https://github.com/MindFeed-Org/Privacy-Policy](https://github.com/MindFeed-Org/Privacy-Policy), open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. That's it! Every `git push` triggers the workflow in `.github/workflows/deploy.yml` and publishes to:
   `https://mindfeed-org.github.io/Privacy-Policy/`

---

## 💻 Local Preview

To preview the website locally on your computer:

```bash
cd /media/windows/workspace/My_Apps/Mind_Feed/privacy-policy
python3 -m http.server 8080
```

Then open your browser at [http://localhost:8080](http://localhost:8080).

---

## ✉️ Support Contact

For inquiries regarding the editorial charter, privacy policy, or data deletion:
- **Email**: `mindfeed.support@gmail.com`
