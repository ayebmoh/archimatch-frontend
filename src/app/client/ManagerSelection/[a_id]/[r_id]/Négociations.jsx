"use client";
import { MainCard } from "@/components";
import { db } from "@/firebase";
import { useFetchData, useGetAnnouncementDetailss } from "@/services/queries";
import {
  ChevronRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const architectManagerSelectionOnePage = (props) => {
  const { children } = props;

  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const cookiesdata = Cookies.get("id");
  const ar_id = pathname.split("/")[4];
  const { data: architect, isLoadingArchitect } = useFetchData(
    `/archimatch_app/architect/${ar_id}/`,
    "architect",
  );
  console.log(ar_id);
  const { data: announcement, isLoading } = useGetAnnouncementDetailss(id);
  const [clientID, setClientID] = useState();
  const [message, setMessage] = useState();
  const [conversation, setConversation] = useState();
  const architect_firebase_id = Cookies.get("firebase_id");
  const chatContainerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);
  // to get the client id ------------------------------------------------------------------------------
  async function getClientID(announcement) {
    console.log("architect id:", architect?.data?.id);
    // Assuming you have initialized app
    // Get a document reference using email (might not be ideal)
    // Create a query to get at most one car with the provided color
    const q = query(
      collection(db, "users"),
      where("email", "==", architect?.data?.user?.email),
      limit(1),
    );
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size > 0) {
        // Return the data of the first car

        setClientID(querySnapshot.docs[0].id);
        return {
          data: querySnapshot.docs[0].data(),
          exists: true,
          id: querySnapshot.docs[0].id,
        };
      } else {
        // No car found with the specified color
        return { data: null, exists: false };
      }
    } catch (error) {
      console.error("Error retrieving users:", error);
      return null; // Handle errors or throw if needed
    }
  }

  // to get the conversation data ----------------------------------------------------------------------

  async function getConversation() {
    const chatRef = doc(
      collection(db, "chat"),
      clientID + architect_firebase_id,
    );

    // Fetch the document data (if it exists)
    const chatSnapshot = await getDoc(chatRef);
    console.log(chatSnapshot);
    // Check if the document exists
    if (chatSnapshot.exists) {
      // User exists, return user data
      setConversation({ data: chatSnapshot.data(), id: chatSnapshot.id });
    } else {
      // User does not exist
      console.log("no conversation");
    }
  }

  // add message ------------------------------------------------------------------------
  async function addMessage() {
    if (!message) {
      console.error("Message is empty");
      return;
    }
    if (!architect_firebase_id || !clientID) {
      console.error("architect_firebase_id or clientID is undefined");
      return;
    }

    const chatRef = doc(
      collection(db, "chat"),
      clientID + architect_firebase_id,
    );
    const newMessage = {
      sender: architect_firebase_id,
      content: message,
      id: new Date().toISOString(),
    };

    try {
      const chatSnapshot = await getDoc(chatRef);
      if (chatSnapshot.exists()) {
        await updateDoc(chatRef, {
          messages: arrayUnion(newMessage),
        });
      } else {
        await setDoc(chatRef, {
          messages: [newMessage],
        });
      }
      console.log("Message added successfully!");
      getConversation();
    } catch (error) {
      console.error("Error adding message:", error);
    }

    setMessage("");
  }

  useEffect(() => {
    if (architect && !clientID) {
      getClientID(architect);
    }
  }, [architect]);

  // useEffect(() => {
  //   if (clientID) {
  //     console.log("client id =======>", clientID);
  //     getConversation();
  //   }
  // }, [clientID]);

  useEffect(() => {
    console.log("conversation =>>", conversation);
  }, [conversation]);

  useEffect(() => {
    // Scroll to bottom when conversation changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (clientID) {
      getConversation();
      console.log(seconds);
    }
  }, [seconds]);

  return (
    <>
      <MainCard className="flex flex-col mt-5">
        <div className="flex justify-start items-center gap-4">
          <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-client-secondary_text_color flex-shrink-0">
            <p className="text-white">{architect?.data?.user?.first_name[0]}</p>
          </div>
          <div className="flex flex-col">
            <Typography
              variant="h6"
              className="flex items-center text-[16px] font-bold text-architect-font_gris gap-2"
            >
              {`${architect?.data?.user?.first_name} ${architect?.data?.user?.last_name}`}
            </Typography>
            <Typography
              variant="h6"
              className="flex items-center text-[13px] gap-2 text-architect-secondary_text_color"
            >
              {architect?.data?.arch_type?.display}
            </Typography>
          </div>
        </div>
        <div className="border-solid border-t-2 border-y-5 mt-3 w-full">
          <div
            ref={chatContainerRef}
            className="bg-cover w-[1130px] mt-4 h-[600px] overflow-y-auto flex flex-col  m-auto"
            // style={{
            //   backgroundImage: `url(${Messengerr.src})`,
            // }}
          >
            {conversation &&
              conversation?.data?.messages?.map((element, index) =>
                element?.sender === architect_firebase_id ? (
                  <div
                    key={index}
                    className="flex justify-end mb-4 cursor-pointer"
                  >
                    <div className="flex max-w-96 bg-client-primary text-white rounded-lg p-3 gap-3">
                      <p className="text-white">{element?.content}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center ml-2">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-architect-secondary_text_color flex-shrink-0">
                        <p className="text-white">
                          {announcement?.data?.client?.user?.first_name[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="flex mb-4 cursor-pointer">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-architect-secondary_text_color flex-shrink-0">
                        <p className="text-white">
                          {architect?.data?.user?.first_name[0]}
                        </p>
                      </div>
                    </div>
                    <div className="flex max-w-96 bg-architect-primary rounded-lg p-3 gap-3">
                      <p className="text-white">{element?.content}</p>
                    </div>
                  </div>
                ),
              )}
          </div>

          {/* <img
            className=" cursor-pointer py-0.5 "
            src={Messengerr.src}
          /> */}
        </div>
        <Typography
          variant="h6"
          className="justify-center self-center text-[16px] lg:w-[500px] text-center gap-2 text-architect-font_gris mt-8"
        >
          Le devis détaillé, avec les coûts estimés par phase, a été envoyé au
          client. Merci de prendre en compte cela dans vos suivis{" "}
        </Typography>
        <div className="flex items-center justify-center self-center mt-3">
          <Typography
            variant="h6"
            className="text-client-primary flex items-center text-[15px] font-bold text-center gap-1 cursor-pointer"
          >
            Consulter devis
            <ChevronRightIcon className="h-5 w-5" />
          </Typography>
        </div>
        <div className="  mt-3 w-full">
          <div className="border-solid border-2 p-3 rounded-lg flex flex-row justify-between items-center mt-6">
            <input
              type="text"
              name=""
              value={message}
              id=""
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message"
              className="w-full  outline-none"
            />
            <PaperAirplaneIcon className="h-9 w-9" onClick={addMessage} />
          </div>
        </div>
      </MainCard>
    </>
  );
};

export default architectManagerSelectionOnePage;
