import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const saveCustomerInteraction = async (formData) => {
    try {
        await addDoc(collection(db, "customerInteractions"),
            {
                ...formData,
                createdAt: serverTimestamp(),
            }
        );
        console.log("Customer interaction saved in Firestore!");
    } catch (error) {
        console.error("Error saving customer interaction:", error);
    }
};

export const saveContactRecord = async (formData) => {
    try {
        await addDoc(collection(db, "contactRecords"),
            {
                ...formData,
                reachedOutAT: serverTimestamp(),
            }
        );
        console.log("Contact Record saved in Firestore!");
    } catch (error) {
        console.error("Error saving contact record:", error);
    }
};

export const saveAnticipation = async (email) => {
    try {
        await addDoc(collection(db, "anticipation"), {
            email: email,
            createdAt: serverTimestamp(),
        });
        console.log("Anticipation email saved in Firestore!");
    } catch (error) {
        console.error("Error saving anticipation email:", error);
    }
};
