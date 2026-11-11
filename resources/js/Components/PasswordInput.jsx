import { useState } from 'react';

// Input password dengan tombol tampilkan/sembunyikan.
export default function PasswordInput({ id, value, onChange, className = '' }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative">
            <input
                id={id}
                type={visible ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                className={`${className} pr-16`}
            />
            <button
                type="button"
                onClick={() => setVisible((v) => !v)}
                className="absolute inset-y-0 right-0 px-3 text-xs font-medium text-slate-500 hover:text-teal-700"
                aria-label={visible ? 'Sembunyikan password' : 'Tampilkan password'}
            >
                {visible ? 'Sembunyi' : 'Tampil'}
            </button>
        </div>
    );
}
