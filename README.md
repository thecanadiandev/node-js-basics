# Project readme

A simple node js todo list for practice.

- model,
- controller,
- route,
- middleware,
- env,
- mongodb,
- mongoose,
- async await
- error handling

MongoDB Atlas: account is for tcd.

- Create a cluster for free M0
- Default name, AWS, Default region
- username/whatever_password
- Once cluster is ready, Add a db user
- In network access, Allow access from anywhere.
- Make sure built in role is populated.
- Install mongodb compass & mongoose.

## Schema

- Only those properties set in Schema will be passed onto the database. Everything else is ignored.
- PUT overwrites, whereas PATCH can selectively update.
