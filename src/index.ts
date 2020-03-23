import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`Server started with graphQL at http://localhost:${process.env.PORT}/graphql`);
});

app.on('error', (err: Error) => {
  console.error(err);
});