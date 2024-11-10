
export default function Contact() {


    return (

            <div
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: 'url(/myimg4.png)' }}
            >
                <div className="text-center text-gray-700">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <form>
                        <div className="mt-4">
                            <label className="block mb-2">Name:</label>
                            <input type="text" className="border p-2 rounded" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2">Email:</label>
                            <input type="email" className="border p-2 rounded" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2">Message:</label>
                            <textarea className="border p-2 rounded"></textarea>
                        </div>
                        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                            Send
                        </button>
                    </form>
                </div>
            </div>

    );
}






