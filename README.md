# Irtifa Haider: Academic Portfolio

Personal academic website of **Irtifa Haider**, MSc student in Computer Science and Engineering at Jahangirnagar University, working on Natural Language Processing, Bangla text summarization and large language models.

Live site: https://irtifahaider.github.io

Built with plain HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies.

## Features

- Responsive layout (phone, tablet, desktop) with a mobile menu
- Light and dark theme, remembered between visits
- Sections: About, Experience, Education, Selected Publications, Research Experience, Skills, Projects, Honors & Awards, Certifications, Volunteer, Contact
- Project cards with images and links to the code
- Certificate cards that open the full certificate

## Folder structure

```
IrtifaHaider.github.io/
├── index.html              page content
├── style.css               all styling and the light/dark themes
├── script.js               theme toggle, mobile menu, skill counts
├── assets/
│   └── Irtifa_Haider_CV.pdf
└── images/
    ├── 2.jpg               profile photo
    ├── projects/           project card images
    └── certificates/       certificate images
```

File names are case-sensitive on GitHub Pages (`2.jpg` and `2.JPG` are different files).

## Run locally

Open `index.html` in a browser. To serve it the way GitHub Pages does:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a **public** repository named `IrtifaHaider.github.io`.
2. Upload all files and folders (keep `index.html` at the top level), or push with git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/IrtifaHaider/IrtifaHaider.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at https://irtifahaider.github.io.

## Update the content

| To change | Edit |
|---|---|
| Text, links, projects, publications | `index.html` |
| Colors, spacing, layout | `style.css` (colors are the variables at the top) |
| Profile photo | replace `images/2.jpg` |
| CV | replace `assets/Irtifa_Haider_CV.pdf` (keep the same name) |
| A project image | save it in `images/projects/` and change the `src` of that project card |
| A certificate | save it in `images/certificates/` and change the `src` and `href` of that card |

Then commit and push; the site updates in a minute or two.

## Contact

irtifa.stu2019@juniv.edu · [GitHub](https://github.com/IrtifaHaider) · [LinkedIn](https://www.linkedin.com/in/irtifa-haider-ahona-1924821b0/) · [Google Scholar](https://scholar.google.com/citations?user=NlQSgsYAAAAJ&hl=en&oi=ao)
