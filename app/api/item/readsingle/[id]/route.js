import { NextResponse } from "next/server";
import supabase from "../../../../utils/database";

export async function GET(request, context) {
  try {
    const params = await context.params;
    const { data, error } = await supabase.from("items")
      .select()
      .eq("id", params.id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json({"messsage": "アイテム読み取り成功", singleItem: data});
  } catch (err) {
    return NextResponse.json({"message": `アイテム読み取り失敗: ${err}`});
  }
}
