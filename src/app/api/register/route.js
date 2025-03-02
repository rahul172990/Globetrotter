/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { db_Connect_Key } from "@/app/constants";

let client: MongoClient;
if (!global._mongoClientPromise) {
  client = new MongoClient(db_Connect_Key);
  global._mongoClientPromise = client.connect();
}
client = await global._mongoClientPromise;

export async function POST(req: Request) {
  try {
    if (!req) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const body = await req.json();
    if (!body || !body.username || !body.score) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { username, score } = body;
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
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
