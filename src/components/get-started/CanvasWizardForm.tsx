"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Loader2, Check, Code2, Sparkles, TrendingUp, ShoppingCart, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";

const serviceOptions = [
  { value: "web-app", label: "Custom Web App", icon: Code2, desc: "Tailored platform" },
  { value: "ai-tools", label: "AI Tools", icon: Sparkles, desc: "Smart automation" },
  { value: "marketing", label: "Marketing", icon: TrendingUp, desc: "SEO & growth" },
  { value: "ecommerce", label: "eCommerce", icon: ShoppingCart, desc: "Online store" },
  { value: "not-sure", label: "Not Sure", icon: HelpCircle, desc: "Let's explore" },
];

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "exploring", label: "Exploring" },
];

const budgetOptions = [
  { value: "under-5k", label: "<$5K" },
  { value: "5k-15k", label: "$5-15K" },
  { value: "15k-50k", label: "$15-50K" },
  { value: "50k-plus", label: "$50K+" },
  { value: "not-sure", label: "TBD" },
];

const referralOptions = [
  { value: "referral", label: "Referral" },
  { value: "social-media", label: "Social" },
  { value: "google", label: "Google" },
  { value: "other", label: "Other" },
];

export function CanvasWizardForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { services: [] },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (value: string) => {
    const current = selectedServices;
    if (current.includes(value)) {
      setValue("services", current.filter((s) => s !== value), { shouldValidate: true });
    } else {
      setValue("services", [...current, value], { shouldValidate: true });
    }
  };

  const goToNextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(["name", "email"]);
    } else if (currentStep === 2) {
      isValid = await trigger(["services", "projectDescription"]);
    }
    if (isValid) setCurrentStep(currentStep + 1);
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
        throw new Error("Failed");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress bar - sleek animated */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-white/80">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-white/40">
            {currentStep === 1 ? "About You" : currentStep === 2 ? "Your Project" : "Final Details"}
          </span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#726AFF] to-[#9333EA] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Step 1: About You */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Your name <span className="text-[#726AFF]">*</span>
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Jane Smith"
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border text-white placeholder:text-white/30",
                      "focus:outline-none focus:bg-white/[0.08] focus:border-[#726AFF]/50 focus:ring-2 focus:ring-[#726AFF]/20 transition-all duration-300",
                      errors.name ? "border-red-500/50" : "border-white/[0.08]"
                    )}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Work email <span className="text-[#726AFF]">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jane@company.com"
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border text-white placeholder:text-white/30",
                      "focus:outline-none focus:bg-white/[0.08] focus:border-[#726AFF]/50 focus:ring-2 focus:ring-[#726AFF]/20 transition-all duration-300",
                      errors.email ? "border-red-500/50" : "border-white/[0.08]"
                    )}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
                  <input
                    {...register("company")}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:bg-white/[0.08] focus:border-[#726AFF]/50 focus:ring-2 focus:ring-[#726AFF]/20 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Your Project */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-3">
                  What do you need? <span className="text-[#726AFF]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((option, index) => {
                    const Icon = option.icon;
                    const isSelected = selectedServices.includes(option.value);
                    return (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => toggleService(option.value)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "relative p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden group",
                          isSelected
                            ? "border-[#726AFF]/60 bg-[#726AFF]/10"
                            : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                        )}
                      >
                        {/* Glow on selected */}
                        {isSelected && (
                          <motion.div
                            layoutId="service-glow"
                            className="absolute inset-0 bg-[#726AFF]/5 rounded-xl"
                            initial={false}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        <div className="relative z-10">
                          <Icon
                            className={cn(
                              "w-5 h-5 mb-2 transition-colors duration-300",
                              isSelected ? "text-[#726AFF]" : "text-white/40 group-hover:text-white/60"
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm font-medium block transition-colors duration-300",
                              isSelected ? "text-white" : "text-white/70"
                            )}
                          >
                            {option.label}
                          </span>
                          <span className="text-xs text-white/30 mt-0.5 block">{option.desc}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
                {errors.services && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.services.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Tell us about your project <span className="text-[#726AFF]">*</span>
                </label>
                <textarea
                  {...register("projectDescription")}
                  rows={4}
                  placeholder="What problem are you solving? What does success look like?"
                  className={cn(
                    "w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border text-white placeholder:text-white/30 resize-none",
                    "focus:outline-none focus:bg-white/[0.08] focus:border-[#726AFF]/50 focus:ring-2 focus:ring-[#726AFF]/20 transition-all duration-300",
                    errors.projectDescription ? "border-red-500/50" : "border-white/[0.08]"
                  )}
                />
                {errors.projectDescription && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.projectDescription.message}
                  </motion.p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Final Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-3">Timeline</label>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((option) => (
                    <label
                      key={option.value}
                      className="px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] cursor-pointer hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 has-[:checked]:border-[#726AFF]/60 has-[:checked]:bg-[#726AFF]/10"
                    >
                      <input type="radio" value={option.value} {...register("timeline")} className="sr-only" />
                      <span className="text-sm font-medium text-white/70">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-3">Budget</label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((option) => (
                    <label
                      key={option.value}
                      className="px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] cursor-pointer hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 has-[:checked]:border-[#726AFF]/60 has-[:checked]:bg-[#726AFF]/10"
                    >
                      <input type="radio" value={option.value} {...register("budget")} className="sr-only" />
                      <span className="text-sm font-medium text-white/70">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-3">How did you find us?</label>
                <div className="flex flex-wrap gap-2">
                  {referralOptions.map((option) => (
                    <label
                      key={option.value}
                      className="px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] cursor-pointer hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 has-[:checked]:border-[#726AFF]/60 has-[:checked]:bg-[#726AFF]/10"
                    >
                      <input type="radio" value={option.value} {...register("referralSource")} className="sr-only" />
                      <span className="text-sm font-medium text-white/70">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-white/[0.08]">
        {currentStep > 1 ? (
          <motion.button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>
        ) : (
          <div />
        )}

        {currentStep < totalSteps ? (
          <motion.button
            type="button"
            onClick={goToNextStep}
            whileHover={{ scale: 1.02, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#726AFF] to-[#9333EA] text-white font-semibold shadow-lg shadow-[#726AFF]/25 hover:shadow-xl hover:shadow-[#726AFF]/30 transition-all cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Continue</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#726AFF] to-[#9333EA] text-white font-semibold shadow-lg shadow-[#726AFF]/25 hover:shadow-xl hover:shadow-[#726AFF]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Submit</span>
                <Check className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </>
            )}
          </motion.button>
        )}
      </div>
    </form>
  );
}
