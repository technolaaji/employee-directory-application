let port = String(process.env.PORT);
if (port == null || port == "") {
  port = String(8000);
}

export default port