import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../lib/controller";
import { doc, getDoc } from "firebase/firestore";
import style from "./style.module.scss";
import Information from "../information/Information";

function Details() {
  const { id } = useParams();

  // Fetch a single document
  const getItem = doc(firestore, `items/${id}`);

  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItemData = async () => {
      setIsLoading(true);
      const docSnap = await getDoc(getItem);
      if (docSnap.exists()) {
        const newItemObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setItem(newItemObj);
        setIsLoading(false);
      } else {
        console.log("No such document");
      }
    };
    fetchItemData();
  }, []);

  console.log(item, "item");
  if (isLoading) return <div className={style.loading} />;
  return (
    // <div>Details</div>
    <div className={style.itemDetails}>
      {Object.keys(item) && Object.keys(item).length ? (
        <Information item={item} detailsPage />
      ) : null}
    </div>
  );
}

export default Details;
