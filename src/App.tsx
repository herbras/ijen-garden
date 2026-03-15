import { motion } from 'motion/react';
import { ArrowUpRight, Leaf, MapPin, Phone, Sprout, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "6285726034692";
const WHATSAPP_MESSAGE = `*Halo, Ijen Garden Sedayu*

Saya tertarik dengan layanan yang tersedia. Berikut detail permintaan saya:

*Nama:*
*Layanan yang diminati:*
(Pembibitan Unggul / Edukasi Pertanian / Suplai Partai Besar)

*Detail permintaan:*


Mohon informasi lebih lanjut. Terima kasih.`;
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-leaf selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.header
        role="banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-2 border-leaf/20'
            : 'bg-white/90 shadow-md border-2 border-transparent'
        } rounded-full px-2 py-1.5 flex items-center gap-2 md:gap-6 w-[90%] md:w-auto justify-between md:justify-center`}
      >
        <div className="flex items-center gap-2 pl-3 md:hidden">
          <Leaf className="w-4 h-4 text-leaf" aria-hidden="true" />
          <span className="font-serif font-bold text-sm tracking-widest uppercase text-forest">Ijen Garden</span>
        </div>

        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6 pl-5">
          <a href="#layanan" className="text-xs font-bold tracking-widest uppercase text-forest hover:text-leaf transition-colors">Layanan</a>
          <a href="#tentang" className="text-xs font-bold tracking-widest uppercase text-forest hover:text-leaf transition-colors">Tentang</a>
          <a href="#lokasi" className="text-xs font-bold tracking-widest uppercase text-forest hover:text-leaf transition-colors">Lokasi</a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi Kami via WhatsApp"
          className="bg-leaf text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-accent transition-colors flex items-center gap-1.5 shadow-md"
        >
          <span>Hubungi Kami</span>
          <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </a>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section aria-label="Hero" className="relative pt-32 md:pt-40 pb-20 px-4 sm:px-8 max-w-[1400px] mx-auto min-h-[90vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-7 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-12 bg-leaf" aria-hidden="true"></div>
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-leaf">
                    Grobogan, Jawa Tengah
                  </span>
                </div>

                <h1 className="font-serif text-6xl md:text-[8rem] leading-[0.9] tracking-tighter text-forest mb-6 font-bold">
                  Ijen Garden
                  <span className="block italic text-leaf ml-2 md:ml-[2rem] font-bold">Sedayu.</span>
                </h1>

                <p className="text-lg md:text-2xl text-forest max-w-lg ml-2 md:ml-[2rem] font-medium leading-relaxed">
                  Pusat budidaya hortikultura modern. Memajukan potensi desa melalui pembibitan unggul dan edukasi pertanian.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md mx-auto lg:ml-auto"
              >
                <div className="arch-mask overflow-hidden aspect-[3/4] relative shadow-2xl border-4 border-white">
                  <img
                    src="https://picsum.photos/seed/nursery/800/1000"
                    alt="Pemandangan kebun pembibitan Ijen Garden Sedayu dengan berbagai tanaman hortikultura"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    width="800"
                    height="1000"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border-2 border-leaf/20 max-w-[220px]"
                >
                  <div className="text-4xl font-serif font-bold text-leaf mb-2">50+</div>
                  <div className="text-sm font-bold tracking-widest uppercase text-forest leading-tight">
                    Varian Bibit Unggul
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="layanan" aria-labelledby="layanan-title" className="py-24 md:py-32 px-4 sm:px-8 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 id="layanan-title" className="font-serif text-4xl md:text-6xl text-forest max-w-xl leading-tight font-bold">
              Layanan <span className="italic text-leaf">Unggulan</span> Kami
            </h2>
            <div className="bg-surface p-4 md:p-6 rounded-2xl border-l-4 md:border-l-8 border-leaf max-w-lg shadow-sm">
              <p className="text-forest text-base md:text-xl font-semibold leading-relaxed">
                Klik pada layanan di bawah ini untuk langsung terhubung dengan WhatsApp kami.
              </p>
            </div>
          </div>

          <div className="border-t-4 border-leaf/30" role="list">
            {/* Service 1 */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Pesan layanan Pembibitan Unggul via WhatsApp"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b-2 md:border-b-4 border-leaf/30 items-center hover:bg-surface transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl md:rounded-3xl cursor-pointer"
            >
              <div className="md:col-span-2 font-serif text-5xl md:text-7xl font-bold text-leaf/30 group-hover:text-leaf transition-colors" aria-hidden="true">
                01
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-forest mb-3">Pembibitan Unggul</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-leaf font-bold bg-leaf/10 inline-flex px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  <Sprout className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Siap Tanam
                </div>
              </div>
              <div className="md:col-span-4 text-forest text-base md:text-xl font-medium leading-relaxed">
                Menyediakan berbagai macam bibit tanaman hortikultura berkualitas tinggi yang dirawat dengan standar pertanian modern.
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-center mt-4 md:mt-0">
                <div className="bg-leaf text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 group-hover:bg-accent transition-colors shadow-md w-full md:w-auto justify-center">
                  <span>Pesan</span>
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </div>
              </div>
            </motion.a>

            {/* Service 2 */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Daftar layanan Edukasi Pertanian via WhatsApp"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b-2 md:border-b-4 border-leaf/30 items-center hover:bg-surface transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl md:rounded-3xl cursor-pointer"
            >
              <div className="md:col-span-2 font-serif text-5xl md:text-7xl font-bold text-leaf/30 group-hover:text-leaf transition-colors" aria-hidden="true">
                02
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-forest mb-3">Edukasi Pertanian</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-leaf font-bold bg-leaf/10 inline-flex px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  <Leaf className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Wisata & Pelatihan
                </div>
              </div>
              <div className="md:col-span-4 text-forest text-base md:text-xl font-medium leading-relaxed">
                Program pelatihan dan wisata edukasi bagi petani pemula, pelajar, maupun masyarakat umum yang ingin mempelajari teknik budidaya.
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-center mt-4 md:mt-0">
                <div className="bg-leaf text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 group-hover:bg-accent transition-colors shadow-md w-full md:w-auto justify-center">
                  <span>Daftar</span>
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </div>
              </div>
            </motion.a>

            {/* Service 3 */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Pesan layanan Suplai Partai Besar via WhatsApp"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b-2 md:border-b-4 border-leaf/30 items-center hover:bg-surface transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl md:rounded-3xl cursor-pointer"
            >
              <div className="md:col-span-2 font-serif text-5xl md:text-7xl font-bold text-leaf/30 group-hover:text-leaf transition-colors" aria-hidden="true">
                03
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-forest mb-3">Suplai Partai Besar</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-leaf font-bold bg-leaf/10 inline-flex px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  <Truck className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Distribusi Buah
                </div>
              </div>
              <div className="md:col-span-4 text-forest text-base md:text-xl font-medium leading-relaxed">
                Melayani permintaan buah segar hasil panen kebun kami dalam kapasitas besar untuk kebutuhan pasar atau supermarket.
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-center mt-4 md:mt-0">
                <div className="bg-leaf text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 group-hover:bg-accent transition-colors shadow-md w-full md:w-auto justify-center">
                  <span>Pesan</span>
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </div>
              </div>
            </motion.a>
          </div>
        </section>

        {/* About */}
        <section id="tentang" aria-labelledby="tentang-title" className="py-24 md:py-32 bg-forest text-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border-4 border-leaf/30">
                  <img
                    src="https://picsum.photos/seed/village/800/1000"
                    alt="Pemandangan Desa Sedayu, lokasi Ijen Garden di Kabupaten Grobogan"
                    className="w-full h-full object-cover opacity-90"
                    width="800"
                    height="1000"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-forest/20 mix-blend-overlay"></div>
                </div>

                <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-180 hidden md:block" style={{ writingMode: 'vertical-rl' }} aria-hidden="true">
                  <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/80">
                    Est. 2024 — Grobogan
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-12 bg-leaf" aria-hidden="true"></div>
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-leaf">
                    Tentang Kami
                  </span>
                </div>

                <h2 id="tentang-title" className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-bold">
                  Membangun Potensi <br/>
                  <span className="italic text-leaf">Desa Sedayu.</span>
                </h2>

                <div className="space-y-4 text-white/90 font-medium text-lg md:text-xl leading-relaxed">
                  <p>
                    Ijen Garden Sedayu lahir dari semangat untuk memberdayakan potensi lokal. Berlokasi di jantung Kabupaten Grobogan, kami menghadirkan produk hortikultura yang berdaya saing tinggi.
                  </p>
                  <p>
                    Dengan menggabungkan kearifan lokal dan teknologi pertanian modern, kami berkomitmen untuk tidak hanya menghasilkan produk berkualitas, tetapi juga mengedukasi masyarakat sekitar tentang pentingnya ketahanan pangan.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8 border-t-2 border-white/20 pt-12">
                  <div>
                    <div className="font-serif text-5xl font-bold text-leaf mb-3">100+</div>
                    <div className="text-sm font-bold tracking-widest uppercase text-white/80">Mitra Petani</div>
                  </div>
                  <div>
                    <div className="font-serif text-5xl font-bold text-leaf mb-3">100%</div>
                    <div className="text-sm font-bold tracking-widest uppercase text-white/80">Organik & Alami</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Map & Visit CTA */}
        <section id="lokasi" aria-labelledby="lokasi-title" className="py-24 md:py-32 px-4 sm:px-8 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-12 bg-leaf" aria-hidden="true"></div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-leaf">Lokasi</span>
              <div className="h-1 w-12 bg-leaf" aria-hidden="true"></div>
            </div>
            <h2 id="lokasi-title" className="font-serif text-4xl md:text-6xl text-forest leading-tight font-bold mb-4">
              Ayo Berkunjung ke <span className="italic text-leaf">Kebun Kami.</span>
            </h2>
            <p className="text-lg md:text-2xl text-forest font-medium max-w-2xl mx-auto leading-relaxed">
              Temui langsung kebun pembibitan kami di Desa Sedayu, Kabupaten Grobogan, Jawa Tengah.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-leaf/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d110.9506277!3d-6.9894788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMjIuMSJTIDExMMKwNTcnMDIuMyJF!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ijen Garden Sedayu di Google Maps"
              className="w-full"
            ></iframe>
          </motion.div>

          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/Xmf3n9cxubkBUZRa9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka lokasi Ijen Garden Sedayu di Google Maps"
              className="inline-flex items-center justify-center gap-3 bg-forest text-white px-6 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold tracking-widest uppercase hover:bg-leaf transition-colors group shadow-xl w-full sm:w-auto"
            >
              <MapPin className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
              <span>Buka di Google Maps</span>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Ajakan bertindak" className="py-32 px-4 sm:px-8 max-w-[1400px] mx-auto text-center bg-surface my-12 rounded-3xl border-2 border-leaf/20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-forest leading-[1.1] tracking-tight mb-6 font-bold">
              Mari Tumbuh <br/>
              <span className="italic text-leaf">Bersama Kami.</span>
            </h2>
            <p className="text-lg md:text-2xl text-forest font-medium mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Konsultasikan kebutuhan bibit, jadwal edukasi, atau permintaan buah partai besar Anda langsung dengan tim kami.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Ijen Garden Sedayu via WhatsApp"
              className="inline-flex items-center justify-center gap-3 bg-leaf text-white px-6 py-4 md:px-12 md:py-6 rounded-full text-base md:text-xl font-bold tracking-widest uppercase hover:bg-accent transition-colors group shadow-xl border-2 md:border-4 border-white w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 md:w-8 md:h-8" aria-hidden="true" />
              <span className="text-center">Hubungi via WhatsApp</span>
              <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform hidden sm:block" aria-hidden="true" />
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-leaf/20 py-12 px-4 sm:px-8 bg-white" role="contentinfo">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-leaf" aria-hidden="true" />
            <span className="font-serif font-bold text-2xl tracking-widest uppercase text-forest">Ijen Garden</span>
          </div>

          <address className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase text-forest not-italic">
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-leaf" aria-hidden="true" /> Sedayu, Grobogan</span>
          </address>

          <div className="text-sm font-bold tracking-widest uppercase text-forest/60">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
