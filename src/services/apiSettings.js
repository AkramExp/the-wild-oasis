import supabase from "../services/supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) throw new Error("Could not get settings");

  return data;
}
