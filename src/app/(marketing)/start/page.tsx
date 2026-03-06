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
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
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

export default function StartPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
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
    setValue("services", newServices);
  };

  const onSubmit = async (data: ContactFormData) => {
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
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="container-site">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="mb-4">Let's Build Something Great</h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* About You */}
              <div>
                <h2 className="text-xl font-semibold mb-4">About You</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
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
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" {...register("phone")} />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" {...register("company")} />
                  </div>
                </div>
              </div>

              {/* Your Project */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Your Project</h2>
                <div className="space-y-4">
                  <div>
                    <Label>What do you need? *</Label>
                    <div className="grid sm:grid-cols-2 gap-2 mt-2">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleService(option.value)}
                          className={cn(
                            "p-3 text-left text-sm rounded-lg border transition-colors",
                            selectedServices.includes(option.value)
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border hover:border-primary/50"
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
                      className={
                        errors.projectDescription ? "border-destructive" : ""
                      }
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
                <h2 className="text-xl font-semibold mb-4">Timeline & Budget</h2>
                <div className="grid sm:grid-cols-2 gap-4">
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
                            className="w-4 h-4 text-primary"
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
                            className="w-4 h-4 text-primary"
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
                <h2 className="text-xl font-semibold mb-4">One More Thing</h2>
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

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto cta-gradient text-white hover:opacity-90 px-8"
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

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="font-semibold mb-4">What Happens Next</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    1
                  </span>
                  <span className="text-sm text-muted-foreground">
                    We review your submission within 24 hours
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    2
                  </span>
                  <span className="text-sm text-muted-foreground">
                    We schedule a discovery call (30 minutes)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    3
                  </span>
                  <span className="text-sm text-muted-foreground">
                    We send a detailed quote within 48 hours
                  </span>
                </li>
              </ol>
            </div>

            <div className="p-4 bg-accent rounded-lg">
              <p className="text-sm text-muted-foreground">
                Your information is secure. We'll never share or sell your data.
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Prefer email?
              </p>
              <a
                href="mailto:hello@aeopic.com"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Mail className="h-4 w-4" />
                hello@aeopic.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
