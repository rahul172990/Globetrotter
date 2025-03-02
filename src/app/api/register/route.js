import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { db_Connect_Key } from "@/app/constants";

const client = new MongoClient(db_Connect_Key);

// export async function POST(req) {
//   const { username, score } = await req.json();

//   try {
//     await client.connect();
//     const db = client.db("globetrotter");
//     const users = db.collection("users");

//     const existingUser = await users.findOne({ username });
//     if (existingUser) {
//       return NextResponse.json(
//         { error: "Username already exists" },
//         { status: 400 }
//       );
//     }

//     await users.insertOne({ username, score });
//     return NextResponse.json({ message: "User registered successfully" });
//   } catch (error) {
//     return NextResponse.json({ error: error }, { status: 500 });
//   } finally {
//     await client.close();
//   }
// }

export async function POST(req) {
  console.log("Request received");

  const { username, score } = await req.json();
  console.log("Parsed request body:", { username, score });

  try {
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
