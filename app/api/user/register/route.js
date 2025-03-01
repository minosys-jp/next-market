import { NextResponse } from "next/server";
import supabase from "../../../utils/database";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { error } = await supabase.from("users").insert(reqBody);
    if (error) {
      throw new Error(error.message);
    }
console.log(reqBody);
    return NextResponse.json({"message": "ユーザ登録成功" });
  } catch (err) {
    return NextResponse.json({"message": `ユーザ登録失敗: ${err}`});
  }
}
