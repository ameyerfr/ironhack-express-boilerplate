function usersCards(users, parentId) {
  const target = document.getElementById(parentId);

  if (!Array.isArray(users))
    throw new Error("users needs to be of type Array !");
  if (target === null) throw new Error("invalid parent target !");

  function getTemplate(infos) {
    return `<div class="user-card">
            <h2>${infos.name} (${infos.age} years old)</h2>
            <p>${infos.email}</p>
            <img src="${infos.avatar}" alt="${infos.name} avatar">
        </div>`;
  }

  // users.forEach(user => (target.innerHTML += getTemplate(user)));

  users.forEach(function(user) {
    target.innerHTML += getTemplate(user);
  });
}

const users = [
  {
    name: "foo",
    age: 23,
    email: "foo@foo.foo",
    avatar:
      "https://s2.qwant.com/thumbr/0x0/4/a/f561a7b96ad015d4ae85a59a487e2cf406abe14b8894ad959c02576835ba34/thumb-6515.jpg?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F651%2Fthumb-6515.jpg&q=0&b=1&p=0&a=1"
  },
  {
    name: "bar",
    age: 66,
    email: "bar@bar.bar",
    avatar:
      "https://s2.qwant.com/thumbr/0x0/d/4/fb37ba8f53bad60a4a75316b78706a7d5169084fc982eb4ed167deac4de4ca/simpsons42.gif?u=http%3A%2F%2Fsmileysnetwork.com%2Favatars-simspons%2Fsimpsons42.gif&q=0&b=1&p=0&a=1"
  },
  {
    name: "baz",
    age: 34,
    email: "baz@baz.baz",
    avatar:
      "https://s1.qwant.com/thumbr/0x0/3/5/76c537dcd27cfd4edf24dba3bfdcece4e03516030d4e821df76e1ee4958161/1161336_170x100.png?u=https%3A%2F%2Fcdn2.scratch.mit.edu%2Fget_image%2Fgallery%2F1161336_170x100.png&q=0&b=1&p=0&a=1"
  }
];

usersCards(users, "users-widget-target");
