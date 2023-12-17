import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)");

  if (error) throw new Error("Could not fetch bookings");

  return data;
}
