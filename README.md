# Irtifa Haider – Academic Portfolio

Static site (HTML, CSS, JS). No build step.

## Before publishing: edit these
1. `images/profile.jpg`: add your photo (square, at least 400x400). Initials show until you do.
2. `index.html`: search for `TODO` and replace the Google Scholar, LinkedIn and publication links.
3. `index.html`: rewrite the About paragraph in your own words and make your research direction specific.
4. `assets/Irtifa_Haider_CV.pdf`: replace with your latest CV when it changes. Keep the file name or update the link.

## Publish on GitHub Pages
1. Create a repository named `IrtifaHaider.github.io` (your GitHub username + `.github.io`), set to Public.
2. Upload everything in this folder to the repository root, or from a terminal:
   ```
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/IrtifaHaider/IrtifaHaider.github.io.git
   git push -u origin main
   ```
3. Repository **Settings → Pages → Build and deployment**: Source = "Deploy from a branch", Branch = `main`, folder = `/ (root)`.
4. After a minute the site is live at `https://irtifahaider.github.io`.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
