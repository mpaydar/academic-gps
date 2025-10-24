"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const options = [
    { value: "one", label: "Data Structures & Algorithms" },
    { value: "two", label: "Database Systems" },
    { value: "three", label: "Advanced Databases" },
    { value: "four", label: "Machine Learning" },
    { value: "five", label: "App Development" },
    { value: "six", label: "Distributed Data Engineering" },
];

export default function Dropdown() {
    const [selected, setSelected] = useState<string>("select");
    const [schedule, setSchedule] = useState<string[]>([]);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    }
    const handleAdd = () => {
        setSchedule([...schedule, selected]);
    }
    return (
        <>
        <div className="flex justify-center">
            <select className="border border-gray-300 rounded-md p-2" value={selected} onChange={handleSelect}>
                <option value=" ">Select your courses</option>
                <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
                <option value="Database Systems">Database Systems</option>
                <option value="Advanced Databases">Advanced Databases</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="App Development">App Development</option>
                <option value="Distributed System">Distributed Data Engineering</option>
            </select>
        </div>
      
        <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white rounded-md p-2" onClick={handleAdd}>Add class to schedule</button>
        </div>


        <Card>
            <CardHeader>
                <CardTitle>Your schedule</CardTitle>
            </CardHeader>
            <CardContent>
            {schedule.length > 0  ? (
            <ul className="list-disc list-inside space-y-1">
               {schedule.map((item, index) => {
                 const course = options.find((o) => o.value === item);
                 return <li key={index}>{course?.label || item}</li>;
               })}
            </ul>
          ) : (
            <p>You have not added any classes to your schedule.</p>
          )}
            </CardContent>
        </Card>

        </>
        

    );
}