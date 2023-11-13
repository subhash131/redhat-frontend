export const GET = async () => {
  let response;

  console.log(process.env.API_BASEURL + "/products");
  try {
    response = await fetch(`${process.env.API_BASEURL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => await res.json());
    console.log("response: ", response);
  } catch (e) {
    console.log("error: ", e);
  }
  return Response.json({ response });
};
