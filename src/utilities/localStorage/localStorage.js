const addToDb = (userData) => {
  const { email } = userData;
  const exists = getDb();
  let user_info = {};
  if (!exists) {
    user_info[email] = 1;
  } else {
    user_info = JSON.parse(exists);
    if (user_info[email]) {
      const newCount = user_info[email] + 1;
      user_info[email] = newCount;
    } else {
      user_info[email] = 1;
    }
  }
  updateDb(user_info);
};

const getDb = () => localStorage.getItem("user_info");

const updateDb = (user) => {
  localStorage.setItem("user_info", JSON.stringify(user));
};

export { addToDb };
