import { Link, useForm } from '@inertiajs/react';
import PasswordInput from '../../Components/PasswordInput';
import { Spinner } from '../../Components/Icons';
import AuthLayout from '../../Layouts/AuthLayout';

const inputClass =
    'w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/20';

const fields = [
    { name: 'name', label: 'Nama Lengkap', type: 'text' },
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'email', label: 'Email (opsional)', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'password_confirmation', label: 'Konfirmasi Password', type: 'password' },
];

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <AuthLayout title="Daftar">
            <h1 className="text-3xl font-bold text-slate-900">Daftar Penulis</h1>
            <p className="mb-8 mt-2 text-sm text-slate-500">Buat akun untuk mulai menerbitkan artikel.</p>

            <form onSubmit={submit} className="space-y-5">
                {fields.map((f) => (
                    <div key={f.name}>
                        <label htmlFor={`register-${f.name}`} className="mb-1.5 block text-sm font-medium text-slate-700">{f.label}</label>
                        {f.type === 'password' ? (
                            <PasswordInput
                                id={`register-${f.name}`}
                                value={data[f.name]}
                                onChange={(e) => setData(f.name, e.target.value)}
                                className={inputClass}
                            />
                        ) : (
                            <input
                                id={`register-${f.name}`}
                                type={f.type}
                                value={data[f.name]}
                                onChange={(e) => setData(f.name, e.target.value)}
                                className={inputClass}
                            />
                        )}
                        {errors[f.name] && <p className="mt-1.5 text-sm text-rose-700">{errors[f.name]}</p>}
                    </div>
                ))}
                <button
                    id="register-submit"
                    type="submit"
                    disabled={processing}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
                >
                    {processing && <Spinner />} Daftar
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
                Sudah punya akun? <Link href="/login" className="font-semibold text-teal-700 hover:underline">Masuk</Link>
            </p>
        </AuthLayout>
    );
}
