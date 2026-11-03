# Publish your Data Science website using GitHub Pages

**Website owner:** Dr. Pritom Jyoti Bora  
**What you need:** a free GitHub account, this website ZIP file, and a web browser.  
**Cost:** free when hosted from a public GitHub repository on the standard GitHub Pages domain.  
**No coding or paid hosting is needed to publish.**

---

## Part A — Preview and personalise (before uploading)

### Step 1 — Unzip the portfolio folder

Download the ZIP and extract it. Inside the folder you will find `index.html`, `styles.css`, `content.js`, `script.js`, `README.md`, `SETUP_GUIDE.md` and an `assets` folder.

### Step 2 — See the design on your computer

Double-click **`index.html`**. It opens in your browser. Click **Projects**, try the category filters, open a **Case study**, and try the light/dark toggle.

### Step 3 — Edit your profile details

Open **`content.js`** in Notepad, VS Code, or another text editor. Find:

```js
person: {
  name: 'Dr. Pritom Jyoti Bora',
  githubUsername: '', // REPLACE with your real username
  linkedInUrl: '',
  ...
}
```

Enter your real GitHub username between the quotes. For example, *if* you chose the username `pritombora`, write:

```js
githubUsername: 'pritombora',
```

This is only an example. You can also insert your LinkedIn address in `linkedInUrl`. If you leave LinkedIn empty, the website will hide the link instead of creating a broken button.

**Important:** `White Hello` is included as a working name, because this is the name you supplied for your stock-prediction project. Review or rename it if necessary.

### Step 4 — Check the project descriptions and public CV

All project summaries live in the `projects: [...]` array in `content.js`.

- **PGNN**: includes X-band training data, the Cole–Cole / conductivity representation, 1–40 GHz reconstruction and Ku-band comparison; does not claim unpublished performance numbers.
- **GPR / materials optimisation**: links to relevant published work but does not imply all methods appeared in one paper.
- **Real-time signal monitoring**: describes your applied experience in Singapore without claiming unverified operational metrics.
- **Computer vision**: describes mask-to-pattern transfer and linewidth analysis.
- **Anomaly detection** and **stock forecasting**: present truthful overviews; the site explains where public datasets and results have yet to be documented.

Your final CV is included in `assets/Pritom_Jyoti_Bora_Data_Science_CV.pdf`. This makes the CV publicly accessible when you publish the site. Remove or replace it if you do not want your phone number and personal contact details on a public website. Keep a public-facing CV in the folder if you prefer.

---

## Part B — Create the site on GitHub (browser method)

### Step 5 — Create or sign in to a GitHub account

Go to https://github.com/ and sign in or create an account. Choose a simple professional username. Your published website address will use that exact username.

### Step 6 — Create a new repository

1. Click the **+** menu in the upper-right corner → **New repository** (or go to https://github.com/new).
2. Enter your repository name as **`YOUR-USERNAME.github.io`**, replacing `YOUR-USERNAME` with your *actual* GitHub username, letter-for-letter.
3. Select **Public** (required on GitHub Free for Pages).
4. You may add a README, but it is not essential because this package already contains one.
5. Click **Create repository**.

**Example only:** If the username is `pritombora`, the repository is `pritombora.github.io` and the website address will be `https://pritombora.github.io/`. This address is not a verified existing account; use your own actual handle.

### Step 7 — Upload the website files

1. Open the new repository and select **Add file → Upload files**.
2. Extract the ZIP if you have not already done so.
3. Drag the **contents** of the extracted portfolio folder into GitHub, not the outer folder itself. Make sure `index.html` is in the repository's top level, and that the `assets` folder is uploaded.
4. Click **Commit changes**.

If the browser does not upload the hidden `.nojekyll` file, that is usually fine for this site. You can add it separately through **Add file → Create new file**, with `.nojekyll` as the name, if needed.

Your file structure on GitHub should look like this:

```text
YOUR-USERNAME.github.io/
├── index.html
├── styles.css
├── content.js
├── script.js
├── README.md
├── SETUP_GUIDE.md
└── assets/
    ├── favicon.svg
    └── Pritom_Jyoti_Bora_Data_Science_CV.pdf
```

If the website displays a 404 error, check that your repository is named correctly, `index.html` is at the root, and the Pages branch is set as described next.

### Step 8 — Enable GitHub Pages

1. Within your repository, click **Settings**.
2. From the left navigation, open **Pages** (under **Code and automation**).
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Click **Save**.

GitHub will then publish the static website. It may take a few minutes, and GitHub advises allowing up to approximately 10 minutes for publication.

### Step 9 — Open and test the published site

Go to **`https://YOUR-USERNAME.github.io/`** in a browser. Check:

- Desktop and mobile layout.
- Project filter buttons and case-study pop-ups.
- All publication links and Google Scholar.
- The CV link opens a real PDF.
- The email link opens your mail application.
- GitHub and LinkedIn links, if configured.

If you see a cached older version after an edit, refresh the browser and check the latest Pages deployment in your repository's **Actions** tab.

### Step 10 — Add your portfolio to your CV

Place a short link near the top of your CV, below your contact details:

```text
AI/ML & Data Science Portfolio: https://YOUR-USERNAME.github.io/
```

Make it a clickable link in the CV document so recruiters can open your project case studies immediately.

---

## Part C — Make the site stronger for recruiters

### Step 11 — Publish code for one good project at a time

A portfolio with three well-documented working repositories is more convincing than ten empty ones. Begin with:

1. **PGNN Dielectric Prediction** — release a cleaned example only when manuscript, dataset and collaboration rules permit. Include the problem statement, dataset format, training/validation steps, key plots, and reproducibility instructions. Do not upload private research data.
2. **GPR Prediction & Uncertainty** — provide a runnable notebook using an authorised dataset or openly labelled synthetic data, with evaluation plots and uncertainty intervals.
3. **Image Segmentation / Pattern Inspection** — provide a small approved sample image, a segmentation script, and an example measurement output.

Then work through anomaly detection and stock prediction once you have properly documented their dataset, algorithms, validation procedures and measured results.

Each standalone project repository could contain:

```text
project-name/
├── README.md          # problem, data, approach, results, limitations
├── requirements.txt   # Python dependencies
├── notebooks/         # reproducible analysis
├── src/               # reusable Python code
├── figures/           # authorised plots
└── LICENSE            # only if you want to grant reuse rights
```

### Step 12 — Connect the code repositories to your website

In `content.js`, find a project such as `id: 'pgnn'`. Its `links` currently read:

```js
links: [],
```

When that project's real repository exists, replace the line with:

```js
links: [
  { label: 'GitHub repository', url: 'https://github.com/YOUR-USERNAME/YOUR-REAL-REPO' }
],
```

You can keep both the paper and repo links:

```js
links: [
  { label: 'Research paper', url: 'https://doi.org/YOUR-REAL-DOI' },
  { label: 'GitHub repository', url: 'https://github.com/YOUR-USERNAME/YOUR-REAL-REPO' }
],
```

The project case-study pop-up will automatically show whichever verified links you add. No changes to the HTML are necessary.

### Step 13 — Update the website later

Whenever you improve a description or add a repository link:

1. In GitHub, open your website repository.
2. Click `content.js` → pencil **Edit**.
3. Modify the relevant text or URL.
4. Click **Commit changes**.
5. GitHub Pages will redeploy automatically from `main`.

To replace your CV, upload a file with the same name in `assets/`, replacing the old file. If you change its filename, also update `cvUrl` in `content.js`.

---

## Important checklist before applying to jobs

- [ ] Your GitHub username and CV link work.
- [ ] The work is labelled accurately as published research, applied research, early-stage project or project draft.
- [ ] PGNN results are not overstated or made public before authorised release.
- [ ] Anomaly detection and stock prediction descriptions have been reviewed and the title `White Hello` is correct.
- [ ] No partner-specific, confidential or restricted datasets are uploaded.
- [ ] Every repository has useful, runnable content and documentation.
- [ ] Your portfolio link is clickable at the top of the CV.

**Official GitHub Pages documentation:**

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
