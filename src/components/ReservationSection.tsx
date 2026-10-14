import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle, Clock, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '4',
    specialRequest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number';
    } else if (!/^[0-9+ ]{10,14}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    if (!formData.date) errs.date = 'Please select a date';
    if (!formData.time) errs.time = 'Please select a time';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);

    // Option to open WhatsApp pre-filled with this reservation details
    const text = encodeURIComponent(
      `Hello The 2nd Wife Family Restaurant, Sherghati!\nI want to confirm a Table Reservation:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Date: ${formData.date}\n` +
        `• Time: ${formData.time}\n` +
        `• Guests: ${formData.guests} people\n` +
        (formData.specialRequest ? `• Special Notes: ${formData.specialRequest}\n` : '') +
        `\nPlease confirm our table!`
    );

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="relative py-24 sm:py-32 bg-[#0A0A0B] overflow-hidden">
      {/* Blurred food photo background with moody dark scrim */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/src/assets/images/hero_tandoor_spread_1791878866644.jpg"
          alt="Ambiance backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-[#0A0A0B]/90" />
      </div>

      {/* Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F28C28]/10 rounded-full blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
            <span>TABLE RESERVATIONS & ORDERS</span>
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight mb-4">
            Craving Something <span className="text-gradient-orange">Delicious Tonight?</span>
          </h2>
          <p className="text-[#B5AFA5] text-base sm:text-lg font-light">
            Book your family table or order directly. We’re open daily until 11:00 PM in Sherghati.
          </p>
        </div>

        {/* Main Card with Form & Direct Contacts */}
        <div className="bg-[#161618]/90 backdrop-blur-xl border border-[rgba(242,140,40,0.35)] rounded-3xl p-6 sm:p-10 shadow-2xl glow-orange-sm">
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F5F1EA] mb-3">
                Reservation Request Received!
              </h3>
              <p className="text-base text-[#B5AFA5] max-w-md mb-8">
                Thank you, {formData.name}! We've opened WhatsApp to finalize your reservation for {formData.guests}{' '}
                guests on {formData.date} at {formData.time}. Our host will confirm promptly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border border-[rgba(255,255,255,0.15)] text-sm text-[#F5F1EA] hover:bg-[#1F1F22] transition-colors cursor-pointer"
                >
                  Book Another Table
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-semibold text-sm shadow-md"
                >
                  Call Now to Reconfirm
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Abhishek Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#1F1F22] border rounded-xl text-sm text-[#F5F1EA] placeholder-[#B5AFA5]/40 focus:outline-none focus:ring-1 focus:ring-[#F28C28] transition-all ${
                      errors.name ? 'border-rose-500' : 'border-[rgba(255,255,255,0.1)]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 090971 60969"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#1F1F22] border rounded-xl text-sm text-[#F5F1EA] placeholder-[#B5AFA5]/40 focus:outline-none focus:ring-1 focus:ring-[#F28C28] transition-all ${
                      errors.phone ? 'border-rose-500' : 'border-[rgba(255,255,255,0.1)]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1F1F22] border border-[rgba(255,255,255,0.1)] rounded-xl text-sm text-[#F5F1EA] focus:outline-none focus:ring-1 focus:ring-[#F28C28] appearance-none cursor-pointer"
                    >
                      <option value="2">2 Guests (Couple / Friends)</option>
                      <option value="4">4 Guests (Small Family)</option>
                      <option value="6">6 Guests (Family Table)</option>
                      <option value="8">8 Guests (Large Group)</option>
                      <option value="12">12+ Guests (Party Celebration)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#B5AFA5] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] mb-2">
                    Reservation Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1F1F22] border border-[rgba(255,255,255,0.1)] rounded-xl text-sm text-[#F5F1EA] focus:outline-none focus:ring-1 focus:ring-[#F28C28]"
                    />
                    <Calendar className="w-4 h-4 text-[#B5AFA5] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1F1F22] border border-[rgba(255,255,255,0.1)] rounded-xl text-sm text-[#F5F1EA] focus:outline-none focus:ring-1 focus:ring-[#F28C28] appearance-none cursor-pointer"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:00">01:00 PM (Lunch)</option>
                      <option value="14:00">02:00 PM (Lunch)</option>
                      <option value="18:30">06:30 PM (Evening)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Peak Dinner)</option>
                      <option value="21:30">09:30 PM (Late Dinner)</option>
                      <option value="22:00">10:00 PM (Last Call)</option>
                    </select>
                    <Clock className="w-4 h-4 text-[#B5AFA5] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Special Request */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] mb-2">
                    Special Request (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday setup, quiet booth"
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1F1F22] border border-[rgba(255,255,255,0.1)] rounded-xl text-sm text-[#F5F1EA] placeholder-[#B5AFA5]/40 focus:outline-none focus:ring-1 focus:ring-[#F28C28]"
                  />
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-semibold rounded-xl text-sm shadow-lg shadow-[#F28C28]/25 hover:brightness-110 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Reservation</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Call Direct */}
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[rgba(242,140,40,0.4)] hover:border-[#FFB15C] bg-[#1F1F22] text-[#F5F1EA] font-semibold rounded-xl text-xs sm:text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#F28C28]" />
                    <span>Call 090971 60969</span>
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href={RESTAURANT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.972.536 1.956.824 3.149.825h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.568 5.768c0 4.173-3.395 7.568-7.568 7.568-1.332 0-2.592-.352-3.693-.972l-5.138 1.348 1.371-5.011c-.694-1.157-1.071-2.486-1.071-3.933 0-4.173 3.395-7.568 7.568-7.568s7.531 3.395 7.531 7.568z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
