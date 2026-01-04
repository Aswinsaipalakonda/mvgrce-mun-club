import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { RegistrationForm } from "@/components/RegistrationForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// TO ENABLE GOOGLE SHEETS INTEGRATION:
// 1. Create a Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Paste the script below:
/*
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
*/
// 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 5. Copy the URL and paste it below

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCiMw1EvnjJONxA4rD6fLbv-LFt0QOjE-uH5tzLQjdQBkjnOdv_O2bzbsgSmv62LRZ2A/exec"; // Paste your Google Apps Script URL here

export default function Register() {
  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20 bg-navy relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container px-4 relative z-10 w-full max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Join <span className="text-gold">MVGRCE MUN</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Register now to become a part of our vibrant Model United Nations community.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-navy-light/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl ring-1 ring-white/5">
              {/* Dark mode override for form */}
              <div className="dark text-foreground">
                <RegistrationForm googleScriptUrl={GOOGLE_SCRIPT_URL} />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Having trouble? Contact us at <a href="mailto:mun@mvgrce.edu.in" className="text-gold hover:underline">mun@mvgrce.edu.in</a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
