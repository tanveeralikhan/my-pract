const useAuth = () => {
  return {
    session: {
      user: {
        userId: 1,
        role: "User",
      },
    },
  };
};

export default useAuth;
