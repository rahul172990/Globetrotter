import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.API_SECRET_KEY);

export async function GET(req, { params }) {
  const { username } = params;

  try {
    await client.connect();
    const db = client.db("globetrotter");
    const users = db.collection("users");

    const user = await users.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
