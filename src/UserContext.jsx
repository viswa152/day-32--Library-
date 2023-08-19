import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState(true);
  const [bookcount, setbookcount] = useState(0);
  const [membercount, setMembercount] = useState(0);
  const [borrowcount, setBorrowcount] = useState(0);
  const [returnbcount, setReturnbcount] = useState(0);

  //   let loadbook = async () => {
  //     try {
  //       let book = await axios.get(
  //         `https://631f097322cefb1edc40d739.mockapi.io/books`
  //       );
  // setBook()
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <UserContext.Provider
      value={{
        state,
        setState,
        bookcount,
        setbookcount,
        membercount,
        setMembercount,
        borrowcount,
        setBorrowcount,
        returnbcount,
        setReturnbcount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
