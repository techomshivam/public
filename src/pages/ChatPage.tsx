import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, ArrowLeft, Phone, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
  {
    id: 1,
    text: "Hi! I saw your post about the iPhone 13 Pro. Is it still lost?",
    sender: 'other',
    timestamp: '10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1708962188322-0e9a5e40c101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcG9ydHJhaXQlMjBvZiUyMGElMjBwZXJzb24lMjB3aXRoJTIwYSUyMGJsdXJyZWQlMjBiYWNrZ3JvdW5kJTJDJTIwY3JvcHBlZCUyMHRvJTIwYSUyMHNxdWFyZSUyMGZvcm1hdC58ZW58MHx8fHwxNzUxMzUyNzkzfDA&ixlib=rb-4.1.0&q=80&w=200$w=100'
  },
  {
    id: 2,
    text: "Yes, I'm still looking for it. Do you have any information?",
    sender: 'me',
    timestamp: '10:32 AM'
  },
  {
    id: 3,
    text: "I think I saw someone with a similar phone near the cafeteria yesterday. Blue color with a cracked screen protector?",
    sender: 'other',
    timestamp: '10:35 AM',
    avatar: 'https://images.unsplash.com/photo-1708962188322-0e9a5e40c101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcG9ydHJhaXQlMjBvZiUyMGElMjBwZXJzb24lMjB3aXRoJTIwYSUyMGJsdXJyZWQlMjBiYWNrZ3JvdW5kJTJDJTIwY3JvcHBlZCUyMHRvJTIwYSUyMHNxdWFyZSUyMGZvcm1hdC58ZW58MHx8fHwxNzUxMzUyNzkzfDA&ixlib=rb-4.1.0&q=80&w=200$w=100'
  },
  {
    id: 4,
    text: "Yes! That sounds exactly like mine! Did you see who had it?",
    sender: 'me',
    timestamp: '10:36 AM'
  },
  {
    id: 5,
    text: "It was a guy from the engineering department. Tall, wearing a red jacket. He was sitting at the corner table.",
    sender: 'other',
    timestamp: '10:38 AM',
    avatar: 'https://images.unsplash.com/photo-1708962188322-0e9a5e40c101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcG9ydHJhaXQlMjBvZiUyMGElMjBwZXJzb24lMjB3aXRoJTIwYSUyMGJsdXJyZWQlMjBiYWNrZ3JvdW5kJTJDJTIwY3JvcHBlZCUyMHRvJTIwYSUyMHNxdWFyZSUyMGZvcm1hdC58ZW58MHx8fHwxNzUxMzUyNzkzfDA&ixlib=rb-4.1.0&q=80&w=200$w=100'
  },
  {
    id: 6,
    text: "Thank you so much! I'll go check there. This is really helpful!",
    sender: 'me',
    timestamp: '10:40 AM'
  }]
  );

  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'me' as const,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const otherUser = {
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1708962188322-0e9a5e40c101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcG9ydHJhaXQlMjBvZiUyMGElMjBwZXJzb24lMjB3aXRoJTIwYSUyMGJsdXJyZWQlMjBiYWNrZ3JvdW5kJTJDJTIwY3JvcHBlZCUyMHRvJTIwYSUyMHNxdWFyZSUyMGZvcm1hdC58ZW58MHx8fHwxNzUxMzUyNzkzfDA&ixlib=rb-4.1.0&q=80&w=200$w=100',
    status: 'Online'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex flex-col" data-id="y5020kd3r" data-path="src/pages/ChatPage.tsx">
      {/* Header */}
      <header className="bg-white shadow-sm border-b flex-shrink-0" data-id="j4w0eahzx" data-path="src/pages/ChatPage.tsx">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-id="gmwrnjhrn" data-path="src/pages/ChatPage.tsx">
          <div className="flex items-center justify-between" data-id="m98ko1akg" data-path="src/pages/ChatPage.tsx">
            <div className="flex items-center space-x-4" data-id="uoab07hs8" data-path="src/pages/ChatPage.tsx">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/portal')}
                className="text-blue-600 hover:text-blue-700" data-id="jv5fpoxyk" data-path="src/pages/ChatPage.tsx">

                <ArrowLeft className="w-4 h-4" data-id="srb0uwc4y" data-path="src/pages/ChatPage.tsx" />
              </Button>
              <div className="flex items-center space-x-3" data-id="i163267gn" data-path="src/pages/ChatPage.tsx">
                <Avatar className="w-10 h-10" data-id="ig2an5dsr" data-path="src/pages/ChatPage.tsx">
                  <AvatarImage src={otherUser.avatar} data-id="j2bk49mu1" data-path="src/pages/ChatPage.tsx" />
                  <AvatarFallback data-id="pj0jhlidc" data-path="src/pages/ChatPage.tsx">{otherUser.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div data-id="susjfk6ch" data-path="src/pages/ChatPage.tsx">
                  <h2 className="font-semibold text-gray-900" data-id="zz6hwomzh" data-path="src/pages/ChatPage.tsx">{otherUser.name}</h2>
                  <p className="text-sm text-green-600" data-id="5jz8j4pxj" data-path="src/pages/ChatPage.tsx">{otherUser.status}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2" data-id="ktbnyud9p" data-path="src/pages/ChatPage.tsx">
              <Button variant="ghost" size="sm" data-id="6ouaytin4" data-path="src/pages/ChatPage.tsx">
                <Phone className="w-4 h-4" data-id="vgzl776rc" data-path="src/pages/ChatPage.tsx" />
              </Button>
              <Button variant="ghost" size="sm" data-id="r3fvo1z3b" data-path="src/pages/ChatPage.tsx">
                <MoreVertical className="w-4 h-4" data-id="8x2aj6oe6" data-path="src/pages/ChatPage.tsx" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-hidden" data-id="pvehwwug2" data-path="src/pages/ChatPage.tsx">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col" data-id="8r9sl23u5" data-path="src/pages/ChatPage.tsx">
          <div className="flex-1 overflow-y-auto py-6 space-y-4" data-id="lxv2dr5u2" data-path="src/pages/ChatPage.tsx">
            {messages.map((msg) =>
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`} data-id="i2k9688y1" data-path="src/pages/ChatPage.tsx">

                <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.sender === 'me' ? 'flex-row-reverse space-x-reverse' : ''}`} data-id="em4ocsn70" data-path="src/pages/ChatPage.tsx">
                  {msg.sender === 'other' &&
                <Avatar className="w-8 h-8" data-id="0yskmvb4s" data-path="src/pages/ChatPage.tsx">
                      <AvatarImage src={msg.avatar} data-id="3ldo7nbr1" data-path="src/pages/ChatPage.tsx" />
                      <AvatarFallback data-id="dmaul4uy8" data-path="src/pages/ChatPage.tsx">SW</AvatarFallback>
                    </Avatar>
                }
                  <div
                  className={`px-4 py-2 rounded-2xl ${
                  msg.sender === 'me' ?
                  'bg-blue-600 text-white rounded-br-md' :
                  'bg-white text-gray-900 rounded-bl-md shadow-sm'}`
                  } data-id="4lzwigu8n" data-path="src/pages/ChatPage.tsx">

                    <p className="text-sm" data-id="r2bg36rn2" data-path="src/pages/ChatPage.tsx">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`} data-id="bvlh660iw" data-path="src/pages/ChatPage.tsx">
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} data-id="ggl56e3q3" data-path="src/pages/ChatPage.tsx" />
          </div>

          {/* Message Input */}
          <div className="border-t bg-white p-4 flex-shrink-0" data-id="kgoudncli" data-path="src/pages/ChatPage.tsx">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2" data-id="hmjl91vof" data-path="src/pages/ChatPage.tsx">
              <div className="flex-1" data-id="6zza3kdw6" data-path="src/pages/ChatPage.tsx">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="border-gray-300 focus:border-blue-500" data-id="4ky06seh4" data-path="src/pages/ChatPage.tsx" />

              </div>
              <Button
                type="submit"
                disabled={!message.trim()}
                className="bg-blue-600 hover:bg-blue-700 px-4" data-id="8th4o19z6" data-path="src/pages/ChatPage.tsx">

                <Send className="w-4 h-4" data-id="j83o05wqe" data-path="src/pages/ChatPage.tsx" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>);

};

export default ChatPage;