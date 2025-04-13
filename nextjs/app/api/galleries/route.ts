// /app/api/galleries/route.ts
import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
});

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM galleries");
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
