import LinkListLoader from "./LinkListLoader";

const linklist = [];
function LinkList() {
  if (!linklist.length) return <LinkListLoader />;
  return <ul className="h space-y-4"></ul>;
}

export default LinkList;
