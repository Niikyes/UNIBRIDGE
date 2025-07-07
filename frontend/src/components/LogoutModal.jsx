export default function LogoutModal({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-400 text-white rounded-xl shadow-xl p-6 w-96 text-center transform transition-all duration-300 scale-100">
                <div className="flex justify-center mb-4">
                    <svg
                        className="w-12 h-12 text-red-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 002 2h5a2 2 0 002-2V7a2 2 0 00-2-2h-5a2 2 0 00-2 2v1"
                        />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold mb-2">¿Deseas cerrar sesión?</h2>
                <p className="text-sm text-indigo-100 mb-4">
                    Esta acción cerrará tu sesión y perderás acceso inmediato a la plataforma.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-300 transition"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-400 transition"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}
