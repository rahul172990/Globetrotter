/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { db_Connect_Key } from "@/app/constants";

const client = new MongoClient(db_Connect_Key);

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
