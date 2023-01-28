const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Ton",
        email: "ton@example.com",
      },
    ],
    _id: "abc123",
    chatName: "John Doe",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Ton",
        email: "ton@example.com",
      },
    ],
    _id: "bca123",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anthony",
        email: "anthony@example.com",
      },
      {
        name: "Ton",
        email: "ton@example.com",
      },
    ],
    _id: "cba123",
    chatName: "Anthony",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Ton",
        email: "ton@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "abc321",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Ton",
        email: "ton@example.com",
      },
    ],
    _id: "cba321",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Ton",
        email: "ton@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "aac123",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = { chats };
