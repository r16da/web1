import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url(/myimage.png)' }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Welcome to our website!</h1>
      </div>
     
    </div>
  );
}
