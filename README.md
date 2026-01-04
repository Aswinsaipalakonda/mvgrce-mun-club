# MVGRCE Model United Nations Club Website 🇺🇳

![MVGRCE MUN Banner](assets\mun-logo.png)

Welcome to the official repository for the **MVGR College of Engineering Model United Nations (MUN) Club** website. This platform serves as the central hub for our club's activities, event registrations, and information dissemination.

## 🚀 Live Demo

**[https://mvgrce-mun.vercel.app/](https://mvgrce-mun.vercel.app/)**

## 🛠️ Tech Stack

This project is built with modern web technologies to ensure performance, accessibility, and a premium user experience.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Features

- **Dynamic Hero Section**: Engaging animations and visuals using Framer Motion.
- **Detailed About Page**: Information about the club's mission, vision, and leadership.
- **Committee Showcase**: Interactive display of simulated UN committees (UNHRC, DISEC, etc.) and organizational roles.
- **Event Management**: Timeline of upcoming and past events.
- **Secure Registration**: Integration with Google Sheets via Google Apps Script for seamless participant registration without a traditional backend.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, optimized for all devices.
- **SEO Optimized**: Meta tags, Open Graph support, and sitemap generation for better search visibility.

## 📂 Project Structure

```bash
mvgrce-mun-hub-main/
├── public/              # Static assets (robots.txt, sitemap.xml, favicon)
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── lib/             # Utility functions
│   ├── pages/           # Main page views (Index, About, Events, Register)
│   ├── App.tsx          # Main application component with Routing
│   └── main.tsx         # Entry point
├── index.html           # HTML entry point with SEO meta tags
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts       # Vite build configuration
```

## ⚡ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/mvgrce-mun-hub.git
    cd mvgrce-mun-hub
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view it in the browser.

## 📝 Configuration

### Google Sheets Integration

The registration form submits data directly to a Google Sheet. To configure this:

1.  Create a new Google Sheet.
2.  Open **Extensions > Apps Script**.
3.  Paste the following code:
    ```javascript
    function doPost(e) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = e.parameter;
      sheet.appendRow([
        data.timestamp,
        data.fullName,
        data.rollNumber,
        data.email,
        data.phone,
        data.department
      ]);
      return ContentService.createTextOutput("Success");
    }
    ```
4.  Deploy as a Web App (Execute as: **Me**, Who has access: **Anyone**).
5.  Copy the URL and update the `GOOGLE_SCRIPT_URL` constant in `src/pages/Register.tsx`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by the MVGRCE MUN Tech Team
</p>
