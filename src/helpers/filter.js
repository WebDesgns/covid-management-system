import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase';


function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const piece = (Math.random() * 16) | 0;
    const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
    return elem.toString(16);
  });
}

export function GetSocietyCollection() {
  const [list, setList] = useState([])
  useEffect(() => {
    firebase
      .firestore()
      .collection("society-list")
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setList(listItems)
      })
  }, []);
  return list
}

export function GetMembersDetail(id){
  const [ detail, setDetail] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('members')
      .where('id', '==', id)
      .onSnapshot((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        if (JSON.stringify(allContent) !== JSON.stringify(detail)) {
          setDetail(allContent)
        }
      })
  }, []);
  return { detail, setDetail };
}

export function GetMembers(userID) {
  const [members, setMembers] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('members')
      .where('familyId', '==', userID)
      .onSnapshot((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        if (JSON.stringify(allContent) !== JSON.stringify(members)) {
          setMembers(allContent)
        }
      })
  }, []);
  return { members, setMembers };
}
export function GetAllSocietyMembers(societyName) {
  const [members, setMembers] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('members')
      .where('societyName', '==', societyName)
      .onSnapshot((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        if (JSON.stringify(allContent) !== JSON.stringify(members)) {
          setMembers(allContent)
        }
      })
  }, []);
  return { members, setMembers };
}
export function GetAllMembers() {
  const [allMember, setAllMembers] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('members')
      .onSnapshot((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        if (JSON.stringify(allContent) !== JSON.stringify(allMember)) {
          setAllMembers(allContent)
        }
      })
  }, []);
  return { allMember, setAllMembers };
}

export function insertMember(data, dataID) {
  data.id = getUUID();
  data.familyId = dataID
  firebase
    .firestore()
    .collection("members")
    .add(data)
}

export function updateMember(data) {

  firebase
    .firestore()
    .collection("members")
    .doc(data.docId)
    .update(data);

}

export function deleteMember(id) {
  firebase
    .firestore()
    .collection("members")
    .doc(id)
    .delete()
}