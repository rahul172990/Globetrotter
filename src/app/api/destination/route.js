import cities from "../../../../data/cities.json";

export async function GET() {
  const randomIndex = Math.floor(Math.random() * cities.length);
  const destination = cities[randomIndex];
  return Response.json(destination);
}
