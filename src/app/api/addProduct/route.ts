export const POST = async (req: Request, res: Response) => {
  let response;
  const body = await req.json();

  try {
    response = await fetch(`${process.env.API_BASEURL}/addProduct`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log("error: ", e);
  }
  return Response.json({ response });
};
