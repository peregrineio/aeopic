"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "web-app", label: "Custom Web Application" },
  { value: "ai-tools", label: "AI-Powered Tools" },
  { value: "marketing", label: "Marketing & SEO" },
  { value: "ecommerce", label: "eCommerce Platform" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "exploring", label: "Just Exploring" },
];

const budgetOptions = [
  { value: "under-5k", label: "Under $5K" },
  { value: "5k-15k", label: "$5K - $15K" },
  { value: "15k-50k", label: "$15K - $50K" },
  { value: "50k-plus", label: "$50K+" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const referralOptions = [
  { value: "referral", label: "Referral" },
  { value: "social-media", label: "Social Media" },
  { value: "google", label: "Google Search" },
  { value: "other", label: "Other" },
];

export function EstimateForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      services: [],
    },
  });

  const toggleService = (value: string) => {
    const newServices = selectedServices.includes(value)
      ? selectedServices.filter((s) => s !== value)
      : [...selectedServices, value];
    setSelectedServices(newServices);
    setValue("services", newServices, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/start/thank-you");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate-form" className="py-16 md:py-20 bg-[#F6F7FB]">
      <div className="container-site">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form - Left Column (60%) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-muted-foreground">
                  Takes 2 minutes. We respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* About You */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">About You</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className={cn(
                          "mt-1",
                          errors.name && "border-destructive"
                        )}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={cn(
                          "mt-1",
                          errors.email && "border-destructive"
                        )}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Your Project */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Your Project</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>What do you need? *</Label>
                      <div className="grid sm:grid-cols-2 gap-2 mt-2 relative z-10">
                        {serviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => toggleService(option.value)}
                            className={cn(
                              "p-3 text-left text-sm rounded-lg border transition-colors cursor-pointer",
                              selectedServices.includes(option.value)
                                ? "border-primary bg-primary/5 text-primary font-medium"
                                : "border-gray-200 hover:border-primary/50 bg-white"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.services.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="projectDescription">
                        Tell us about your project *
                      </Label>
                      <Textarea
                        id="projectDescription"
                        rows={4}
                        placeholder="What problem are you trying to solve? What does success look like?"
                        {...register("projectDescription")}
                        className={cn(
                          "mt-1",
                          errors.projectDescription && "border-destructive"
                        )}
                      />
                      {errors.projectDescription && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.projectDescription.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline & Budget */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Timeline & Budget</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label>Timeline</Label>
                      <div className="space-y-2 mt-2">
                        {timelineOptions.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              value={option.value}
                              {...register("timeline")}
                              className="w-4 h-4 text-primary accent-primary"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>Budget Range</Label>
                      <div className="space-y-2 mt-2">
                        {budgetOptions.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              value={option.value}
                              {...register("budget")}
                              className="w-4 h-4 text-primary accent-primary"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* One More Thing */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">One More Thing</h3>
                  <div>
                    <Label htmlFor="referralSource">
                      How did you hear about us?
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("referralSource", value)}
                    >
                      <SelectTrigger className="w-full sm:w-64 mt-2">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {referralOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto cta-gradient text-white hover:opacity-90 px-10 py-6 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send It Over"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar - Right Column (40%) */}
          <div className="lg:col-span-2 space-y-6">
            {/* What Happens Next Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-4">What Happens Next</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center">
                    1
                  </span>
                  <span className="text-sm text-muted-foreground pt-1">
                    We review your submission within 24 hours
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center">
                    2
                  </span>
                  <span className="text-sm text-muted-foreground pt-1">
                    We schedule a discovery call (30 minutes)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center">
                    3
                  </span>
                  <span className="text-sm text-muted-foreground pt-1">
                    We send a detailed proposal within 48 hours
                  </span>
                </li>
              </ol>
            </div>

            {/* Trust Note Card */}
            <div className="p-5 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm text-muted-foreground">
                Your information is secure. We'll never share or sell your data.
              </p>
            </div>

            {/* Email Fallback Card */}
            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground mb-2">
                Prefer email?
              </p>
              <a
                href="mailto:contact@aeopic.com"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Mail className="h-4 w-4" />
                contact@aeopic.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
