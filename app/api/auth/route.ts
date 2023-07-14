import { NextRequest, NextResponse } from 'next/server'

const data = {
  "ddd": "dkdkdk"
}

export const GET = async (request: NextRequest) => {
  //fetch
  try{
  
    return new NextResponse(JSON.stringify(data)); 
  }catch(err){
    return new NextResponse("Database Error", {status: 500});
  }
}