import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://rahulkumar888poi:R9H8fOoCM8RbwxlQ@globetrotter.jllui.mongodb.net/?retryWrites=true&w=majority&appName=globetrotter";
const client = new MongoClient(uri);

export async function POST(req) {
  const { username, score } = await req.json();

  try {
    await client.connect();
    const db = client.db("globetrotter");
    const users = db.collection("users");

    const existingUser = await users.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    await users.insertOne({ username, score });
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
