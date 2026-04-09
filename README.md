# Swarsh Growth co. Website

A modern, responsive multi-page website for a Digital Marketing Agency. This project showcases a professional agency portfolio with dynamic content loading, local storage state management for a custom plan builder, and WhatsApp integration.

## 🚀 Features

### 🏢 Multi-Page Structure
- **Home**: Hero section, featured services, and key value propositions.
- **About**: Company history, mission/vision, and team showcase.
- **Services**: Detailed service listings, pricing packages, and success stories.
- **My Plan**: A persistent "cart" feature allowing users to select services and build a custom marketing plan.
- **Contact**: Contact form and location details.

### 🛠 Technical Highlights
- **Dynamic Content Population**: All service data, team members, and testimonials are stored in a central JSON object (`app.js`) and rendered dynamically. This makes updating content extremely easy without touching HTML.
- **State Management**: Uses `localStorage` to persist the user's "My Plan" selection across different pages.
- **WhatsApp Integration**:
  - Floating WhatsApp button on all pages.
  - "Book Consultation" buttons pre-fill a WhatsApp message based on the user's context (e.g., the specific service package they are interested in).
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop using CSS Grid and Flexbox.
- **Modern UI/UX**:
  - Smooth transitions and hover effects.
  - Interactive "My Plan" counter in the navigation.
  - Service detail modals.

## 💻 Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling with variables for theme management (no external CSS frameworks).
- **JavaScript (ES6+)**: DOM manipulation, local storage logic, and dynamic rendering.
- **Fonts**: Inter and Poppins from Google Fonts.

## 📂 Project Structure

```
d:/movies/multi-page-agency/
├── index.html          # Home page
├── about.html          # Company information and team
├── services.html       # Service listings and packages
├── plan.html           # "My Plan" builder page
├── contact.html        # Contact form
├── style.css           # Global styles and responsive design
├── app.js              # Business logic and data
└── images/             # Asset directory
```

## 🔧 Setup & Usage

1.  **Clone or Download** the repository to your local machine.
2.  **Open the project**:
    - You can open `index.html` directly in your browser.
    - OR serve it using a local server (recommended for better path handling):
      ```bash
      # Python 3
      python -m http.server 8080
      ```
3.  **Navigate**: Open `http://localhost:8080` in your browser.

## 📝 Customization

To update the website content, open `app.js` and modify the `appData` object:

- **Services**: Update the `appData.services` array.
- **Team**: Update `appData.team`.
- **Packages**: Update `appData.packages`.
- **Company Info**: Update `appData.companyInfo`.

Everything will automatically reflect on the website without changing HTML code.
