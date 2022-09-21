const CHECK_STATUS = 'BOOKSTORE-REACT/category/CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Reducer Function
const checkStatusRed = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default checkStatus;
export { checkStatusRed };
