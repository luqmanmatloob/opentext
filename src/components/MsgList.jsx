import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";

const getMsg = async () => {
  try {
    // const res = await fetch("http://localhost:3000/api/msg", {

    // while deploying this link works above link dosent 
    const res = await fetch("https://opentext-luqman.vercel.app//api/msg", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch msgs");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading msgs: ", error);
  }
};

export default async function MsgList() {
  const { msgs } = await getMsg();

  return (
    <div className="">
    <div className="">
      {msgs.map((t) => (
        <div
          key={t._id}
          className="p-4 my-3  flex justify-between gap-5 items-start rounded-md shadow-md mb-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            {/* <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
