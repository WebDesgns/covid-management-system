import React, { useContext, createContext } from 'react'
import { UseContent } from '../hooks';


export const MemberContext = createContext(null)


export default function MemberProvider({ children }) {
    const { members, setMembers } = UseContent('member');
    
    return (
        <MemberContext.Provider value={{members, setMembers}}>
            {children}
        </MemberContext.Provider>
    )
}


export const useMemberList = () => useContext(MemberContext)

