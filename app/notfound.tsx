// src/notfound.js
import Link from 'next/link';

export default function Notfound() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center text-red-900 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Something went wrong!</p>
                <p>Please try again.</p>
                {/* Adding the Try Again button */}
                <Link href="/contact">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Try Again
                    </button>
                </Link>
            </div>
        </div>
    );
}
