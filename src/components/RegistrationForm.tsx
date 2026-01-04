import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const departments = [
  "CSE",
  "ECE",
  "EEE",
  "DE",
  "MECH",
  "CE",
  "IT",
  "CSIT",
  "CHEM",
  "Other",
];

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  rollNumber: z
    .string()
    .trim()
    .min(3, "Roll number is required")
    .max(20, "Roll number must be less than 20 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  department: z.string().min(1, "Please select your department"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  googleScriptUrl?: string;
}

export function RegistrationForm({ googleScriptUrl }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      rollNumber: "",
      email: "",
      department: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // If Google Script URL is provided, submit to Google Sheets
      if (googleScriptUrl) {
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("rollNumber", data.rollNumber);
        formData.append("email", data.email);
        formData.append("department", data.department);
        formData.append("phone", data.phone);
        formData.append("timestamp", new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "medium",
          hour12: true
        }));

        const response = await fetch(googleScriptUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required for Google Apps Script
        });

        // With no-cors, we can't read the response, so we assume success
        setSubmitStatus("success");
        form.reset();
      } else {
        // Demo mode - just show success
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        form.reset();
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-green-800 mb-2">
          Registration Successful!
        </h3>
        <p className="text-green-700 mb-6">
          Thank you for registering. You will receive a confirmation email within 48 hours.
        </p>
        <Button
          onClick={() => setSubmitStatus("idle")}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-100"
        >
          Register Another
        </Button>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
          >
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </motion.div>
        )}

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Full Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  className="h-11 md:h-12 bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rollNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Roll Number *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your roll number"
                  className="h-11 md:h-12 bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Email Address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 md:h-12 bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Phone Number *</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-11 md:h-12 bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Department *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-11 md:h-12 bg-background">
                    <SelectValue placeholder="Select your department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2 md:pt-4">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full h-12 md:h-14 text-base md:text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </div>

        {!googleScriptUrl && (
          <p className="text-xs text-muted-foreground text-center mt-4">
            Demo mode: To enable Google Sheets integration, add your Google Apps Script URL.
          </p>
        )}
      </form>
    </Form>
  );
}
