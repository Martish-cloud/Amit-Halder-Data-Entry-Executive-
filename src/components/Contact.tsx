import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Loader2,
  AlertCircle,
  CheckCircle2,
  RotateCcw,
  ChevronDown,
} from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { PERSONAL_INFO } from '../data/cvData';

interface FormState {
  name: string;
  email: string;
  contact_number: string;
  subject: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact_number?: string;
  subject?: string;
  budget?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    contact_number: '',
    subject: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Contact number is strictly OPTIONAL - only check format if provided
    if (formData.contact_number.trim()) {
      const digitsOnly = formData.contact_number.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15 || !/^[+0-9\s()\-.]+$/.test(formData.contact_number.trim())) {
        newErrors.contact_number = 'Please enter a valid phone number or leave blank.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject / role title.';
    }

    if (!formData.budget.trim()) {
      newErrors.budget = 'Please select a budget / salary range.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const contactVal = formData.contact_number.trim();
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        contact_number: contactVal || 'Not Provided',
        'Contact No.': contactVal || 'Not Provided',
        subject: formData.subject.trim(),
        'Budget / Salary Range': formData.budget.trim(),
        budget: formData.budget.trim(),
        message: formData.message.trim(),
        _subject: 'New Portfolio Inquiry — Data Entry / Operations',
        _replyto: formData.email.trim(),
        _template: 'table',
        _url: typeof window !== 'undefined' ? window.location.href : '',
        _captcha: 'false',
        _honey: '',
      };

      const response = await fetch('https://formsubmit.co/ajax/askfor.amithalder@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          contact_number: '',
          subject: '',
          budget: '',
          message: '',
        });
        setErrors({});
      } else {
        // FormSubmit first-time activation or service message handling
        if (data.message && typeof data.message === 'string') {
          setStatusMessage(data.message);
        }
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#C9B89E]/85 backdrop-blur-xs border-t border-[#765C48]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1D7C4] border border-[#68724F]/35 text-[#4F5A3D] text-xs font-mono font-medium shadow-xs">
            <Mail className="w-3.5 h-3.5 text-[#68724F]" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B382C] tracking-tight">
            Get in Touch with Amit Halder
          </h2>
          <p className="text-[#4B382C]/90 text-sm sm:text-base leading-relaxed font-medium">
            Directly reachable for full-time Data Entry, Operations, ERP coordination, and reporting opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Verified Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            {/* Email Card */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#765C48]/20 hover:border-[#68724F]/50 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1D7C4] border border-[#C9B89E] flex items-center justify-center text-[#4F5A3D]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#765C48] font-semibold">Primary Email</span>
                    <h3 className="text-sm font-bold text-[#29261F]">Direct Inbox</h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-[#EAE2D2] hover:bg-[#D5C7AF] border border-[#C9B89E] text-xs font-mono text-[#4F5A3D] flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4F5A3D]" />
                      <span className="text-[#4F5A3D] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#68724F]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-sm font-mono text-[#4F5A3D] font-medium hover:underline break-all mt-3"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#765C48]/20 hover:border-[#68724F]/50 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1D7C4] border border-[#C9B89E] flex items-center justify-center text-[#4F5A3D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#765C48] font-semibold">Phone / WhatsApp</span>
                    <h3 className="text-sm font-bold text-[#29261F]">Direct Line</h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-lg bg-[#EAE2D2] hover:bg-[#D5C7AF] border border-[#C9B89E] text-xs font-mono text-[#4F5A3D] flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4F5A3D]" />
                      <span className="text-[#4F5A3D] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#68724F]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="block text-sm font-mono text-[#29261F] hover:text-[#4F5A3D] font-medium transition-colors mt-3"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#765C48]/20 hover:border-[#68724F]/50 shadow-xs hover:shadow-md transition-all block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1D7C4] border border-[#C9B89E] flex items-center justify-center text-[#4F5A3D]">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#765C48] font-semibold">Professional Network</span>
                    <h3 className="text-sm font-bold text-[#29261F] group-hover:text-[#4F5A3D] transition-colors">
                      LinkedIn Profile
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#765C48] group-hover:text-[#4F5A3D] transition-colors" />
              </div>
              <div className="text-xs font-mono text-[#4F5A3D] font-medium mt-3 flex items-center gap-1 break-all">
                <span>{PERSONAL_INFO.linkedinDisplay}</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#765C48]/20 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E1D7C4] border border-[#C9B89E] flex items-center justify-center text-[#4F5A3D]">
                  <MapPin className="w-4 h-4 text-[#68724F]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#765C48] font-semibold">Location</span>
                  <div className="text-sm font-bold text-[#29261F]">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct FormSubmit Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#765C48]/20 text-left shadow-md"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C9B89E]/70">
              <div>
                <h3 className="text-base font-bold text-[#4B382C] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#68724F]" />
                  <span>Send an Inquiry</span>
                </h3>
                <p className="text-xs text-[#665E55] mt-0.5">
                  Delivered directly to Amit Halder's inbox via secure FormSubmit.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-[#4F5A3D] bg-[#A8B5A2]/25 px-2.5 py-1 rounded-full border border-[#68724F]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#68724F]" />
                <span>Verified Direct Form</span>
              </div>
            </div>

            {/* Live Success Banner */}
            {status === 'success' && (
              <div
                aria-live="polite"
                className="mb-6 p-4 rounded-xl bg-[#A8B5A2]/30 border border-[#68724F] text-[#4F5A3D] flex items-start gap-3 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#4F5A3D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#29261F]">
                    Your inquiry has been sent successfully. Amit will get back to you soon.
                  </h4>
                  <p className="text-xs text-[#4F5A3D] mt-1 leading-relaxed">
                    Thank you for reaching out. I'll review your message and reply promptly.
                  </p>
                </div>
              </div>
            )}

            {/* Live Error / Activation Notice Banner */}
            {status === 'error' && (
              <div
                aria-live="polite"
                className="mb-6 p-4 rounded-xl bg-[#FDF2F2] border border-[#E0B4B4] text-[#8C3A3A] flex items-start gap-3 shadow-xs"
              >
                <AlertCircle className="w-5 h-5 text-[#8C3A3A] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#8C3A3A]">
                    {statusMessage && statusMessage.toLowerCase().includes('activation')
                      ? 'Form Activation Required'
                      : 'Unable to send your inquiry right now.'}
                  </h4>
                  <p className="text-xs text-[#8C3A3A]/90 mt-1 leading-relaxed">
                    {statusMessage && statusMessage.toLowerCase().includes('activation')
                      ? "FormSubmit has sent a one-time activation confirmation email to askfor.amithalder@gmail.com. Please open the email and click 'Activate Form' to begin receiving live submissions."
                      : statusMessage || 'Please try again or contact me directly by email at askfor.amithalder@gmail.com.'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
              {/* Anti-spam honeypot */}
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              {/* Name and Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#4B382C] font-medium mb-1.5">
                    Your Name <span className="text-[#A33E3B]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ayushi Verma / Hiring Manager"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#EAE2D2]/50 border rounded-xl text-[#29261F] placeholder-[#765C48]/60 focus:outline-none transition-colors shadow-xs ${
                      errors.name ? 'border-[#C25450] focus:border-[#C25450]' : 'border-[#C9B89E] focus:border-[#68724F]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-[#A33E3B] font-mono mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#4B382C] font-medium mb-1.5">
                    Your Email <span className="text-[#A33E3B]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#EAE2D2]/50 border rounded-xl text-[#29261F] placeholder-[#765C48]/60 focus:outline-none transition-colors shadow-xs ${
                      errors.email ? 'border-[#C25450] focus:border-[#C25450]' : 'border-[#C9B89E] focus:border-[#68724F]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#A33E3B] font-mono mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Contact No. (Optional) and Subject / Role Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact_number" className="block text-xs font-mono text-[#4B382C] font-medium mb-1.5 flex items-center justify-between">
                    <span>Contact No.</span>
                    <span className="text-[10px] text-[#665E55] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact_number"
                    name="contact_number"
                    type="tel"
                    autoComplete="tel"
                    disabled={status === 'submitting'}
                    value={formData.contact_number}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#EAE2D2]/50 border rounded-xl text-[#29261F] placeholder-[#765C48]/60 focus:outline-none transition-colors shadow-xs ${
                      errors.contact_number ? 'border-[#C25450] focus:border-[#C25450]' : 'border-[#C9B89E] focus:border-[#68724F]'
                    }`}
                  />
                  {errors.contact_number && (
                    <p className="text-[11px] text-[#A33E3B] font-mono mt-1">{errors.contact_number}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#4B382C] font-medium mb-1.5">
                    Subject / Role Title <span className="text-[#A33E3B]">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity: Data Entry & Operations Professional"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#EAE2D2]/50 border rounded-xl text-[#29261F] placeholder-[#765C48]/60 focus:outline-none transition-colors shadow-xs ${
                      errors.subject ? 'border-[#C25450] focus:border-[#C25450]' : 'border-[#C9B89E] focus:border-[#68724F]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-[#A33E3B] font-mono mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              {/* Budget / Salary Range Select */}
              <div>
                <label htmlFor="budget" className="block text-xs font-mono text-[#4B382C] font-medium mb-1.5">
                  Budget / Salary Range <span className="text-[#A33E3B]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    required
                    disabled={status === 'submitting'}
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#EAE2D2]/50 border rounded-xl appearance-none text-[#29261F] focus:outline-none transition-colors shadow-xs pr-10 cursor-pointer ${
                      errors.budget ? 'border-[#C25450] focus:border-[#C25450]' : 'border-[#C9B89E] focus:border-[#68724F]'
                    } ${!formData.budget ? 'text-[#765C48]/70' : 'text-[#29261F]'}`}
                  >
                    <option value="" disabled>
                      Select Budget / Salary Range
                    </option>
                    <option value="₹15,000 – ₹25,000">₹15,000 – ₹25,000</option>
                    <option value="₹25,000 – ₹30,000">₹25,000 – ₹30,000</option>
                    <option value="₹30,000 – ₹45,000">₹30,000 – ₹45,000</option>
                    <option value="₹45,000+">₹45,000+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#765C48]">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                {errors.budget && (
                  <p className="text-[11px] text-[#A33E3B] font-mono mt-1">{errors.budget}</p>
                )}
              </div>

              {/* Message Details Input */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#4B382C] font-medium mb-1.5">
                  Message Details <span className="text-[#A33E3B]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === 'submitting'}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe the role, requirements, or meeting request..."
                  className={`w-full px-3.5 py-2.5 text-xs bg-[#EAE2D2]/50 border rounded-xl text-[#29261F] placeholder-[#765C48]/60 focus:outline-none transition-colors resize-none shadow-xs ${
                    errors.message ? 'border-[#C25450] focus:border-[#C25450]' : 'border-[#C9B89E] focus:border-[#68724F]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-[#A33E3B] font-mono mt-1">{errors.message}</p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 ${
                    status === 'submitting'
                      ? 'bg-[#68724F] text-[#FFFFFF] cursor-not-allowed opacity-80'
                      : status === 'error'
                      ? 'bg-[#4F5A3D] hover:bg-[#68724F] text-[#FFFFFF] active:scale-[0.98]'
                      : 'bg-[#4F5A3D] hover:bg-[#68724F] text-[#FFFFFF] hover:shadow-lg active:scale-[0.98]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#FFFFFF]" />
                      <span>Sending...</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 text-[#FFFFFF]" />
                      <span>Try Again</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Check className="w-4 h-4 text-[#FFFFFF]" />
                      <span>Inquiry Sent ✓</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#FFFFFF]" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
