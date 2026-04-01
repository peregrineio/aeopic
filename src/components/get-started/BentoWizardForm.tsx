"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowLeft, ArrowRight, Check } from "lucide-react";
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
import { contactFormSchema, type ContactFormInput, type ContactFormData } from "@/lib/validations";
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

export function BentoWizardForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
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

  const nextStep = async () => {
    let fieldsToValidate: (keyof ContactFormInput)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ["name", "email"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["services", "projectDescription"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -24 : 24,
      opacity: 0,
    }),
  };

  // Input styling classes
  const inputClasses = `
    w-full h-12 px-4 rounded-lg
    bg-[var(--bento-bg)]
    border border-[var(--bento-border)]
    text-[var(--bento-text)] placeholder:text-[var(--bento-text-muted)]
    focus:outline-none focus:border-[var(--bento-accent)] focus:ring-2 focus:ring-[var(--bento-accent)]/10
    transition-all duration-200
  `;

  return (
    <div className="relative">
      {/* Step indicator: clean pill style */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-all",
                currentStep === step
                  ? "bg-[var(--bento-accent)] text-white"
                  : currentStep > step
                    ? "bg-[var(--bento-accent-soft)] text-[var(--bento-accent)]"
                    : "bg-[var(--bento-grid)] text-[var(--bento-text-muted)]"
              )}
            >
              {currentStep > step ? <Check className="w-4 h-4" /> : step}
            </div>
            {step < 3 && (
              <div
                className={cn(
                  "w-8 h-0.5 rounded-full transition-all",
                  currentStep > step ? "bg-[var(--bento-accent)]" : "bg-[var(--bento-grid)]"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative min-h-[380px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Step 1: About You */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-[var(--bento-text)] font-medium">
                      Your Name <span className="text-[var(--bento-accent)]">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      {...register("name")}
                      className={cn(
                        inputClasses,
                        "mt-2",
                        errors.name && "border-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[var(--bento-text)] font-medium">
                      Email <span className="text-[var(--bento-accent)]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                      className={cn(
                        inputClasses,
                        "mt-2",
                        errors.email && "border-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-[var(--bento-text)] font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      {...register("company")}
                      className={cn(inputClasses, "mt-2")}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Your Project */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <Label className="text-[var(--bento-text)] font-medium">
                      What do you need? <span className="text-[var(--bento-accent)]">*</span>
                    </Label>
                    <p className="text-sm text-[var(--bento-text-muted)] mt-1 mb-3">
                      Select all that apply
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleService(option.value)}
                          className={cn(
                            "p-4 text-left rounded-lg border transition-all duration-200",
                            selectedServices.includes(option.value)
                              ? "border-[var(--bento-accent)] bg-[var(--bento-accent-soft)] text-[var(--bento-accent)] font-medium"
                              : "border-[var(--bento-border)] hover:border-[var(--bento-accent)]/50 bg-white text-[var(--bento-text-secondary)]"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="text-sm text-red-500 mt-2">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="projectDescription" className="text-[var(--bento-text)] font-medium">
                      Tell us about your project <span className="text-[var(--bento-accent)]">*</span>
                    </Label>
                    <Textarea
                      id="projectDescription"
                      rows={4}
                      placeholder="What problem are you trying to solve? What does success look like?"
                      {...register("projectDescription")}
                      className={cn(
                        "mt-2 rounded-lg bg-[var(--bento-bg)] border border-[var(--bento-border)]",
                        "text-[var(--bento-text)] placeholder:text-[var(--bento-text-muted)]",
                        "focus:outline-none focus:border-[var(--bento-accent)] focus:ring-2 focus:ring-[var(--bento-accent)]/10",
                        "transition-all duration-200 resize-none",
                        errors.projectDescription && "border-red-500"
                      )}
                    />
                    {errors.projectDescription && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.projectDescription.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Timeline & Budget */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-[var(--bento-text)] font-medium">Timeline</Label>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {timelineOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 px-4 py-3 border border-[var(--bento-border)] rounded-lg
                            cursor-pointer hover:border-[var(--bento-accent)]/50 transition-colors
                            has-[:checked]:border-[var(--bento-accent)] has-[:checked]:bg-[var(--bento-accent-soft)]"
                        >
                          <input
                            type="radio"
                            value={option.value}
                            {...register("timeline")}
                            className="w-4 h-4 accent-[var(--bento-accent)]"
                          />
                          <span className="text-sm text-[var(--bento-text-secondary)]">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-[var(--bento-text)] font-medium">Budget Range</Label>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {budgetOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 px-4 py-3 border border-[var(--bento-border)] rounded-lg
                            cursor-pointer hover:border-[var(--bento-accent)]/50 transition-colors
                            has-[:checked]:border-[var(--bento-accent)] has-[:checked]:bg-[var(--bento-accent-soft)]"
                        >
                          <input
                            type="radio"
                            value={option.value}
                            {...register("budget")}
                            className="w-4 h-4 accent-[var(--bento-accent)]"
                          />
                          <span className="text-sm text-[var(--bento-text-secondary)]">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="referralSource" className="text-[var(--bento-text)] font-medium">
                      How did you hear about us?
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("referralSource", value)}
                    >
                      <SelectTrigger className="w-full mt-2 h-12 border-[var(--bento-border)] rounded-lg">
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
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--bento-border)]">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={cn(
              "text-[var(--bento-text-secondary)] hover:text-[var(--bento-text)] hover:bg-[var(--bento-accent-soft)]",
              currentStep === 1 && "invisible"
            )}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-[var(--bento-accent)] hover:bg-[#5B54D6] text-white
                px-6 h-11 rounded-lg font-semibold transition-all duration-200"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--bento-accent)] hover:bg-[#5B54D6] text-white
                px-8 h-11 rounded-lg font-semibold transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Submit Request
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
