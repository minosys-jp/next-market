import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import supabase from "../../../utils/database";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { data, error } = await supabase.from("users")
      .select()
      .eq("email", reqBody.email)
      .single();
    if (!error) {
      if (reqBody.password === data.password) {
        const secretKey = new TextEncoder().encode("next-market-app-handlers");
        const payload = { "email": reqBody.email };
        const token = await new SignJWT(payload)
          .setProtectedHeader({"alg": "HS256"})
          .setExpirationTime("1d")
          .sign(secretKey);
        return NextResponse.json({"message": "ログイン成功"});
      } else {
        throw new Error("パスワードが違います");
      }
    } else {
      throw new Error(error.message);
    }
    return NextResponse.json({"message": "ログイン成功"});
  } catch (err) {
    return NextResponse.json({"message": `ログイン失敗: ${err}`});
  }
}
