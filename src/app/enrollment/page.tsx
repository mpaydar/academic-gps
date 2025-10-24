import Dropdown from "@/components/ui/dropdown";

export default function Enrollment() {

    return (
        <>
        <section className="text-center mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-4  ">Enrollment</h1>
            <h1 className="text-2xl font-bold text-center  text-blue-600 ">Select your course</h1>

        </section>
        <div className="flex flex-col justify-center mx-auto max-w-6xl px-4">
                <Dropdown />
        </div>
        </>
    );
}