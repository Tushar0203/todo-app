const z=require('zod')

const Todo = z.object({
  title: z.string(),
  description:z.string(),
});
const User = z.object({
  id: z.string(),
});

module.exports={
    Todo,
    User
}