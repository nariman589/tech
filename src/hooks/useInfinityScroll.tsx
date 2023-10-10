import { useEffect, useState } from "react";
import db from "db/index";
import { User } from "db/index.types";

function useInfinityScroll(pageNum: number, perPage: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (perPage * pageNum > db.length && pageNum !== 1) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }
      setData((v) => [
        ...v,
        ...db.slice((pageNum - 1) * perPage, pageNum * perPage),
      ]);
      setHasMore(true);
      setIsLoading(false);
    }, 1000);
  }, [pageNum, perPage]);

  return { isLoading, data, hasMore };
}

export default useInfinityScroll;
