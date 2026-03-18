import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useFormValidation } from '@/hooks/useFormValidation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import type { ContactFormData } from '@/types';

const WHATSAPP_NUMBER = '919901065174'; 
const WHATSAPP_MESSAGE = 'Hello! I would like to get a quote for Meera UPVC interior services.';

// EmailJS Configuration - Uncomment and configure when ready to use
// const EMAILJS_CONFIG = {
//   serviceId: 'your_service_id', // Replace with your EmailJS service ID
//   templateId: 'your_template_id', // Replace with your EmailJS template ID
//   publicKey: 'your_public_key', // Replace with your EmailJS public key
// };

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { errors, validateForm, clearErrors, clearError } = useFormValidation();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      clearError(field);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS Integration
      // Uncomment and configure with your actual EmailJS credentials
      
      // const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     service_id: EMAILJS_CONFIG.serviceId,
      //     template_id: EMAILJS_CONFIG.templateId,
      //     user_id: EMAILJS_CONFIG.publicKey,
      //     template_params: {
      //       from_name: formData.name,
      //       from_email: formData.email,
      //       phone: formData.phone,
      //       message: formData.message,
      //       to_email: 'info@yourbusiness.com', // Replace with your business email
      //     },
      //   }),
      // });

      // if (response.ok) {
      //   setSubmitStatus('success');
      //   setFormData({ name: '', phone: '', email: '', message: '' });
      // } else {
      //   setSubmitStatus('error');
      // }

      // Simulating successful submission for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 bg-slate-50"
      aria-label="Contact Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Craft Your Dream Space
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ready to transform your home? Reach out to us for a free consultation 
            and quote. We are here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Contact Cards */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+91 99010 65174</p>
                    <p className="text-sm text-slate-500">Call for Wholesale Inquiries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@upvcinteriors.com</p>
                    <p className="text-sm text-slate-500">We reply within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      #72, 4th Main, 2nd Cross, Gangamma Temple,<br />
                      G.M. Palya, Bangalore-560 075
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] font-bold py-6 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] group border-0"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h3>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitStatus('idle')}
                      variant="outline"
                      className="border-amber-500 text-slate-900 hover:bg-amber-50 font-bold"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700 font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`h-12 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-medium">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 99010 65174"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`h-12 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`h-12 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium">
                        Your Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`min-h-[120px] resize-none ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Error */}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-sm text-red-700">
                          Something went wrong. Please try again or contact us directly via phone/WhatsApp.
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all hover:scale-[1.02] border-b-2 border-amber-500 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
