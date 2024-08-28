import { Person } from "@/types/Person";

export const getPersonList = async (): Promise<Person[]> => {
  const response = await fetch("http://localhost:8080/persons");
  const data: Person[] = await response.json();
  console.log(data);
  return data;
};
