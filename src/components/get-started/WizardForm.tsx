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

const stepTitles = [
  "About You",
  "Your Project",
  "Timeline & Budget",
];

export function WizardForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
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

    if (currentStep === 0) {
      fieldsToValidate = ["name", "email"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["services", "projectDescription"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 2));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
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

  const progressPercentage = ((currentStep + 1) / 3) * 100;

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

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#52525B]">
            Step {currentStep + 1} of 3
          </span>
          <span className="text-sm text-[#A1A1AA]">{stepTitles[currentStep]}</span>
        </div>
        <div className="h-1.5 bg-[#E4E4E7] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: "var(--ink)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative min-h-[380px]">
          {/* Giant Step Number Background */}
          <div
            className="absolute -top-8 -left-4 select-none pointer-events-none font-heading font-extrabold text-[12rem] leading-none"
            style={{ opacity: 0.04, color: "#18181B" }}
          >
            {currentStep + 1}
          </div>

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
              {currentStep === 0 && (
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-[#18181B] font-medium">
                      Your Name <span className="text-[var(--ink)]">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      {...register("name")}
                      className={cn(
                        "mt-2 h-12 border-[#E4E4E7] focus:border-[var(--ink)] focus:ring-[var(--ink-glow)]",
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
                    <Label htmlFor="email" className="text-[#18181B] font-medium">
                      Email <span className="text-[var(--ink)]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                      className={cn(
                        "mt-2 h-12 border-[#E4E4E7] focus:border-[var(--ink)] focus:ring-[var(--ink-glow)]",
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
                    <Label htmlFor="company" className="text-[#18181B] font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      {...register("company")}
                      className="mt-2 h-12 border-[#E4E4E7] focus:border-[var(--ink)] focus:ring-[var(--ink-glow)]"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Your Project */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <Label className="text-[#18181B] font-medium">
                      What do you need? <span className="text-[var(--ink)]">*</span>
                    </Label>
                    <p className="text-sm text-[#A1A1AA] mt-1 mb-3">
                      Select all that apply
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleService(option.value)}
                          className={cn(
                            "px-4 py-3 text-sm rounded-lg border transition-all duration-200 text-left",
                            selectedServices.includes(option.value)
                              ? "border-[var(--ink)] bg-[var(--ink-light)] text-[var(--ink)] font-medium"
                              : "border-[#E4E4E7] hover:border-[var(--ink)]/50 bg-white text-[#52525B]"
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
                    <Label htmlFor="projectDescription" className="text-[#18181B] font-medium">
                      Tell us about your project <span className="text-[var(--ink)]">*</span>
                    </Label>
                    <Textarea
                      id="projectDescription"
                      rows={4}
                      placeholder="What problem are you trying to solve? What does success look like?"
                      {...register("projectDescription")}
                      className={cn(
                        "mt-2 border-[#E4E4E7] focus:border-[var(--ink)] focus:ring-[var(--ink-glow)] resize-none",
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
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-[#18181B] font-medium">Timeline</Label>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {timelineOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 px-4 py-3 border border-[#E4E4E7] rounded-lg cursor-pointer hover:border-[var(--ink)]/50 transition-colors has-[:checked]:border-[var(--ink)] has-[:checked]:bg-[var(--ink-light)]"
                        >
                          <input
                            type="radio"
                            value={option.value}
                            {...register("timeline")}
                            className="w-4 h-4 accent-[var(--ink)]"
                          />
                          <span className="text-sm text-[#52525B]">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#18181B] font-medium">Budget Range</Label>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {budgetOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 px-4 py-3 border border-[#E4E4E7] rounded-lg cursor-pointer hover:border-[var(--ink)]/50 transition-colors has-[:checked]:border-[var(--ink)] has-[:checked]:bg-[var(--ink-light)]"
                        >
                          <input
                            type="radio"
                            value={option.value}
                            {...register("budget")}
                            className="w-4 h-4 accent-[var(--ink)]"
                          />
                          <span className="text-sm text-[#52525B]">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="referralSource" className="text-[#18181B] font-medium">
                      How did you hear about us?
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("referralSource", value)}
                    >
                      <SelectTrigger className="w-full mt-2 h-12 border-[#E4E4E7]">
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
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E4E4E7]">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={cn(
              "text-[#52525B] hover:text-[#18181B] hover:bg-[#F5F3FF]",
              currentStep === 0 && "invisible"
            )}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < 2 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="text-white px-6 py-5"
              style={{ backgroundColor: "var(--ink)" }}
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-white px-8 py-5"
              style={{ backgroundColor: "var(--ink)" }}
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
