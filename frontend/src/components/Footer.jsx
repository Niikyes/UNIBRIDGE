export default function Footer() {
    return (
        <footer className="bg-indigo-600 text-white text-center py-2 mt-10 shadow-inner">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} UNIBRIDGE. Todos los derechos reservados.
            </p>
        </footer>
    );
}
