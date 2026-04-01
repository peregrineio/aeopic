"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";

const serviceOptions = [
  { value: "web-app", label: "Custom Web App" },
  { value: "ai-tools", label: "AI-Powered Tools" },
  { value: "marketing", label: "Marketing & SEO" },
  { value: "ecommerce", label: "eCommerce" },
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
  { value: "not-sure", label: "Not Sure" },
];

export function GradientWizardForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      services: [],
    },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (value: string) => {
    const current = selectedServices;
    if (current.includes(value)) {
      setValue("services", current.filter((s) => s !== value));
    } else {
      setValue("services", [...current, value]);
    }
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
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                currentStep === step
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30"
                  : currentStep > step
                    ? "bg-violet-500/20 text-violet-400"
                    : "bg-white/5 text-white/30"
              )}
            >
              {currentStep > step ? <Check className="w-5 h-5" /> : step}
            </div>
            {step < 3 && (
              <div
                className={cn(
                  "w-16 sm:w-24 h-0.5 mx-2 rounded-full transition-all duration-300",
                  currentStep > step ? "bg-violet-500" : "bg-white/10"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-white mb-6">
                About You
              </h2>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Your name *
                </label>
                <input
                  {...register("name")}
                  placeholder="Jane Smith"
                  className="input-glass w-full h-12 px-4"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Work email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="jane@company.com"
                  className="input-glass w-full h-12 px-4"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Company
                </label>
                <input
                  {...register("company")}
                  placeholder="Acme Inc."
                  className="input-glass w-full h-12 px-4"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-white mb-6">
                Your Project
              </h2>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  What do you need? *
                </label>
                <p className="text-white/40 text-sm mb-3">
                  Select all that apply
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => toggleService(option.value)}
                      className={cn(
                        "p-4 text-left text-sm rounded-xl border transition-all duration-200",
                        selectedServices.includes(option.value)
                          ? "border-violet-500 bg-violet-500/20 text-violet-300"
                          : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/10"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.services.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  {...register("projectDescription")}
                  rows={4}
                  placeholder="What problem are you solving? What does success look like?"
                  className="input-glass w-full px-4 py-3 resize-none"
                />
                {errors.projectDescription && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.projectDescription.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Almost Done
              </h2>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">
                  Timeline
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timelineOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5
                        cursor-pointer hover:bg-white/10 transition-all
                        has-[:checked]:border-violet-500 has-[:checked]:bg-violet-500/20"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("timeline")}
                        className="sr-only"
                      />
                      <span className="text-sm text-white/70">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">
                  Budget range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5
                        cursor-pointer hover:bg-white/10 transition-all
                        has-[:checked]:border-violet-500 has-[:checked]:bg-violet-500/20"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("budget")}
                        className="sr-only"
                      />
                      <span className="text-sm text-white/70">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {currentStep < totalSteps ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn-glow px-6 py-3 flex items-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-glow px-8 py-3 flex items-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
