import { NextResponse } from "next/server";
import supabase from "../../../../utils/database";

export async function PUT(request, context) {
  try {
    const reqBody = await request.json();
    const params = await context.params;
    const { data, error } = await supabase.from("items")
      .select()
      .eq("id", params.id)
      .single();
    if (error) throw new Error(error.message);
    if (data.email === params.email) {
      const { error } = await supabase.from("items")
        .update(reqBody)
        .eq("id", params.id);
      if (error) {
        throw new Error(error.message);
      }
    } else {
      return NextResponse.json({"message": "他の人が作成したアイテムです"});
    }
    return NextResponse.json({"message": "アイテム編集成功"});
  } catch (err) {
    return NextResponse.json({"message": `アイテム編集失敗: ${err}`});
  }
}
