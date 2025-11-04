import React, { useState } from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    Copy, 
    Check,
    ArrowRight
} from 'lucide-react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import NavBar from './NavBar';
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copiedAccount, setCopiedAccount] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah terkirim.');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        }, 1500);
    };

    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "info@sitani.id",
            href: "mailto:info@sitani.id"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+62 21 1234 5678",
            href: "tel:+622112345678"
        },
        {
            icon: MapPin,
            label: "Address",
            value: "Jakarta, Indonesia",
            href: null
        }
    ];

    const bankAccounts = [
        {
            bank: "BRI",
            number: "0123 4567 8901 2345",
            name: "PT SiTani Indonesia"
        },
        {
            bank: "Mandiri",
            number: "1234 5678 9012 3456",
            name: "PT SiTani Indonesia"
        },
        {
            bank: "BCA",
            number: "2345 6789 0123",
            name: "PT SiTani Indonesia"
        }
    ];

    const handleCopyAccount = (accountNumber, index) => {
        navigator.clipboard.writeText(accountNumber.replace(/\s/g, ''));
        setCopiedAccount(index);
        setTimeout(() => {
            setCopiedAccount(null);
        }, 2000);
    };

    return (
        <DefaultLayout>
            <NavBar />

            <div className="bg-white">
                {/* Hero Section - Minimal */}
                <section className="pt-32 pb-20 px-6 lg:px-20">
                    <div className="container mx-auto max-w-6xl">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Let's talk
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                                Ada pertanyaan atau ingin bermitra? Kami siap membantu 
                                membangun ekosistem pertanian digital Indonesia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Methods - Minimal Cards */}
                <section className="pb-20 px-6 lg:px-20">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                const content = (
                                    <div className="group p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-300 cursor-pointer">
                                        <Icon size={24} className="text-gray-400 mb-4" />
                                        <p className="text-sm text-gray-500 mb-2">{method.label}</p>
                                        <p className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                            {method.value}
                                        </p>
                                    </div>
                                );

                                return method.href ? (
                                    <a key={index} href={method.href}>
                                        {content}
                                    </a>
                                ) : (
                                    <div key={index}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form - Minimal Design */}
                <section className="py-20 px-6 lg:px-20 bg-gray-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Kirim Pesan
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tim kami akan merespons dalam 1x24 jam
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                                    placeholder="Nama lengkap"
                                />
                            </div>

                            {/* Email & Phone - Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                                        placeholder="nama@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                                        placeholder="+62 812 3456 7890"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pesan
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                                    placeholder="Tulis pesan Anda..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="group w-full md:w-auto bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium py-4 px-12 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Mengirim...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Kirim Pesan</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Bank Accounts - Minimal Design */}
                <section className="py-20 px-6 lg:px-20">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Rekening Bank
                            </h2>
                            <p className="text-lg text-gray-600">
                                Untuk transfer pembayaran atau investasi
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {bankAccounts.map((account, index) => (
                                <div 
                                    key={index}
                                    className="group p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-300"
                                >
                                    {/* Bank Name */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {account.bank}
                                        </h3>
                                    </div>

                                    {/* Account Number */}
                                    <div className="mb-6 pb-6 border-b border-gray-200">
                                        <p className="text-xs text-gray-500 mb-2">Nomor Rekening</p>
                                        <p className="text-lg font-mono font-medium text-gray-900">
                                            {account.number}
                                        </p>
                                    </div>

                                    {/* Account Name */}
                                    <div className="mb-6">
                                        <p className="text-xs text-gray-500 mb-2">Atas Nama</p>
                                        <p className="text-sm font-medium text-gray-700">
                                            {account.name}
                                        </p>
                                    </div>

                                    {/* Copy Button */}
                                    <button
                                        onClick={() => handleCopyAccount(account.number, index)}
                                        className="w-full py-3 px-4 border border-gray-300 hover:border-gray-900 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-gray-900"
                                    >
                                        {copiedAccount === index ? (
                                            <>
                                                <Check size={16} />
                                                <span>Tersalin</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={16} />
                                                <span>Salin</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Notice - Minimal */}
                        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Pastikan nama rekening sesuai dengan <span className="font-semibold text-gray-900">PT SiTani Indonesia</span>. 
                                Simpan bukti transfer dan hubungi customer service untuk konfirmasi.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Map Section - Minimal */}
                <section className="py-20 px-6 lg:px-20 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Kunjungi Kami
                            </h2>
                            <p className="text-lg text-gray-600">
                                Jl. Pertanian Digital No. 123, Jakarta Selatan
                            </p>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin size={48} className="text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-400 font-medium">Google Maps</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </DefaultLayout>
    );
};

export default Contact;