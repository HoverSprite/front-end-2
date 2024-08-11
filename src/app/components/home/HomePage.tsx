"use client";
import { getPersonList } from "@/app/service/DataService";
import { Person } from "@/app/types/Person";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [persons, setPersons] = useState<Person[]>();

  useEffect(() => {
    getPersonList()
      .then((data) => {
        setPersons(data);
      })
      .catch((error) => {
        console.error("Error fetching persons:", error);
      });
  }, []);

  return (
    <div>
      {persons?.map((person, index) => (
        <div key={index}>{person.name}</div>
      ))}
    </div>
  );
}
