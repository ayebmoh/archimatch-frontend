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
  setDoc,
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
  const { data: architect, ArcLoading } = useFetchData(
    `/archimatch_app/architect/find_architect_by_user/${cookiesdata}/`,
    "architect",
  );
  const { data: announcement, isLoading } = useGetAnnouncementDetailss(id);
  const [clientID, setClientID] = useState();
  const [message, setMessage] = useState();
  const [conversation, setConversation] = useState();
  const architect_firebase_id = Cookies.get("firebase_id");
  const chatContainerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);
  console.log("architect id:", cookiesdata);
  // to get the client id ------------------------------------------------------------------------------
  async function getClientID(announcement) {
    const email = announcement?.data?.client?.user?.email;
    console.log("client id", announcement?.data?.client?.user?.id);
    console.log("Client email:", email);

    if (!email) {
      console.error("Client email is missing from announcement data");
      return;
    }

    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      limit(1),
    );

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size > 0) {
        const clientDoc = querySnapshot.docs[0];
        console.log("Client ID found:", clientDoc.id);
        setClientID(clientDoc.id);
        return {
          data: clientDoc.data(),
          exists: true,
          id: clientDoc.id,
        };
      } else {
        console.error("No user found with the specified email");
        return { data: null, exists: false };
      }
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  }

  // to get the conversation data ----------------------------------------------------------------------
  async function getConversation() {
    const chatRef = doc(
      collection(db, "chat"),
      architect_firebase_id + clientID,
    );

    try {
      // Fetch the document data (if it exists)
      const chatSnapshot = await getDoc(chatRef);

      // Check if the document exists
      if (chatSnapshot.exists()) {
        // User exists, return user data
        setConversation({ data: chatSnapshot.data(), id: chatSnapshot.id });
      } else {
        // User does not exist
        console.log("no conversation");
        setConversation({ data: [], id: chatRef.id });
      }
    } catch (error) {
      console.error("Error retrieving conversation:", error);
    }
  }

  // add message ------------------------------------------------------------------------
  async function addMessage() {
    if (message) {
      const chatRef = doc(
        collection(db, "chat"),
        architect_firebase_id + clientID,
      );

      const newMessage = {
        sender: architect_firebase_id,
        content: message, // Corrected typo
        id: new Date().toISOString(), // Use ISO string for consistency
      };

      try {
        // Fetch the document data (if it exists)
        const chatSnapshot = await getDoc(chatRef);

        if (chatSnapshot.exists()) {
          // Update the document with the new message
          await updateDoc(chatRef, {
            messages: arrayUnion(newMessage),
          });
        } else {
          // Create the document with the new message
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
  }

  useEffect(() => {
    if (announcement && !clientID) {
      getClientID(announcement);
    }
  }, [announcement]);

  // useEffect(() => {
  //   if (clientID) {
  //     console.log("client id =======>", clientID);
  //     getConversation();
  //   }
  // }, [clientID]);

  useEffect(() => {
    console.log("conversation =>", conversation);
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
      // console.log(seconds);
    }
  }, [seconds]);
  return (
    <>
      <MainCard className="flex flex-col mt-5">
        <div className="flex justify-start items-center gap-4">
          <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-client-secondary_text_color flex-shrink-0">
            <p className="text-white">
              {announcement?.data?.client?.user?.first_name[0]}
            </p>
          </div>
          <div className="flex flex-col">
            <Typography
              variant="h6"
              className="flex items-center text-[16px] font-bold text-architect-font_gris gap-2"
            >
              {`${announcement?.data?.client?.user?.first_name} ${announcement?.data?.client?.user?.last_name}`}
            </Typography>
            <Typography
              variant="h6"
              className="flex items-center text-[13px] gap-2 text-architect-secondary_text_color"
            >
              Client
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
                    <div className="flex max-w-96 bg-architect-primary text-white rounded-lg p-3 gap-3">
                      <p className="text-white">{element?.content}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center ml-2">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-architect-secondary_text_color flex-shrink-0">
                        <p className="text-white">
                          {architect?.data?.architect?.user?.first_name[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="flex mb-4 cursor-pointer">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-architect-secondary_text_color flex-shrink-0">
                        <p className="text-white">
                          {announcement?.data?.client?.user?.first_name[0]}
                        </p>
                      </div>
                    </div>
                    <div className="flex max-w-96 bg-client-primary rounded-lg p-3 gap-3">
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
