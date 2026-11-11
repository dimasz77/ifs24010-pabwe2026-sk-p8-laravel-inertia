import { Head, Link, usePage } from '@inertiajs/react';

const highlights = [
    { title: 'Tulis dengan Markdown', desc: 'Editor yang rapi untuk menyusun artikel dari draf sampai terbit.' },
    { title: 'Bantuan AI', desc: 'Hasilkan ide dan draf artikel, lalu sunting sesuai gaya Anda.' },
    { title: 'Ekspor & impor Excel', desc: 'Kelola banyak artikel sekaligus lewat lembar kerja.' },
];

function Flash() {
    const { flash } = usePage().props;

    if (!flash?.success && !flash?.error) {
        return null;
    }

    const ok = Boolean(flash.success);

    return (
        <div className={`mb-6 rounded-lg px-4 py-3 text-sm ${ok ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
            {flash.success ?? flash.error}
        </div>
    );
}

// Layout khusus halaman autentikasi: layar terbagi dua, tanpa navbar dan footer aplikasi.
export default function AuthLayout({ title, children }) {
    const { appName } = usePage().props;
    const name = appName ?? 'BlogVerse Pro';

    return (
        <div className="grid min-h-screen bg-white lg:grid-cols-[1.05fr_1fr]">
            <Head title={title} />

            <aside className="relative hidden flex-col justify-between overflow-hidden bg-slate-900 p-12 text-slate-100 lg:flex">
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

                <Link href="/" className="relative text-2xl font-bold tracking-tight">
                    {name}<span className="text-teal-400">.</span>
                </Link>

                <div className="relative max-w-md">
                    <h2 className="text-4xl font-bold leading-tight">Tempat tulisan Anda menemukan pembacanya.</h2>
                    <ul className="mt-10 space-y-6">
                        {highlights.map((h) => (
                            <li key={h.title} className="flex gap-4">
                                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-400" />
                                <div>
                                    <p className="font-semibold">{h.title}</p>
                                    <p className="text-sm text-slate-400">{h.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="relative text-sm text-slate-500">&copy; {new Date().getFullYear()} {name}</p>
            </aside>

            <main className="flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-sm">
                    <Link href="/" className="mb-8 block text-xl font-bold text-slate-900 lg:hidden">
                        {name}<span className="text-teal-600">.</span>
                    </Link>
                    <Flash />
                    {children}
                    <Link href="/articles" className="mt-8 block text-center text-sm text-slate-500 hover:text-teal-700">
                        &larr; Kembali membaca artikel
                    </Link>
                </div>
            </main>
        </div>
    );
}
