import Image from "next/image";
export default function Curriculum() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/myimg3.jpg)" }}
    >
      <h1 className="text-black text-5xl font-serif font-bold text-center m=50px w-3/12">
        Our Curriculum At Greenwood High School
      </h1>
      <div className=" space-x-0 p-6">
      <p className="text-black text-center justify-center font-bold w-100 flex flex-row  items-center w-1/3">
        We offer a dynamic and engaging curriculum designed to meet the diverse
        needs of our students. Our academic programs are tailored to foster
        critical thinking, creativity, and problem-solving skills, ensuring that
        each student is prepared for success in higher education and beyond. Our
        curriculum covers a wide range of subjects, including: Core Subjects:
        Mathematics, Science, English, and Social Studies. Electives: Arts,
        Music, Physical Education, and Technology.
      </p>
      <p className="text-black text-center justify-center font-bold w-100  items-center w-1/3">
        Advanced Courses: Honors and Advanced Placement (AP) classes for
        high-achieving students. We believe in a balanced education, providing
        students with both theoretical knowledge and practical skills. Our
        curriculum is continually updated to reflect the latest educational
        research and trends, making sure our students are equipped for the
        challenges of the modern world.
      </p>
      </div>

    </div>
  );
}
