import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { db_Connect_Key } from "@/app/constants";

const client = new MongoClient(db_Connect_Key);

export async function POST(req) {
  console.log("Request received");

  try {
    const { username, score } = await req.json();
    console.log("Parsed request body:", { username, score });

    // Validate input
    if (!username || typeof username !== "string") {
      return NextResponse.json(
        { error: "Username must be a valid string" },
        { status: 400 }
      );
    }

    if (typeof score !== "number") {
      return NextResponse.json(
        { error: "Score must be a valid number" },
        { status: 400 }
      );
    }

    console.log("Connecting to MongoDB");
    await client.connect();
    const db = client.db("globetrotter");
    const users = db.collection("users");

    console.log("Checking for existing user");
    const existingUser = await users.findOne({ username });
    if (existingUser) {
      console.log("Username already exists");
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    console.log("Inserting new user");
    await users.insertOne({ username, score });
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    console.log("Closing MongoDB connection");
    await client.close();
  }
}
