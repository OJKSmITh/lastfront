import { NextRequest, NextResponse } from 'next/server'
const db = require("../../../../common/config/db")

let queryString;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const queryPromise = (queryString: string) => {
	return new Promise((resolve, reject) => {  
		db.query(queryString, (error: any, results: any) => {  
			if (error) {  
				return reject(error);  
			}  
			resolve(results);  
		});  
	});  
}  

export const GET = async (req:NextRequest, {params}: {params: {id: number}}) => {
  console.log("params.id::", params.id)
  try{
    queryString = `SELECT * FROM governance WHERE id=${params.id}`  
    const rows = await queryPromise(queryString)
    return NextResponse.json(rows, {headers:corsHeaders})
  } catch(e){
    console.error(e)
  }
}

export const POST = async (req:NextRequest, {params}: {params: {id: number}}) => {
  console.log("params.id::", params.id)
  try{
    queryString = `SELECT * FROM governance WHERE id=${params.id}`  
    const rows = await queryPromise(queryString)
    return NextResponse.json(rows)
  } catch(e){
    console.error(e)
  }
}