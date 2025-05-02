const post = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const organization = formData.get("organization")?.toString() || "";
  const orgType = formData.get("organization_type")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  const newsletter = formData.has("newsletter") ? "Yes" : "No";
  try {
    console.log({
      name,
      email,
      organization,
      orgType,
      message,
      newsletter
    });
    return redirect("/thank-you", 302);
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response(JSON.stringify({
      error: "Error sending message. Please try again later."
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export { post };
