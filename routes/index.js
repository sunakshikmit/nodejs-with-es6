import users from '../apis/users/index';
const router = app => {
  app.use("/api", users);
  app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});
};
export default router;
