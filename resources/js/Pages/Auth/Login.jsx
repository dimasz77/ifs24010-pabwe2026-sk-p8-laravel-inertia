import { Link, useForm } from '@inertiajs/react';
import PasswordInput from '../../Components/PasswordInput';
import { Spinner } from '../../Components/Icons';
import AuthLayout from '../../Layouts/AuthLayout';

const inputClass =
    'w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/20';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({ username: '', password: '', remember: false });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <AuthLayout title="Masuk">
            <h1 className="text-3xl font-bold text-slate-900">Masuk</h1>
            <p className="mb-8 mt-2 text-sm text-slate-500">Masuk untuk mengelola artikel Anda.</p>

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <label htmlFor="login-username" className="mb-1.5 block text-sm font-medium text-slate-700">Username</label>
                    <input
                        id="login-username"
                        type="text"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        className={inputClass}
                        autoFocus
                    />
                    {errors.username && <p className="mt-1.5 text-sm text-rose-700">{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
                    <PasswordInput
                        id="login-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className={inputClass}
                    />
                    {errors.password && <p className="mt-1.5 text-sm text-rose-700">{errors.password}</p>}
                </div>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input
                        type="checkbox"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 accent-teal-600"
                    />
                    Ingat saya
                </label>
                <button
                    id="login-submit"
                    type="submit"
                    disabled={processing}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
                >
                    {processing && <Spinner />} Masuk
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
                Belum punya akun? <Link href="/register" className="font-semibold text-teal-700 hover:underline">Daftar</Link>
            </p>
        </AuthLayout>
    );
}
