"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID"
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY"
const CONTACT_TO_EMAIL = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL ?? "specific@email.com"

const emailSchema = z.string().email("Please enter a valid email")

const formSchema = z
  .object({
    contactAs: z.enum(["individual", "organization"]),
    // shared
    country: z.string().min(1, "Country is required"),
    message: z.string().min(1, "Message is required"),

    // individual
    name: z.string().optional(),
    professionalRole: z.string().optional(),
    email: z.string().optional(),

    // organization
    organizationName: z.string().optional(),
    organizationType: z.enum(["Clinic", "Hospital", "Other"]).optional(),
    organizationTypeOther: z.string().optional(),
    yourName: z.string().optional(),
    yourRole: z.string().optional(),
    workEmail: z.string().optional(),
    teamSize: z.enum(["1-5", "6-20", "21+"]).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.contactAs === "individual") {
      if (!data.name || data.name.trim() === "") {
        ctx.addIssue({ code: "custom", path: ["name"], message: "Name is required" })
      }
      if (!data.professionalRole || data.professionalRole.trim() === "") {
        ctx.addIssue({ code: "custom", path: ["professionalRole"], message: "Professional role is required" })
      }
      if (!data.email || data.email.trim() === "") {
        ctx.addIssue({ code: "custom", path: ["email"], message: "Email is required" })
      } else {
        const parsed = emailSchema.safeParse(data.email)
        if (!parsed.success) {
          ctx.addIssue({ code: "custom", path: ["email"], message: parsed.error.issues[0]?.message ?? "Invalid email" })
        }
      }
      return
    }

    if (!data.organizationName || data.organizationName.trim() === "") {
      ctx.addIssue({ code: "custom", path: ["organizationName"], message: "Organization name is required" })
    }
    if (!data.organizationType) {
      ctx.addIssue({ code: "custom", path: ["organizationType"], message: "Type is required" })
    }
    if (data.organizationType === "Other") {
      if (!data.organizationTypeOther || data.organizationTypeOther.trim() === "") {
        ctx.addIssue({ code: "custom", path: ["organizationTypeOther"], message: "Please specify the type" })
      }
    }
    if (!data.yourName || data.yourName.trim() === "") {
      ctx.addIssue({ code: "custom", path: ["yourName"], message: "Your name is required" })
    }
    if (!data.yourRole || data.yourRole.trim() === "") {
      ctx.addIssue({ code: "custom", path: ["yourRole"], message: "Your role is required" })
    }
    if (!data.workEmail || data.workEmail.trim() === "") {
      ctx.addIssue({ code: "custom", path: ["workEmail"], message: "Work Email is required" })
    } else {
      const parsed = emailSchema.safeParse(data.workEmail)
      if (!parsed.success) {
        ctx.addIssue({ code: "custom", path: ["workEmail"], message: parsed.error.issues[0]?.message ?? "Invalid email" })
      }
    }
    if (!data.teamSize) {
      ctx.addIssue({ code: "custom", path: ["teamSize"], message: "Estimated team size is required" })
    }
  })

type ContactFormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const defaultValues: ContactFormValues = useMemo(
    () => ({
      contactAs: "individual",
      name: "",
      professionalRole: "",
      country: "",
      email: "",
      message: "",
      organizationName: "",
      organizationType: undefined,
      organizationTypeOther: "",
      yourName: "",
      yourRole: "",
      workEmail: "",
      teamSize: undefined,
    }),
    []
  )

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onSubmit",
  })

  const contactAs = watch("contactAs")
  const organizationType = watch("organizationType")

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const templateParams: Record<string, string> = {
        to_email: CONTACT_TO_EMAIL,
        contact_as: data.contactAs,
        message: data.message,
      }

      if (data.contactAs === "individual") {
        templateParams.from_name = data.name ?? ""
        templateParams.from_email = data.email ?? ""
        templateParams.country = data.country
        templateParams.professional_role = data.professionalRole ?? ""
      } else {
        templateParams.from_name = data.yourName ?? ""
        templateParams.from_email = data.workEmail ?? ""
        templateParams.country = data.country
        templateParams.organization_name = data.organizationName ?? ""
        templateParams.organization_type =
          data.organizationType === "Other" ? data.organizationTypeOther ?? "" : data.organizationType ?? ""
        templateParams.your_role = data.yourRole ?? ""
        templateParams.estimated_team_size = data.teamSize ?? ""
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setIsSubmitted(true)
      reset(defaultValues)
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative section-y section-x section-visuals bg-gradient-to-b from-white via-[#f9f9fb] to-white">
      {/* Floating dots (subtle) */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#9d9af0] rounded-full animate-pulse opacity-40" />
      <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#82e8b4] rounded-full animate-ping opacity-30" />
      <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#93bddc] rounded-full animate-bounce opacity-30" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-[#9d9af0]/20 to-[#93bddc]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-gradient-to-r from-[#82e8b4]/10 to-[#6c909e]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="section-container relative z-10">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6">
               <Phone className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
Contacts
            </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 text-balance">
              Ready to transform your practice?
            </h2>

         <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ">
 <span className="font-semibold">  Get in touch </span> <br />
             Tell us who you are, and we’ll route your request accordingly.
            </p>
          </div>

          <div className="grid gap-12 items-start lg:grid-cols-6">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-2 lg:sticky lg:top-24">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#9d9af0]/20 to-[#93bddc]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[#9d9af0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@visual-thinking.pt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#82e8b4]/20 to-[#6c909e]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#6c909e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(+351) 223 750 358 *</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative lg:col-span-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-foreground">I am contacting as:</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            value="individual"
                            className="sr-only"
                            {...register("contactAs")}
                          />
                          <div
                            className={`rounded-xl border p-4 transition-all duration-200 ${
                              contactAs === "individual"
                                ? "border-[#9d9af0] bg-[#9d9af0]/5"
                                : "border-slate-200 bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <div className="text-sm font-semibold text-gray-900">Individual mental health professional</div>
                          </div>
                        </label>

                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            value="organization"
                            className="sr-only"
                            {...register("contactAs")}
                          />
                          <div
                            className={`rounded-xl border p-4 transition-all duration-200 ${
                              contactAs === "organization"
                                ? "border-[#82e8b4] bg-[#82e8b4]/10"
                                : "border-slate-200 bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <div className="text-sm font-semibold text-gray-900">Clinic / Hospital / organization</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {contactAs === "organization" ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="organizationName" className="text-foreground">
                            Organization name *
                          </Label>
                          <Input
                            id="organizationName"
                            {...register("organizationName")}
                            className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#82e8b4] focus:ring-[#82e8b4]/20"
                            placeholder="Wellness Psychology Center"
                          />
                          {errors.organizationName && (
                            <p className="text-sm text-red-600">{errors.organizationName.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organizationType" className="text-foreground">
                            Type *
                          </Label>
                          <select
                            id="organizationType"
                            {...register("organizationType")}
                            className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-foreground placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82e8b4]/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select…
                            </option>
                            <option value="Clinic">Clinic</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.organizationType && (
                            <p className="text-sm text-red-600">{errors.organizationType.message}</p>
                          )}
                        </div>

                        {organizationType === "Other" ? (
                          <div className="space-y-2">
                            <Label htmlFor="organizationTypeOther" className="text-foreground">
                              Please specify *
                            </Label>
                            <Input
                              id="organizationTypeOther"
                              {...register("organizationTypeOther")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#82e8b4] focus:ring-[#82e8b4]/20"
                              placeholder="e.g., Research center"
                            />
                            {errors.organizationTypeOther && (
                              <p className="text-sm text-red-600">{errors.organizationTypeOther.message}</p>
                            )}
                          </div>
                        ) : null}

                        <div className="grid lg:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="yourName" className="text-foreground">
                              Your name *
                            </Label>
                            <Input
                              id="yourName"
                              {...register("yourName")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#82e8b4] focus:ring-[#82e8b4]/20"
                              placeholder="Dr. Sarah Johnson"
                            />
                            {errors.yourName && (
                              <p className="text-sm text-red-600">{errors.yourName.message}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="yourRole" className="text-foreground">
                              Your role *
                            </Label>
                            <Input
                              id="yourRole"
                              {...register("yourRole")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#82e8b4] focus:ring-[#82e8b4]/20"
                              placeholder="Clinical Director"
                            />
                            {errors.yourRole && (
                              <p className="text-sm text-red-600">{errors.yourRole.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="countryOrg" className="text-foreground">
                              Country *
                            </Label>
                            <Input
                              id="countryOrg"
                              {...register("country")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#82e8b4] focus:ring-[#82e8b4]/20"
                              placeholder="Portugal"
                            />
                            {errors.country && (
                              <p className="text-sm text-red-600">{errors.country.message}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="workEmail" className="text-foreground">
                              Work Email *
                            </Label>
                            <Input
                              id="workEmail"
                              type="email"
                              {...register("workEmail")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#82e8b4] focus:ring-[#82e8b4]/20"
                              placeholder="name@organization.com"
                            />
                            {errors.workEmail && (
                              <p className="text-sm text-red-600">{errors.workEmail.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="teamSize" className="text-foreground">
                            Estimated team size *
                          </Label>
                          <select
                            id="teamSize"
                            {...register("teamSize")}
                            className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-foreground placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82e8b4]/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select…
                            </option>
                            <option value="1-5">1-5</option>
                            <option value="6-20">6-20</option>
                            <option value="21+">21+</option>
                          </select>
                          {errors.teamSize && (
                            <p className="text-sm text-red-600">{errors.teamSize.message}</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid lg:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">
                              Name *
                            </Label>
                            <Input
                              id="name"
                              {...register("name")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                              placeholder="Dr. Sarah Johnson"
                            />
                            {errors.name && (
                              <p className="text-sm text-red-600">{errors.name.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">
                              Email *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              {...register("email")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                              placeholder="sarah@practice.com"
                            />
                            {errors.email && (
                              <p className="text-sm text-red-600">{errors.email.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="professionalRole" className="text-foreground">
                              Professional role (psychologist / psychiatry / other) *
                            </Label>
                            <Input
                              id="professionalRole"
                              {...register("professionalRole")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                              placeholder="Clinical Psychologist"
                            />
                            {errors.professionalRole && (
                              <p className="text-sm text-red-600">{errors.professionalRole.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country" className="text-foreground">
                              Country *
                            </Label>
                            <Input
                              id="country"
                              {...register("country")}
                              className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                              placeholder="Portugal"
                            />
                            {errors.country && (
                              <p className="text-sm text-red-600">{errors.country.message}</p>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20 resize-none"
                        placeholder="Tell us about your practice and how we can help..."
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#9d9af0] to-[#93bddc] hover:from-[#7d77ec] hover:to-[#82e8b4] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#82e8b4] to-[#6c909e] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-gray-500 hover:bg-gray-600"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}

                {error && (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-red-600">{error}</p>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#9d9af0] to-[#93bddc] rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#82e8b4] to-[#6c909e] rounded-full opacity-40 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
