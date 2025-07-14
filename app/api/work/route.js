import { ConnectDB } from "@/lib/config/db";
import WorkModel from "@/lib/models/WorkModel";
const { NextResponse } = require("next/server");
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  const works = await WorkModel.find({});
  return NextResponse.json(works);
}
