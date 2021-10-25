import { serverHttp } from "./app";

serverHttp.listen(3000, () => {
  console.log('App is running on port :3000')
});