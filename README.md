# 🎓 Certificate Design Assignment – HTML & CSS

## 📌 Project Overview

This assignment is part of the **Certificate Assignments** series under the **ApnaGuru Learning Platform** by **Maha Mission Education and Career Council (NGO)**. Technical support and deployment are managed by **Apnasite IT Services Pvt. Ltd.**

**🌐 Live Preview Format:**
`https://services.apnasite.in/certificate-assignments/[Developer_Name_assignment_number]/preview.html`
**📁 GitHub Repository:**
👉 [https://github.com/Apnasite/certificate-assignments](https://github.com/Apnasite/certificate-assignments)

---

## 🚀 Assignment Purpose

This assignment enhances your **frontend design skills** using **HTML and advanced CSS**. Your task is to customize and style a certificate using creative, professional, and technically sound CSS—without altering the core structure of the HTML.

---

## 📂 Project Folder Structure

```
certificate-assignments
 ┣ 📂 designs
 ┃ ┗ 📂 sample-code
 ┃   ┣ 📂 css/style.css
 ┃   ┣ 📂 img/
 ┃   ┃ ┣ certificate-logo.png
 ┃   ┃ ┗ org-logo.png
 ┃   ┣ 📂 fonts/
 ┃   ┣ 📜 index.html
 ┃   ┗ 📜 preview.html  <-- main structure to style
 ┣ 📂 SubmittedAssignments
 ┃ ┗ 📂 [Developer_Name_assignment_number]/
 ┣ 📜 Certificate Assignment.docx
 ┗ 📜 User Assignment Mapping.xlsx
```

---

## 🧱 HTML Structure Guidelines

### ✅ You Can Modify:

```html
<div class="certificate-background">
  <!-- ✅ Add or edit content/styling elements here -->
</div>
```

### ❌ Do NOT Modify:

```html
<div class="certificate-content">
  <!-- ❌ Keep everything inside this div unchanged -->
</div>
```

---

## 🎨 CSS Styling Requirements

Use **as many CSS properties as possible** to enhance the appearance and professionalism of the certificate. Recommended properties include but are not limited to:

### 🔤 Typography

* `font-family`, `font-size`, `font-weight`, `line-height`
* `letter-spacing`, `text-align`, `text-transform`, `word-spacing`
* Use **custom fonts** from Google Fonts or the provided `fonts/` folder

### 🖼️ Layout & Positioning

* `display`, `flex`, `grid`, `float`, `position`, `z-index`
* `margin`, `padding`, `width`, `height`
* Use **mm** (millimeters) for layout dimensions
* Use **pt** (points) for font sizes and borders
* ❌ Avoid using `px`, `em`, `%`, or `rem`

### 🎨 Visual Styling

* `background-color`, `background-gradient`, `background-image`
* `border`, `border-radius`, `box-shadow`, `text-shadow`
* `opacity`, `filter`, `transform`, `rotate`, `scale`
* `transition`, `animation` (for creative effect if needed)

### 📐 Print Optimization

* Define certificate width using **297mm** (A4 width)
* Use appropriate print settings via `@media print` if necessary

---

## 🖼️ Image & Logo Guidelines

* Properly align and size the certificate and organization logos
* Use high-quality `.png` images from the `/img` folder
* Ensure logos do not stretch or pixelate

---

## 🧾 Certificate Content Styling

Style and clearly present the following:

* Certificate Title
* Serial Number
* Subtitle
* Date & Signature Area
* Organization Details

---

## 📤 Assignment Submission Steps

Follow the steps below to submit your assignment through GitHub:

### 🔁 1. **Fork the Repository**

Go to:
👉 [https://github.com/Apnasite/certificate-assignments](https://github.com/Apnasite/certificate-assignments)
Click the **"Fork"** button to create a copy in your GitHub account.

---

### 💻 2. **Clone Your Forked Repository**

```bash
git clone https://github.com/YOUR_USERNAME/certificate-assignments.git
cd certificate-assignments
```

---

### 📁 3. **Create Your Folder**

Create your folder inside `SubmittedAssignments` using this format:

```bash
mkdir SubmittedAssignments/YourName_Assignment01
```

Copy the required files from `designs/sample-code/` and customize:

```bash
cp -r designs/sample-code/* SubmittedAssignments/YourName_Assignment01/
```

---

### 🖌️ 4. **Work on Your Files**

* Edit `preview.html` inside your folder
* Add your custom CSS in `css/style.css`
* Add fonts or images if needed in respective folders

---

### ✅ 5. **Commit Your Changes**

```bash
git add .
git commit -m "Added Certificate Assignment - YourName_Assignment01"
```

---

### ⬆️ 6. **Push to Your GitHub Repo**

```bash
git push origin main
```

---

### 🔃 7. **Raise a Pull Request**

* Go to your forked repo on GitHub.
* Click “Compare & Pull Request.”
* Set base repo to: `Apnasite/certificate-assignments`
* Set head repo to: `YourName/certificate-assignments`
* Add a message like:
  `"Submitting Certificate Assignment - YourName_Assignment01"`
* Submit the pull request.

---

## 🧪 Evaluation Criteria

| Criteria                                   | Weightage |
| ------------------------------------------ | --------- |
| HTML Structure Adherence                   | ✅         |
| Creativity and Visual Appeal               | ✅✅✅       |
| CSS Property Usage (variety & quality)     | ✅✅        |
| Measurement Units Compliance (mm, pt)      | ✅         |
| Image Handling and Layout Precision        | ✅         |
| Folder Structure and Commit Message Format | ✅         |
| Pull Request Process Completion            | ✅         |
| Bonus: Use of Animation or Transitions     | ⭐ Bonus   |

---

## 📍 Example Deployment URL

```
https://services.apnasite.in/certificate-assignments/Neha_Jain_01/preview.html
```

---

## 🎯 Final Words

Let your creativity shine within a clean structure! This assignment is your chance to showcase:

* ✅ Technical accuracy
* ✅ Visual elegance
* ✅ Attention to detail
  Push the boundaries using **modern CSS**—while maintaining professionalism.
