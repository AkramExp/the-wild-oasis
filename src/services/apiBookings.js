import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)");

  if (filter) query = query.eq(filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  if (error) throw new Error("Could not fetch bookings");

  return data;
}
