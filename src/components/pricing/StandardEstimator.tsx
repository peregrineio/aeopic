"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Layers,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { estimatorSchema, type EstimatorFormInput } from "@/lib/validations";
import { cn } from "@/lib/utils";



interface TypeOption {
  value: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

interface ComplexityOption {
  value: string;
  label: string;
  description: string;
  timeline: string;
}

interface StandardEstimatorProps {
  onComplete?: () => void;
}

const projectTypeOptions: TypeOption[] = [
  { value: "web-app", label: "Web Application", icon: Globe, description: "Custom platform or web app" },
  { value: "mobile-app", label: "Mobile App", icon: Smartphone, description: "iOS, Android, or cross-platform" },
  { value: "platform", label: "Platform / SaaS", icon: Layers, description: "Multi-user product with subscriptions" },
  { value: "marketing", label: "Marketing & Growth", icon: TrendingUp, description: "Website, SEO, ads, content" },
  { value: "not-sure", label: "Not Sure Yet", icon: HelpCircle, description: "Let's figure it out together" },
];

const complexityOptions: ComplexityOption[] = [
  { value: "mvp", label: "Getting Started", description: "Core features, clean design, launch fast", timeline: "4-8 weeks" },
  { value: "custom", label: "Growing", description: "Multiple integrations, dashboards, automation", timeline: "8-16 weeks" },
  { value: "enterprise", label: "Advanced", description: "Multi-user, real-time, compliance, scale", timeline: "4-8 months" },
];

const featureOptions = [
  "User Authentication",
  "Payment Processing",
  "Admin Dashboard",
  "API Integrations",
  "Real-Time Features",
  "AI / Automation",
  "Analytics & Reporting",
  "Customer Portal",
  "Booking / Scheduling",
  "CRM / Lead Management",
  "Email & Notifications",
];

const stepLabels = ["Project Type", "Complexity", "Features", "Your Details"];

function getRecommendation(complexity: string) {
  if (complexity === "mvp") {
    return {
      type: "MVP / Prototype",
      timeline: "4-8 weeks",
      description:
        "We'll build a focused product with your core features — designed to validate your idea and get real users fast.",
    };
  } else if (complexity === "custom") {
    return {
      type: "Custom Web Application",
      timeline: "8-16 weeks",
      description:
        "A full platform tailored to your business operations — replacing scattered tools with one unified system.",
    };
  }
  return {
    type: "Full Platform Build",
    timeline: "4-8 months",
    description:
      "Enterprise-grade architecture with advanced features, built to scale with your business.",
  };
}

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 24 : -24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -24 : 24, opacity: 0 }),
};

export function StandardEstimator({ onComplete }: StandardEstimatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedComplexity, setSelectedComplexity] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(1);
  const [stepError, setStepError] = useState("");
  const stepRef = useRef<HTMLFieldSetElement>(null);

  const prefersReducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const transitionDuration = prefersReducedMotion ? 0 : 0.2;

  useEffect(() => {
    stepRef.current?.focus();
  }, [currentStep]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<EstimatorFormInput>({
    resolver: zodResolver(estimatorSchema),
    defaultValues: {
      projectType: "",
      complexity: "",
      features: [],
      name: "",
      email: "",
      phone: "",
      company: "",
      description: "",
    },
  });

  function nextStep() {
    setStepError("");
    if (currentStep === 0 && selectedTypes.length === 0) {
      setStepError("Please select at least one project type");
      return;
    }
    if (currentStep === 1 && !selectedComplexity) {
      setStepError("Please select a complexity level");
      return;
    }
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, 3));
  }

  function prevStep() {
    setStepError("");
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  const onSubmit = async (data: EstimatorFormInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: data.projectType,
          complexity: data.complexity,
          features: data.features,
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          company: data.company || undefined,
          description: data.description || undefined,
          source: "pricing-estimator",
        }),
      });
      if (response.ok) {
        setIsComplete(true);
        onComplete?.();
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const recommendation = getRecommendation(selectedComplexity);

  if (isComplete) {
    return (
      <section id="estimator" className="estimator-spotlight py-24 md:py-36">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg mx-auto"
          >
            <div className="estimator-card p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <Check className="h-7 w-7 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-[-0.025em] mb-4">
                We&apos;ll be in touch within 24 hours
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Check your inbox at{" "}
                <span className="text-white font-medium font-mono">
                  {getValues("email")}
                </span>{" "}
                for next steps.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-[#726AFF] font-semibold text-sm hover:text-[#9B95FF] transition-colors font-mono"
              >
                Back to homepage →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimator" className="estimator-spotlight py-24 md:py-36 relative overflow-hidden">
      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(114,106,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(114,106,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Vertical light beam from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#726AFF]/60 to-transparent pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="text-center mb-14">
          <p className="pricing-eyebrow mb-4">Project Estimator</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-[-0.025em]">
            Scope Your Project
          </h2>
          <p className="text-white/50 text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            Answer a few questions and get a personalized estimate in under two minutes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto pb-20 md:pb-0">
          {/* Takes under 2 minutes badge */}
          <p className="text-center text-white/30 text-xs font-mono mb-6 tracking-wider">
            Takes under 2 minutes
          </p>

          {/* Progress indicator — labeled stepper on desktop, dots on mobile */}
          <div className="flex items-center justify-center mb-12">
            {/* Mobile: dots only */}
            <div className="flex md:hidden items-center gap-2">
              {stepLabels.map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      i < currentStep
                        ? "bg-[#726AFF]"
                        : i === currentStep
                          ? "bg-[#726AFF] ring-2 ring-[#726AFF]/30"
                          : "bg-white/10"
                    )}
                  />
                  {i < stepLabels.length - 1 && (
                    <div
                      className={cn(
                        "h-px w-6 transition-all duration-500",
                        i < currentStep ? "bg-[#726AFF]/50" : "bg-white/10"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: labeled stepper */}
            <div className="hidden md:flex items-center gap-0">
              {stepLabels.map((label, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      aria-current={i === currentStep ? "step" : undefined}
                      aria-label={`Step ${i + 1}: ${label}`}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                        i < currentStep
                          ? "bg-[#726AFF] text-white"
                          : i === currentStep
                            ? "bg-[#726AFF] text-white"
                            : "bg-white/5 border border-white/15 text-white/40"
                      )}
                    >
                      {i < currentStep ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-xs mt-1.5 transition-colors duration-300 whitespace-nowrap",
                        i === currentStep ? "text-white" : "text-white/40"
                      )}
                    >
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div
                      className={cn(
                        "h-px w-12 lg:w-16 mx-3 transition-all duration-500 self-start mt-4",
                        i < currentStep ? "bg-[#726AFF]/50" : "bg-white/10"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {stepError && (
            <p className="text-center text-[#FCA5A5] text-sm mb-6 font-mono" aria-live="polite">
              {stepError}
            </p>
          )}

          {/* Step content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: transitionDuration }}
            >
              {/* Step 1: Project Type */}
              {currentStep === 0 && (
                <fieldset ref={stepRef} tabIndex={-1} className="outline-none">
                  <legend className="sr-only">{stepLabels[0]}</legend>
                  <div role="group" aria-label="Project type — select all that apply" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {projectTypeOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedTypes.includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="checkbox"
                          aria-checked={isSelected}
                          onClick={() => {
                            const updated = isSelected
                              ? selectedTypes.filter((t) => t !== opt.value)
                              : [...selectedTypes, opt.value];
                            setSelectedTypes(updated);
                            setValue("projectType", updated.join(", "));
                            setStepError("");
                          }}
                          className={cn(
                            "relative p-5 rounded-xl cursor-pointer transition-all duration-200 text-center min-h-[120px] flex flex-col items-center justify-center focus-visible:outline-2 focus-visible:outline-[#726AFF] focus-visible:outline-offset-2",
                            isSelected
                              ? "bg-[#726AFF]/[0.08] border border-[#726AFF]/60 ring-1 ring-[#726AFF]/20"
                              : "bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15]"
                          )}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-2">
                              <Check className="h-3.5 w-3.5 text-[#726AFF]" />
                            </div>
                          )}
                          <Icon
                            className={cn(
                              "w-7 h-7 mb-3 transition-colors",
                              isSelected ? "text-[#726AFF]" : "text-white/70"
                            )}
                          />
                          <p className="text-sm font-bold text-white">
                            {opt.label}
                          </p>
                          <p className="text-xs text-white/50 mt-1">
                            {opt.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-white/30 text-xs mt-4 font-mono">
                    {selectedTypes.length > 0
                      ? `${selectedTypes.length} selected`
                      : "Select all that apply"}
                  </p>
                </fieldset>
              )}

              {/* Step 2: Complexity */}
              {currentStep === 1 && (
                <fieldset ref={stepRef} tabIndex={-1} className="outline-none">
                  <legend className="sr-only">{stepLabels[1]}</legend>
                  <div role="radiogroup" aria-label="Project complexity" className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {complexityOptions.map((opt) => {
                      const isSelected = selectedComplexity === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => {
                            setSelectedComplexity(opt.value);
                            setValue("complexity", opt.value);
                            setStepError("");
                          }}
                          className={cn(
                            "p-5 rounded-xl cursor-pointer transition-all duration-200 text-left min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#726AFF] focus-visible:outline-offset-2",
                            isSelected
                              ? "bg-[#726AFF]/[0.08] border border-[#726AFF]/60 ring-1 ring-[#726AFF]/20"
                              : "bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15]"
                          )}
                        >
                          <p className="text-base font-bold text-white">
                            {opt.label}
                          </p>
                          <p className="text-sm text-white/50 mt-1">
                            {opt.description}
                          </p>
                          <span className="inline-block bg-[#726AFF]/15 text-[#726AFF] text-xs px-3 py-1 rounded-full mt-3">
                            {opt.timeline}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {/* Step 3: Features */}
              {currentStep === 2 && (
                <fieldset ref={stepRef} tabIndex={-1} className="outline-none">
                  <legend className="sr-only">{stepLabels[2]}</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {featureOptions.map((feature) => {
                      const isSelected = selectedFeatures.includes(feature);
                      return (
                        <button
                          key={feature}
                          type="button"
                          role="checkbox"
                          aria-checked={isSelected}
                          onClick={() => {
                            const updated = isSelected
                              ? selectedFeatures.filter((f) => f !== feature)
                              : [...selectedFeatures, feature];
                            setSelectedFeatures(updated);
                            setValue("features", updated);
                          }}
                          className={cn(
                            "px-4 py-2.5 min-h-[48px] rounded-full text-sm transition-all duration-200",
                            isSelected
                              ? "border border-[#726AFF]/60 bg-[#726AFF]/[0.12] text-white shadow-[0_0_12px_-3px_rgba(114,106,255,0.35)]"
                              : "border border-white/[0.12] text-white/60 bg-white/[0.02] hover:border-white/25 hover:text-white/80"
                          )}
                        >
                          {isSelected && (
                            <Check className="h-3.5 w-3.5 mr-1.5 inline" />
                          )}
                          {feature}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-white/30 text-xs mt-4 font-mono">
                    {selectedFeatures.length > 0
                      ? `${selectedFeatures.length} selected`
                      : "Select all that apply — or skip this step"}
                  </p>
                </fieldset>
              )}

              {/* Step 4: Recommendation + Contact Form */}
              {currentStep === 3 && (
                <fieldset ref={stepRef} tabIndex={-1} className="outline-none">
                <legend className="sr-only">{stepLabels[3]}</legend>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* Recommendation */}
                  <div className="bg-[#726AFF]/[0.06] border border-[#726AFF]/20 rounded-xl p-6">
                    <p className="text-xs text-white/40 uppercase tracking-wider font-mono mb-4">
                      Your Estimate
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/60 text-sm">Project</span>
                      <span className="text-white font-semibold text-sm text-right">
                        {selectedTypes.map((t) => projectTypeOptions.find((o) => o.value === t)?.label).join(", ")}
                      </span>
                    </div>
                    {selectedComplexity && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60 text-sm">Complexity</span>
                        <span className="text-white font-semibold text-sm">
                          {complexityOptions.find((o) => o.value === selectedComplexity)?.label}
                          <span className="text-[#726AFF] text-xs ml-2">
                            {recommendation.timeline}
                          </span>
                        </span>
                      </div>
                    )}
                    {selectedFeatures.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <p className="text-white/40 text-xs uppercase tracking-wider font-mono mb-2">
                          Features
                        </p>
                        {selectedFeatures.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-sm text-white/70 py-1"
                          >
                            <Check className="h-3.5 w-3.5 text-[#726AFF] shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contact form */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="est-name" className="text-white/80 text-sm">
                        Name *
                      </Label>
                      <Input
                        id="est-name"
                        {...register("name")}
                        className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#726AFF]/60 focus:ring-[#726AFF]/20 transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="est-email" className="text-white/80 text-sm">
                        Email *
                      </Label>
                      <Input
                        id="est-email"
                        type="email"
                        {...register("email")}
                        className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#726AFF]/60 focus:ring-[#726AFF]/20 transition-colors"
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="est-company" className="text-white/80 text-sm">
                          Company
                        </Label>
                        <Input
                          id="est-company"
                          {...register("company")}
                          className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#726AFF]/60 focus:ring-[#726AFF]/20 transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                      <div>
                        <Label htmlFor="est-phone" className="text-white/80 text-sm">
                          Phone
                        </Label>
                        <Input
                          id="est-phone"
                          type="tel"
                          {...register("phone")}
                          className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#726AFF]/60 focus:ring-[#726AFF]/20 transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="est-description" className="text-white/80 text-sm">
                        Brief description
                      </Label>
                      <Textarea
                        id="est-description"
                        {...register("description")}
                        className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#726AFF]/60 focus:ring-[#726AFF]/20 transition-colors min-h-[80px]"
                        placeholder="Tell us about your project"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-gradient text-white font-semibold px-8 py-4 rounded-xl w-full flex items-center justify-center gap-2 disabled:opacity-40 text-base hover:shadow-lg hover:shadow-[#726AFF]/30 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Get My Detailed Estimate"
                      )}
                    </button>
                    <p className="text-white/30 text-xs text-center mt-3 font-mono">
                      Join Houston businesses who started here · No obligation
                    </p>
                  </div>
                </form>
                </fieldset>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation bar — sticky bottom on mobile */}
          {currentStep < 3 && (
            <div className="md:relative fixed bottom-0 left-0 right-0 md:mt-8 bg-[#0F1226]/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none border-t border-white/5 md:border-0 p-4 md:p-0 z-20 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-white/40 hover:text-white/70 flex items-center gap-2 transition-colors text-sm font-mono min-h-[48px]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#726AFF] text-white px-7 py-3.5 rounded-xl flex items-center gap-2 hover:bg-[#5B54D6] transition-all font-semibold text-sm shadow-lg shadow-[#726AFF]/25 hover:shadow-[#726AFF]/40 hover:-translate-y-0.5 min-h-[48px]"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="md:relative fixed bottom-0 left-0 right-0 md:mt-6 bg-[#0F1226]/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none border-t border-white/5 md:border-0 p-4 md:p-0 z-20">
              <button
                type="button"
                onClick={prevStep}
                className="text-white/40 hover:text-white/70 flex items-center gap-2 transition-colors text-sm font-mono min-h-[48px]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
