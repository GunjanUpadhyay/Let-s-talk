export const getOtherMember=(members,userId)=> members.find((member)=>member.id.toString()!==userId.toString());


