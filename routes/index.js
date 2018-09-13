import users from '../apis/users/index';
const router = app => {
  app.use("/api", users);
};
export default router;
