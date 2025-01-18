'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from 'axios'

export default function AIAgent() {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [input, setInput] = useState("")
  const [sessionId, setSessionId] = useState("")
  const [dataRetrieved, setDataRetrieved] = useState({
    hasContext:true,
    hasVoted:false,
    providingDetails:false,
    textResponse:"",
  })

  const [messages, setMessages] = useState([])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const startConversation = async () => {
    try{
      const response = await fetch("/api/votes/start",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start:true,
          lng:'es',
          sessionId:"",
          userMessage:""
        })
      })
      const messageReceived = await response.json()
      setSessionId(messageReceived['sessionId'])
      const javscriptMessage = JSON.parse(messageReceived['message'])
      console.log(javscriptMessage, messageReceived['sessionId'])
      setDataRetrieved(javscriptMessage)
      setMessages([javascriptMessage.textResponse])
    }catch(err){
      console.log(err)
    }
  }

  const continueConversation = async (userMessage) => {
    try{
      const response = await fetch("/api/votes/start",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start:false,
          lng:'es',
          sessionId: sessionId,
          userMessage:userMessage,
        })
      })
      console.log(response)
      // logica para añadir mensajes
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{

    const fetchData = async() =>{
      await startConversation()
    }

    fetchData()
  },[]) // eslint-disable-line

  return (
    <Card className="bg-gray-900 border-[#f7cf1d] h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-[#f7cf1d]">AI Voting Assistant</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto mb-4 space-y-4">
        { /*{messages.length === 0 && (
          
        )} */
          <div className="text-gray-400 text-center">
          Ask me anything about the candidates or the voting process!
        </div>}
        {/* {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 rounded-lg max-w-[80%] ${m.role === 'user' ? 'bg-[#f7cf1d] text-black' : 'bg-gray-700 text-white'}`}>
              <p>{m.content}</p>
            </div>
          </div>
        ))} */}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardContent>
        {/* <form onSubmit={()=>handleSubmit(true, input, "", "")} className="flex items-center space-x-2">
          <Input
            placeholder="Type your message here..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="flex-grow bg-gray-800 border-gray-700 text-white"
          />
        </form> */}
        {/* <button
          type='button'
          onClick={startConversation}
        >
          Send
        </button> */}
      </CardContent>
    </Card>
  )
}

